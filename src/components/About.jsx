import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-8">
        ✦ &nbsp; About me
      </h2>
      <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        <p>
          I enjoy building software and continuously learning modern technologies. With experience in full-stack development, I am currently expanding my knowledge in Machine Learning using NumPy, Pandas, Matplotlib, Scikit-learn, and other essential AI tools. My long-term focus is on Large Language Models (LLMs), Agentic AI, and intelligent software systems.
        </p>
        <p>
          My goal is to become an Agentic AI Engineer, developing autonomous AI systems that can reason, collaborate, and solve real-world problems at scale.
        </p>
      </div>
    </section>
  );
};

export default About;