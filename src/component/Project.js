import React from 'react';
import p1 from '../img/christmas.jpg';
import p2 from '../img/Blog.jpg';
import p3 from '../img/desktop-preview.jpg';
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai';

function Project() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-24 md:mb-0">
        <h1
          className=" relative text-white font-bold text-nama leading-snug ml-5 xl:ml-0 duration-300 ease-linear
                            before:duration-300 
                            before:ease-linear
                            before:content-['Project'] 
                            before:absolute 
                            before:text-7xl
                            md:before:text-8xl 
                            before:-z-10
                            before:-left-8
                            before:top-2/4
                            before:-translate-y-2/4
                            before:text-gray-400
                            before:opacity-10"
        >
          Project
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 mt-16">
          <div
            className="w-full min-w-[285px] max-w-[372px] bg-nb 
                        bg-opacity-20 
                        backdrop-blur 
                        backdrop-filter 
                        py-4 px-[18px] 
                        rounded-md 
                        mx-auto 
                        duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p1} className="w-full rounded-md" alt="christmas" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
              Responsive Landing Page Christmas
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tools: Bootstrap, Javascript </p>
            <div className="absolute bottom-[18px] flex justify-center space-x-3">
              <a
                href="https://github.com/devina36/christmas"
                className=" text-2xl text-prl rounded-full p-1.5 bg-bl flex hover:opacity-50"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://devina36.github.io/christmas/"
                className=" text-2xl text-prl rounded-full p-1.5 bg-bl flex hover:opacity-50"
              >
                <AiOutlineEye />
              </a>
            </div>
          </div>
          <div
            className="w-full min-w-[285px] max-w-[372px] bg-nb 
                        bg-opacity-20 
                        backdrop-blur 
                        backdrop-filter 
                        py-4 px-[18px] 
                        rounded-md 
                        mx-auto 
                        duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p2} className="w-full rounded-md" alt="Blog" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
              Simple Blog With Authorization
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tools: Laravel, Bootstrap, Javascript </p>
            <div className="absolute bottom-[18px] flex justify-center space-x-3">
              <a
                href="https://github.com/devina36/Blog_Laravel"
                className=" text-2xl text-prl rounded-full p-1.5 bg-bl flex hover:opacity-50"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </div>
          <div
            className=" relative w-full min-w-[285px] max-w-[372px] bg-nb bg-opacity-20 backdrop-blur backdrop-filter py-4 px-[18px] rounded-md mx-auto duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p3} className="w-full rounded-md" alt="Fylo" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
              Responsive Landing Page Fylo-Dark
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tools: Tailwind, Javascript </p>
            <div className=" absolute bottom-[18px] flex justify-center space-x-3">
              <a
                href="https://github.com/devina36/Fylo_landing_page_dark_theme"
                className=" text-2xl text-prl rounded-full p-1.5 bg-bl flex hover:opacity-50"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://devina36.github.io/Fylo_landing_page_dark_theme/"
                className=" text-2xl text-prl rounded-full p-1.5 bg-bl flex hover:opacity-50"
              >
                <AiOutlineEye />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
