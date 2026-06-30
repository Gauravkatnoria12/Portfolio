import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Project Three',
      description: 'A real-time chat application with Socket.io.',
      tags: ['React', 'Socket.io', 'Express'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Project Four',
      description: 'A task management app with real-time collaboration.',
      tags: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-normal text-gray-900 dark:text-white mb-12"
      >
        ✦ &nbsp; Projects
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-500 dark:text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;