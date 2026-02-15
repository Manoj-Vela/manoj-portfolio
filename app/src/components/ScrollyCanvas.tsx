import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollyCanvasProps {
  onProgressChange?: (progress: number) => void;
}

export default function ScrollyCanvas({ onProgressChange }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const progressRef = useRef(0);

  // Preload all images
  useEffect(() => {
    const totalFrames = 135;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i.toString().padStart(3, '0')}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || imagesRef.current.length === 0) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate scaling to cover canvas while maintaining aspect ratio
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgAspect;
      drawHeight = canvas.height;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrollTop = -rect.top;
      const scrollableHeight = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / scrollableHeight));

      progressRef.current = progress;

      // Calculate frame index (0-134)
      const frameIndex = Math.min(134, Math.floor(progress * 135));
      frameRef.current = frameIndex;

      onProgressChange?.(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onProgressChange]);

  // Animation loop
  useEffect(() => {
    if (!imagesLoaded) return;

    const animate = () => {
      drawFrame(frameRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [imagesLoaded, drawFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redraw current frame
      drawFrame(frameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative h-[800vh]"
      style={{ background: '#0f0f10' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ imageRendering: 'crisp-edges' as const }}
        />
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f10]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-[#ff2d2d]/30 border-t-[#ff2d2d] rounded-full animate-spin" />
              <span className="text-[#e5e5e5]/60 text-sm uppercase tracking-wider">
                Loading Experience
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
