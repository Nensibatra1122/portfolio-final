import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#hero', label: 'Home' }, // Linked directly back to the top hero layout
  { href: '#gallery', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Centralized smooth scrolling function for both mobile and desktop menus
  const handleLinkClick = (e, href) => {
    e.preventDefault(); 
    setOpen(false); 

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Identity / Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-lg font-bold tracking-tight text-white">
          <span className="text-cyan-400">Nensi</span> Batra
        </a>

        {/* Desktop View Navigation */}
        <nav className="hidden gap-6 md:flex items-center">
          {links.map(l => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={(e) => handleLinkClick(e, l.href)}
              className="relative group text-gray-300 hover:text-white transition text-sm font-medium"
            >
              {l.label}
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-cyan-400 rounded-full group-hover:w-full transition-[width] duration-300 -translate-x-1/2"></span>
            </a>
          ))}
          
          {/* Synced Production Path Hire Me Link */}
          <a
            href="/resume.pdf"
            download="Nensi_Batra_Resume.pdf"
            className="rounded-xl bg-cyan-500 hover:bg-cyan-400 px-4 py-2 font-semibold shadow-glow shadow-cyan-500/10 transition text-sm text-gray-950"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger Trigger Toggle Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Responsive Navigation Panel Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-gray-950/95 px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <li key={l.href}>
                  <a 
                    onClick={(e) => handleLinkClick(e, l.href)} 
                    href={l.href} 
                    className="block rounded-lg px-2 py-2 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download="Nensi_Batra_Resume.pdf"
                  className="block rounded-lg bg-cyan-500 hover:bg-cyan-400 px-4 py-2 text-center font-semibold text-gray-950 text-sm shadow-md"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}