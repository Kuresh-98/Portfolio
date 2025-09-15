import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] pt-16 pb-8 scroll-mt-20">
      <h3 className="text-center mb-2 text-1xl font-ovo uppercase tracking-widest text-indigo-600">
        My Portfolio
      </h3>
      <h2 className="text-center text-5xl sm:text-6xl font-ovo font-semibold mb-10 text-gray-900 dark:text-gray-100">
        My Latest Work
      </h2>

      <p className="text-justify max-w-2xl mx-auto mt-4 mb-10 font-ovo text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {workData.map((project, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group shadow-md hover:shadow-xl transition duration-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="card w-11/12 rounded-lg absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 
              flex items-center justify-between group-hover:bottom-6 transition-all duration-500 border border-theme"
            >
              <div>
                <h2 className="text-base font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div>
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="border rounded-full border-theme w-9 h-9 p-2 bg-white dark:bg-gray-800 shadow-lg group-hover:bg-accent transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Show More Button */}
      {/* <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 
        border border-gray-500 rounded-full py-3 px-10 mx-auto mt-12 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </a> */}
    </div>
  );
};

export default Work;
