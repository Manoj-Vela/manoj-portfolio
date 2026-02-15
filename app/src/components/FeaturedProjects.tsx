'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Eye, Brain } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Automation Framework',
    subtitle: 'Playwright + API automation',
    description:
      'A comprehensive testing framework supporting UI and API automation with parallel execution and detailed reporting.',
    icon: Layers,
  },
  {
    title: 'Observability System',
    subtitle: 'Datadog-based monitoring',
    description:
      'Real-time monitoring and alerting infrastructure providing deep insights into system performance and reliability.',
    icon: Eye,
  },
  {
    title: 'AI Test Platform',
    subtitle: 'Self-healing automation',
    description:
      'Machine learning-powered test automation that adapts to UI changes and reduces maintenance overhead.',
    icon: Brain,
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section ref={ref} className="relative bg-[#151517] py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff2d2d]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] uppercase tracking-tight">
            Featured <span className="text-[#ff2d2d]">Work</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-3xl p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#ff2d2d]/30 hover:bg-[rgba(255,255,255,0.05)]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d2d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#ff2d2d]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff2d2d]/20 transition-colors duration-300">
                    <project.icon className="w-7 h-7 text-[#ff2d2d]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#e5e5e5] mb-2 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#ff2d2d] text-xs font-medium uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#e5e5e5]/50 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff2d2d] via-[#ff2d2d]/50 to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
