import React from 'react';

const Experience = () => {
  const experiences = [
    {
      Grade: 'Self-Learning & Personal Projects',
      percentage: 'Software Development & AI',
      year: '2023 - Present',
      description: 'Built a strong foundation in full-stack development through personal projects, working with modern frontend and backend technologies. Currently focusing on Machine Learning, Large Language Models (LLMs), and Agentic AI while expanding expertise through hands-on projects.'
    },
    {
      Grade: 'Bachelor of Technology (B.Tech) – Computer Science Engineering (Artificial Intelligence & Machine Learning)',
      percentage: 'Currently Pursuing',
      year: '2nd Year Student',
      description: 'Rayat Bahra Professional University, Hoshiarpur.'
    },
    {
      Grade: 'Senior Secondary (Science Stream)',
      percentage: '84.4%',
      year: 'Passing Year: 2025',
      description: 'School of Eminence Purhiran, Hoshiarpur.'
    },
    {
      Grade: 'Matriculation',
      percentage: '88.3%',
      year: 'Passing Year: 2023',
      description: 'Shaheed Amandeep Singh Smart Senior Secondary School Nara, Hoshiarpur.'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-12">
        Education & Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {exp.Grade}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {exp.percentage}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 mb-2">
              {exp.year}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;