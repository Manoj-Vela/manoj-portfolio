import { motion } from 'framer-motion';

interface OverlayProps {
  progress: number;
}

interface TextSection {
  start: number;
  end: number;
  fadeOutStart: number;
  fadeOutEnd: number;
}

const sections: TextSection[] = [
  { start: 0.0, end: 0.2, fadeOutStart: 0.2, fadeOutEnd: 0.3 },
  { start: 0.3, end: 0.5, fadeOutStart: 0.5, fadeOutEnd: 0.6 },
  { start: 0.6, end: 0.8, fadeOutStart: 0.8, fadeOutEnd: 0.9 },
];

function getSectionOpacity(progress: number, section: TextSection): number {
  if (progress < section.start) return 0;
  if (progress <= section.end) {
    // Fade in at start
    if (progress < section.start + 0.02) {
      return (progress - section.start) / 0.02;
    }
    return 1;
  }
  if (progress < section.fadeOutStart) return 1;
  if (progress <= section.fadeOutEnd) {
    return 1 - (progress - section.fadeOutStart) / (section.fadeOutEnd - section.fadeOutStart);
  }
  return 0;
}

function getSectionOffset(progress: number, section: TextSection): number {
  if (progress < section.start) return 30;
  if (progress <= section.end) {
    if (progress < section.start + 0.02) {
      return 30 * (1 - (progress - section.start) / 0.02);
    }
    return 0;
  }
  if (progress < section.fadeOutStart) return 0;
  if (progress <= section.fadeOutEnd) {
    return -20 * ((progress - section.fadeOutStart) / (section.fadeOutEnd - section.fadeOutStart));
  }
  return -20;
}

export default function Overlay({ progress }: OverlayProps) {
  const section1Opacity = getSectionOpacity(progress, sections[0]);
  const section2Opacity = getSectionOpacity(progress, sections[1]);
  const section3Opacity = getSectionOpacity(progress, sections[2]);

  const section1Offset = getSectionOffset(progress, sections[0]);
  const section2Offset = getSectionOffset(progress, sections[1]);
  const section3Offset = getSectionOffset(progress, sections[2]);

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      {/* Section 1 - Centered */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: section1Opacity,
          y: section1Offset,
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#e5e5e5] tracking-tight uppercase mb-4">
            Manoj Kumar
          </h1>
          <p className="text-xl md:text-2xl text-[#ff2d2d] font-medium tracking-widest uppercase mb-6">
            Senior SDET
          </p>
          <p className="text-sm md:text-base text-[#e5e5e5]/60 tracking-wider uppercase">
            Automation. Observability. Reliability.
          </p>
        </div>
      </motion.div>

      {/* Section 2 - Left aligned */}
      <motion.div
        className="absolute inset-0 flex items-center"
        style={{
          opacity: section2Opacity,
          y: section2Offset,
        }}
      >
        <div className="pl-[10%] max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] leading-tight mb-6">
            I build automation systems
            <br />
            <span className="text-[#ff2d2d]">that prevent failures</span>
            <br />
            before customers see them.
          </h2>
          <p className="text-sm md:text-base text-[#e5e5e5]/50 tracking-widest uppercase">
            UI • API • Performance • CI/CD
          </p>
        </div>
      </motion.div>

      {/* Section 3 - Right aligned */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end"
        style={{
          opacity: section3Opacity,
          y: section3Offset,
        }}
      >
        <div className="pr-[10%] max-w-2xl text-right">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] leading-tight mb-6">
            Bridging testing,
            <br />
            <span className="text-[#ff2d2d]">cloud infrastructure,</span>
            <br />
            and observability.
          </h2>
          <p className="text-sm md:text-base text-[#e5e5e5]/50 tracking-widest uppercase">
            Playwright • Kubernetes • Datadog
          </p>
        </div>
      </motion.div>
    </div>
  );
}
