'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#151517] py-32 px-6 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff2d2d]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ff2d2d]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative bg-[#0f0f10] rounded-[3rem] p-12 md:p-20 border border-white/5 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d2d]/5 via-transparent to-[#ff2d2d]/5 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] uppercase tracking-tight leading-tight mb-4"
            >
              Let's build
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-4"
            >
              <span className="text-[#ff2d2d]">reliable</span> systems
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] uppercase tracking-tight leading-tight mb-12"
            >
              together
            </motion.h2>

            <motion.div variants={itemVariants} className="pt-8">
              <motion.a
                href="mailto:manoj.kumar@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 bg-[#ff2d2d] text-white px-10 py-5 rounded-full text-lg font-semibold uppercase tracking-wider hover:bg-[#ff4444] transition-colors duration-300 group shadow-[0_10px_40px_rgba(255,45,45,0.4)]"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
