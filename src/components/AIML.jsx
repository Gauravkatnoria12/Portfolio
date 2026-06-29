import React from 'react';
import pythonImg from '../assets/AIML/python.png';
import pandasImg from '../assets/AIML/pandas.png';
import numpyImg from '../assets/AIML/numpy.png';
import scikitImg from '../assets/AIML/Scikit.png';
import anacondaImg from '../assets/AIML/anaconda.jpg';
import matplotlibImg from '../assets/AIML/matplotlib.png';
import seabornImg from '../assets/AIML/seaborn.png';
import pycharmImg from '../assets/AIML/PyCharm.png';
import chatgptImg from '../assets/ChatGPT.png';
import jupyterImg from '../assets/AIML/Jupyter.png';

export default function AIML() {
  return (
    <section className="max-w-5xl mx-auto py-10">

      <h3 className="text-neutral-800 dark:text-white text-xl font-medium tracking-tight mb-1">AI & Machine Learning</h3>
      <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-10">Technologies I'm currently learning and exploring in Artificial Intelligence.</p>

      <div className="max-w-5xl mx-auto">
        <div className="grid w-full max-w-[24rem] aspect-square grid-cols-2 grid-rows-4 gap-3 ml-0">

          {/* Large card */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={pythonImg} alt="Python" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
          </div>

          {/* Right side split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={pandasImg} alt="Pandas" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={numpyImg} alt="NumPy" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={scikitImg} alt="Scikit-Learn" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={anacondaImg} alt="Anaconda" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md select-none pointer-events-none" />
            </div>
          </div>

          {/* Left-bottom split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={matplotlibImg} alt="Matplotlib" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={seabornImg} alt="Seaborn" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={pycharmImg} alt="PyCharm" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-0.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={chatgptImg} alt="ChatGPT" className="w-18 h-18 md:w-[5.25rem] md:h-[5.25rem] object-contain rounded-md select-none pointer-events-none" />
            </div>
          </div>

          {/* Tall Right */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={jupyterImg} alt="Jupyter Notebook" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}