'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-[#0f0f10] py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#ff2d2d]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#e5e5e5] uppercase tracking-tight">
            Education
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-32 h-1 bg-[#ff2d2d] mt-6 origin-left"
          />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          className="group relative bg-[#151517] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#ff2d2d]/30 transition-all duration-500 max-w-3xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff2d2d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative flex items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#ff2d2d]/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-[#ff2d2d]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] mb-2">
                Bachelor of Computer Applications
              </h3>
              <p className="text-[#e5e5e5]/60 text-lg mb-6">
                Karnataka College of Management and Science
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5">
                  <Calendar className="w-4 h-4 text-[#ff2d2d]" />
                  <span className="text-[#e5e5e5]/70 text-sm font-mono">2021</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5">
                  <Award className="w-4 h-4 text-[#ff2d2d]" />
                  <span className="text-[#e5e5e5]/70 text-sm font-mono">
                    CGPA: 6.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
