import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink } from 'lucide-react';

import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-8">
        ✦ &nbsp; About me
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
      >
        <p>
          I enjoy building software and continuously learning modern technologies. With experience in full-stack development, I am currently expanding my knowledge in Machine Learning using NumPy, Pandas, Matplotlib, Scikit-learn, and other essential AI tools. My long-term focus is on Large Language Models (LLMs), Agentic AI, and intelligent software systems.
        </p>
        <p>
          My goal is to become an Agentic AI Engineer, developing autonomous AI systems that can reason, collaborate, and solve real-world problems at scale.
        </p>
      </motion.div>

      <h2 className="text-3xl font-normal text-gray-900 dark:text-white mt-24 mb-12">
        ✦ &nbsp; GitHub
      </h2>

      <div className="w-full overflow-hidden py-4 github-calendar-container">
        <GitHubCalendar 
          username="Gauravkatnoria12" 
          colorScheme={darkMode ? 'dark' : 'light'}
          blockSize={13}
          blockMargin={4}
        />
        <style dangerouslySetInnerHTML={{__html: `
          .github-calendar-container svg {
            max-width: 100%;
            height: auto;
          }
        `}} />
        
        <a 
          href="https://github.com/Gauravkatnoria12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-14 px-6 py-4 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 rounded-2xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 w-fit"
        >
          Visit my GitHub Profile <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default About;