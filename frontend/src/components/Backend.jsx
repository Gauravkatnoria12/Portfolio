import React from 'react';
import fastapiImg from '../assets/Backend/fastapi.png';
import postgresqlImg from '../assets/Backend/Postgresql.png';
import mongodbImg from '../assets/Backend/mongodb.png';
import mysqlImg from '../assets/Backend/mysql.png';
import sqlalchemyImg from '../assets/Backend/SQLAlchemy.png';
import pydanticImg from '../assets/Backend/pydantic.png';
import jwtImg from '../assets/Backend/jwt.png';
import oauth2Img from '../assets/Backend/oath2.png';
import restapiImg from '../assets/Backend/restapi.jpg';
import pythonImg from '../assets/AIML/python.png';

export default function Backend() {
  return (
    <section className="max-w-5xl mx-auto py-10">

      <h3 className="text-neutral-800 dark:text-white text-xl font-medium tracking-tight mb-1">Backend</h3>
      <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 mb-10">Technologies I've learned for building backend applications.</p>

      <div className="max-w-5xl mx-auto">
        <div className="grid w-full max-w-[24rem] aspect-square grid-cols-2 grid-rows-4 gap-3 ml-0">

          {/* Large card: FastAPI (first box) */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={fastapiImg} alt="FastAPI" className="w-24 h-24 md:w-28 md:h-28 object-contain select-none pointer-events-none" />
          </div>

          {/* Right side split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={pythonImg} alt="Python" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={sqlalchemyImg} alt="SQLAlchemy" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={mysqlImg} alt="MySQL" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={mongodbImg} alt="MongoDB" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
          </div>

          {/* Left-bottom split into 4 boxes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 row-span-2">
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={pydanticImg} alt="Pydantic" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={jwtImg} alt="JWT" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={oauth2Img} alt="OAuth2" className="w-12 h-12 md:w-14 md:h-14 object-contain select-none pointer-events-none" />
            </div>
            <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 rounded-sm flex items-center justify-center p-1.5 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
              <img src={restapiImg} alt="REST API" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md select-none pointer-events-none" />
            </div>
          </div>

          {/* Tall Right: PostgreSQL */}
          <div className="bg-white border-[2.5px] border-white shadow-lg dark:shadow-sm dark:shadow-neutral-500 row-span-2 rounded-sm flex items-center justify-center p-2 dark:bg-white dark:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 cursor-default">
            <img src={postgresqlImg} alt="PostgreSQL" className="w-20 h-20 md:w-24 md:h-24 object-contain select-none pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}