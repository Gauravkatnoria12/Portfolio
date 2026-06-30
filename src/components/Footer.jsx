import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200/50 dark:border-neutral-800/40 mt-16">
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Copyright */}
        <div className="order-3 md:order-1 flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            © {currentYear} Gaurav Katnoria.<br />All rights reserved.
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            Developed with passion.
          </p>
        </div>

        {/* Center: Playful Illustration */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img 
            src="/footer.png" 
            alt="Footer Illustration" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Social Links */}
        <div className="order-2 md:order-3 flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2.5 rounded-xl text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-all duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@gaurav.com"
            aria-label="Email"
            className="p-2.5 rounded-xl text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;