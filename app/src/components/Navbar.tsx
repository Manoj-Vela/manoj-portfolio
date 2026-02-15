'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mk-manojkumar/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          rotateX: isHovered ? 6 : 0,
          rotateY: isHovered ? 4 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Main curved cube container */}
        <motion.div
          className={`
            flex items-center gap-6 px-8 py-4 rounded-full
            bg-[rgba(15,15,16,0.7)] backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            transition-all duration-500
            ${scrolled ? 'shadow-[0_8px_32px_rgba(255,45,45,0.1)]' : ''}
          `}
        >
          {/* Left - Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#e5e5e5]/70 hover:text-[#ff2d2d] transition-colors duration-300 uppercase text-xs tracking-widest font-medium flex items-center gap-2"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            Menu
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Center - Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-[#e5e5e5] tracking-tight hover:text-[#ff2d2d] transition-colors duration-300"
          >
            MK
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Right - Contact */}
          <a
            href="#contact"
            className="text-[#e5e5e5]/70 hover:text-[#ff2d2d] transition-colors duration-300 uppercase text-xs tracking-widest font-medium"
          >
            Contact
          </a>
        </motion.div>

        {/* Social icons row - appears below on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(15,15,16,0.8)] backdrop-blur-xl border border-white/10"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.2, color: '#ff2d2d' }}
                  className="text-[#e5e5e5]/60 hover:text-[#ff2d2d] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-40 left-0 right-0 flex flex-col items-center gap-2 py-4 rounded-2xl bg-[rgba(15,15,16,0.9)] backdrop-blur-xl border border-white/10"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-[#e5e5e5]/70 hover:text-[#ff2d2d] transition-colors duration-300 uppercase text-sm tracking-widest font-medium py-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
