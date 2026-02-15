'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  'Playwright',
  'Cypress',
  'Selenium',
  'Rest Assured',
  'Datadog',
  'Kubernetes',
  'Jenkins',
  'Docker',
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section ref={ref} className="relative bg-[#0f0f10] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Curved red pill container */}
          <div className="bg-[#ff2d2d] rounded-[3rem] py-10 px-8 md:px-16 shadow-[0_20px_60px_rgba(255,45,45,0.3)]">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0f0f10] text-[#e5e5e5] px-6 py-3 rounded-full text-sm md:text-base font-medium tracking-wide cursor-default transition-colors duration-300 hover:bg-[#151517]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-[#ff2d2d]/30 rounded-full" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-[#ff2d2d]/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
