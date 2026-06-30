import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

const DiscordIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-64 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-xl flex-1 md:mt-4"
      >
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={reveal}
          className="mb-6 text-4xl font-normal text-gray-600 dark:text-white md:text-3xl"
        >
          Hello, I&apos;m
        </motion.p>

        <h1 className="mb-4 text-5xl font-brush text-red-500 tracking-tight md:text-7xl lg:text-8xl">
          Gaurav
        </h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={reveal}
          className="mb-8 max-w-md text-xl leading-8 text-gray-600 dark:text-gray-400 md:text-2xl"
        >
          Computer Science student focused on Machine Learning, Agentic AI , LLMs and Gen AI.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.28}
          variants={reveal}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/5 bg-white/70 p-4 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-white"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/5 bg-white/70 p-4 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-white"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/5 bg-white/70 p-4 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-white"
          >
            <XIcon className="h-7 w-7" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/5 bg-white/70 p-4 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-white"
          >
            <DiscordIcon className="h-7 w-7" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1 w-full max-w-[260px] aspect-[3/4] mt-8 md:-mt-28 cursor-pointer"
      >
        {/* Minimal single-color gradient backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-transparent dark:from-slate-400/30 to-transparent rounded-[2.5rem] blur-2xl -z-10 pointer-events-none" />

        <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5">
          <img 
            src="/shinchan.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
