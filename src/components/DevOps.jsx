import React from 'react';
import gitImg from '../assets/DevOps/git.png';
import githubImg from '../assets/DevOps/github.png';
import vercelImg from '../assets/DevOps/vercel.png';
import dockerImg from '../assets/DevOps/docker.png';
import renderImg from '../assets/DevOps/render.png';

export default function DevOps() {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <div>
        <h3 className="text-neutral-800 dark:text-white text-xl font-medium tracking-tight mb-1">Dev Ops & Deployment</h3>
        <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-10">Development and deployment tools I'm familiar with.</p>

        <div className="max-w-5xl mx-auto">
          <div className="grid w-full max-w-[24rem] aspect-square grid-cols-2 grid-rows-4 gap-3 ml-0">

            {/* Large card: Git */}
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={gitImg} alt="Git" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
            </div>

            {/* Top Right: Render */}
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1 md:p-0.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={renderImg} alt="Render" className="w-12 h-12 md:w-[5.25rem] md:h-[5.25rem] object-contain select-none pointer-events-none" />
            </div>

            {/* Bottom Right: Vercel */}
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1 md:p-0.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={vercelImg} alt="Vercel" className="w-12 h-12 md:w-[5.25rem] md:h-[5.25rem] object-contain select-none pointer-events-none" />
            </div>

            {/* Docker (Replacing CSS & Framer Motion) */}
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={dockerImg} alt="Docker" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
            </div>

            {/* Tall Right: GitHub */}
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={githubImg} alt="GitHub" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}