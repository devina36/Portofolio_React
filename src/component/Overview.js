import React from 'react';
import hand from '../img/Hand2.gif';

function Overview() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-16 md:mb-0">
        <div className="block md:flex">
          <div className="bg-pattern bg-cover flex justify-center md:w-7/12 w-full">
            <img src={hand} alt="https://storyset.com/work" className="w-11/12 h-auto md:w-full lg:w-9/12" />
          </div>
          <div className="w-full md:w-6/12 text-white order-first">
            <h1
              className="relative font-bold text-nama leading-snug mt-10 ml-5 xl:ml-0 duration-300 ease-linear
                            before:duration-300 
                            before:ease-linear
                            before:content-['Overview'] 
                            before:absolute 
                            before:text-7xl
                            lg:before:text-8xl 
                            before:-z-10
                            before:-left-8
                            before:top-2/4
                            before:-translate-y-2/4
                            before:text-gray-400
                            before:opacity-10
            "
            >
              Overview
            </h1>
            <p className=" font-normal text-lg leading-relaxed opacity-60 mt-16">
              My name is Devina Amalia Arindi, I am a fresh graduate from the State University of Malang with
              a Bachelor of Technology and knowledge in web design and development. I'm from Kediri,
              Indonesia. Well organised person, problem solver, independent with high intention of detail
            </p>
            <a
              className=" inline-block hover:bg-prl px-3 py-2 border hover:border-transparent rounded hover:text-bl my-8 bg-transparent border-prl text-prl"
              href="https://drive.google.com/file/d/1joAv8U2P5726l-6ZMdwFk3-cPumZ1Tnc/view?usp=sharing"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;
