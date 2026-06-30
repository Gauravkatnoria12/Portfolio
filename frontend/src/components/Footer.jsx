import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@gaurav.com', label: 'Email' },
  ];

  return (
    <footer className="w-full border-t border-neutral-200/60 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-950/20 mt-24">
      <div className="max-w-5xl mx-auto pt-16 pb-8 px-6 md:px-12 lg:px-24">
        
        {/* Top Section: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand/About Col */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Gaurav Katnoria
            </a>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              AI Engineer <br />Web Applications Dev <br />Student <br />
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
              <MapPin className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
              <span>India — Open to opportunities</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Illustration Col */}
          <div className="flex flex-col md:items-end gap-6 md:text-right">
            <div className="flex flex-col gap-2 items-start md:items-end">
              <h4 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                Say Hello
              </h4>
              <a 
                href="mailto:hello@gaurav.com" 
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
              >
                hello@gaurav.com
              </a>
            </div>
            
            <div className="flex items-center justify-start md:justify-end">
              <img 
                src="/footer.png" 
                alt="Footer Illustration" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain select-none pointer-events-none hover:scale-110 hover:rotate-3 transition-all duration-500"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="pt-8 border-t border-neutral-200/50 dark:border-neutral-800/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Gaurav Katnoria. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Developed with passion for AI and Software Engineering.
            </p>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800/50 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;