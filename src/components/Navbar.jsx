import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ChevronDownSquare, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const brandTexts = ["Gaurav K", "AI Engineer"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % brandTexts.length);
    }, 3000); // 3 seconds total for readability (2s stable + 1s transition feel)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(textInterval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/30 dark:bg-neutral-900/30 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)] dark:shadow-none' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="relative h-6 flex items-center overflow-hidden min-w-[120px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ y: 10, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -10, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap uppercase tracking-wider"
              >
                {brandTexts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-yellow-400 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-7 h-7 fill-current" strokeWidth={1.5} /> : <Moon className="w-7 h-7 fill-current" strokeWidth={1} />}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <ChevronDownSquare className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                <span className="text-sm text-gray-500">Theme</span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-xl bg-gray-50 dark:bg-white/5"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;