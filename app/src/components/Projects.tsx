'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Datadog Observability Framework',
    description: 'Real-time monitoring and alerting infrastructure',
  },
  {
    name: 'CI/CD Test Pipeline',
    description: 'Automated testing integration with Jenkins and GitLab',
  },
  {
    name: 'Microservices Automation Suite',
    description: 'End-to-end testing for distributed systems',
  },
  {
    name: 'AI Test Monitoring Platform',
    description: 'Self-healing test automation with ML capabilities',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#0f0f10] py-32 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#e5e5e5] uppercase tracking-tight">
            Key Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-32 h-1 bg-[#ff2d2d] mt-6 origin-left"
          />
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="flex items-center justify-between py-8 border-b border-white/10 cursor-pointer">
                <div className="flex-1">
                  <motion.h3
                    animate={{
                      x: hoveredIndex === index ? 10 : 0,
                      color: hoveredIndex === index ? '#ff2d2d' : '#e5e5e5',
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-4xl font-bold uppercase tracking-tight"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-[#e5e5e5]/50 text-sm mt-2"
                  >
                    {project.description}
                  </motion.p>
                </div>

                <motion.div
                  animate={{
                    x: hoveredIndex === index ? 0 : -20,
                    opacity: hoveredIndex === index ? 1 : 0.3,
                    rotate: hoveredIndex === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 ml-8"
                >
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'border-[#ff2d2d] bg-[#ff2d2d]/10'
                        : 'border-white/20'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-5 h-5 transition-colors duration-300 ${
                        hoveredIndex === index
                          ? 'text-[#ff2d2d]'
                          : 'text-[#e5e5e5]/50'
                      }`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Hover line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-px bg-[#ff2d2d] origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
