'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mk-manojkumar/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f10] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left - Name */}
          <div className="text-center md:text-left">
            <span className="text-[#e5e5e5] font-bold text-xl tracking-tight">
              Manoj Kumar
            </span>
            <p className="text-[#e5e5e5]/40 text-sm mt-1">
              Senior SDET • Bengaluru, India
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#e5e5e5]/50 hover:text-[#ff2d2d] hover:bg-[#ff2d2d]/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Right - Contact */}
          <a
            href="#contact"
            className="text-[#e5e5e5]/50 hover:text-[#ff2d2d] transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
          >
            Contact
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-[#e5e5e5]/30 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
