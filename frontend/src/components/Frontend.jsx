import React from 'react';
import reactImg from '../assets/react.png';
import tailwindImg from '../assets/Tailwind.png';
import htmlImg from '../assets/html.png';
import figmaImg from '../assets/figma.png';
import codepenImg from '../assets/codepen.png';
import cssImg from '../assets/css.png';
import framerImg from '../assets/framer-motion.png';
import chatgptImg from '../assets/ChatGPT.png';
import geminiImg from '../assets/gemini.jpg';
import jsImg from '../assets/JavaScript.png';

export default function Frontend() {
  return (
    <section className="max-w-5xl mx-auto py-10">

      <h3 className="text-neutral-800 dark:text-white text-xl font-medium tracking-tight mb-1">Frontend</h3>
      <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-10">Technologies I use to build modern, responsive, and user-friendly web applications.</p>

      <div className="max-w-5xl mx-auto">
        <div className="grid w-full max-w-[24rem] aspect-square grid-cols-2 grid-rows-4 gap-3 ml-0">

          {/* Large card */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={reactImg} alt="React" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} />
          </div>

          {/* Right side split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={tailwindImg} alt="Tailwind" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={htmlImg} alt="HTML" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={cssImg} alt="CSS" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={framerImg} alt="Framer Motion" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
          </div>

          {/* Left-bottom split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={figmaImg} alt="Figma" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={codepenImg} alt="Codepen" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-0.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={chatgptImg} alt="ChatGPT" className="w-18 h-18 md:w-[5.25rem] md:h-[5.25rem] object-contain rounded-md select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={geminiImg} alt="Gemini" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md select-none pointer-events-none" />
            </div>
          </div>

          {/* Tall Right */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={jsImg} alt="JavaScript" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}