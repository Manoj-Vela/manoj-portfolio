'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Clock, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'SUN TECHNOLOGY',
    role: 'SDET',
    period: 'Dec 2021 – Present',
    icon: Briefcase,
    achievements: [
      'Built UI and API automation frameworks using Playwright, Cypress, Rest Assured',
      'Integrated CI/CD pipelines with Jenkins and GitLab',
      'Reduced QA cycle time by 35%',
      'Implemented observability with Datadog',
      'Reduced detection time by 40%',
      'Performed load testing with JMeter',
      'Improved scalability by 25%',
    ],
  },
  {
    company: 'TCS iON',
    role: 'MEAN Stack Intern',
    period: 'Dec 2022 – Feb 2023',
    icon: Zap,
    achievements: [
      'Built full-stack apps using MongoDB, Express, Angular, Node.js',
      'Created UI and API test flows',
      'Improved defect detection',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen bg-[#151517] py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#ff2d2d]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#e5e5e5] uppercase tracking-tight">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-32 h-1 bg-[#ff2d2d] mt-6 origin-left"
          />
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative bg-[#0f0f10] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#ff2d2d]/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff2d2d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff2d2d]/10 flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-[#ff2d2d]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#e5e5e5]">
                      {exp.company}
                    </h3>
                    <p className="text-[#ff2d2d] font-medium">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Clock className="w-4 h-4 text-[#e5e5e5]/40" />
                  <span className="text-[#e5e5e5]/50 text-sm font-mono">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#ff2d2d]/60 mt-2" />
                    <p className="text-[#e5e5e5]/70 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
