'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-[#0f0f10] py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff2d2d]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-2"
        >
          {/* First Block */}
          <motion.h2
            variants={lineVariants}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#e5e5e5] uppercase tracking-tight leading-[0.95]"
          >
            Let's build reliable
          </motion.h2>
          <motion.h2
            variants={lineVariants}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight leading-[0.95]"
          >
            <span className="text-[#ff2d2d]">and scalable</span>
          </motion.h2>
          <motion.h2
            variants={lineVariants}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#e5e5e5] uppercase tracking-tight leading-[0.95] mb-20"
          >
            systems
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={lineVariants}
            className="w-full max-w-md h-px bg-gradient-to-r from-[#ff2d2d]/60 via-[#ff2d2d]/20 to-transparent my-16"
          />

          {/* Subtext */}
          <motion.p
            variants={lineVariants}
            className="text-lg md:text-xl text-[#e5e5e5]/60 max-w-2xl leading-relaxed"
          >
            Automation-driven quality for modern cloud platforms.
          </motion.p>

          <motion.p
            variants={lineVariants}
            className="text-base text-[#e5e5e5]/40 max-w-xl leading-relaxed pt-4"
          >
            Based in Bengaluru, India. I specialize in building robust automation
            frameworks, implementing CI/CD pipelines, and ensuring system
            reliability through comprehensive testing strategies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
