import React from "react";
import aeroImg from '../assets/aero-img.avif'
import bareezeImg from '../assets/bareeze-image.jfif'
import sapphireImg from '../assets/sapphire-image.webp'
import { BsGithub,BsLink } from 'react-icons/bs';


const Works = () => {
  return (
    <>
      <div className="h-max w-full pt-48 pb-20 px-20  bg-[rgb(247,248,250)] flex flex-col items-center" id="Works">
  <h1 className="text-[#11204D] font-semibold text-[36px] text-center Font">
    My Portfolio
  </h1>
  <p className="text-center mt-2 text-[14px] text-[#11204D59] Font font-medium">
    Just some of the projects I worked on
  </p>
  <div className="mt-12 overflow-hidden flex justify-around gap-3 flex-wrap">

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
    
  <div className="proj-imgbx">
    <img src={aeroImg} className="w-[100%] h-[100%]" />
    <div className="proj-txtx">
      <h3 className="text-xl font-semibold">Aero Clone</h3>
      <div className="w-[150px] m-auto flex justify-between">
        <a href="https://github.com/rafiarasheed64/aero-website">
      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">GitHub <BsGithub className="ml-2" size={20} /></button>
      
        </a>
        <a href="https://rafiarasheed64.github.io/aero-website/">
      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">Live
        <BsLink className="ml-2" size={20} />
      </button>
        </a>

      </div>
    </div>

  </div>
</div>
<div className="col-span-12 sm:col-span-6 md:col-span-4">
  <div className="proj-imgbx">
    <img src={bareezeImg}  className="w-[100%]"/>
    <div className="proj-txtx">
    <h3 className="text-xl font-semibold">Bareeze Clone</h3>
      <div className="w-[150px] m-auto flex justify-between">
        <a href="https://github.com/rafiarasheed64/breeze-web-clone">
      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">GitHub <BsGithub className="ml-2" size={20} /></button>
      
        </a>
        <a href="https://rafiarasheed64.github.io/breeze-web-clone/">
      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">Live
        <BsLink className="ml-2" size={20} />
      </button>
        </a>

      </div>
    </div>
  </div>
</div>
<div className="col-span-12 sm:col-span-6 md:col-span-4">
  <div className="proj-imgbx">
    <img src={sapphireImg} className="w-[100%] "/>
    <div className="proj-txtx">
    <h3 className="text-xl font-semibold">Sapphire Clone</h3>
      <div className="w-[150px] m-auto flex justify-between">
        <a href="https://github.com/rafiarasheed64/sapphire">
      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">GitHub <BsGithub className="ml-2" size={20} /></button>
      

        </a>
        <a href="">

      <button className="border flex bg-[rgb(25,67,68)] text-white border-black py-2 px-3">Live 
        <BsLink className="ml-2" size={20} />
      </button>
        </a>

      </div>
    </div>
  </div>
</div>

    {/* ////////////////////////////// */}
    
  </div>
</div>

      <div className="h-max w-full bg-white p-20 exp-main">
        <h1 className="text-[#11204D] font-semibold text-[36px] Font">
          My Experience
        </h1>
        <div className="h-max w-full flex justify-between mt-5 experience">
          <div className="p-10 flex w-[50%] gap-10 exp-1">
            <div className="text-[17px] text-[#11204DB3] w-[25%]">
              Jan 2024 - Present
            </div>
            <div className=" border-l-2 w-[70%]">
              <h1 className="text-[19px] text-[#11204D] font-medium ml-8">
                WebDevrs
              </h1>
              <h1 className="text-[17px] text-[#11204D] font-medium ml-8 mt-2">
                Frontend Developer
              </h1>
              <p className="ml-8 mt-5 text-[17px] text-[#11204DB3]">
                Crafting responsive web designs using HTML, CSS, and JavaScript
                to ensure intuitive and user-friendly interfaces. Utilizing
                React.js and Next.js to develop dynamic frontend components and
                engaging interactive features. Incorporating jQuery libraries to
                augment functionality and enhance user experience. Performing
                extensive testing and debugging to effectively identify and
                resolve frontend issues..
              </p>
            </div>
          </div>
          <div className="p-10 w-[50%] flex gap-10 exp-2">
            <div className="text-[17px] text-[#11204DB3] w-[25%]">
              Sep 2023 - Present
            </div>
            <div className=" border-l-2 w-[70%]">
              <h1 className="text-[19px] text-[#11204D] font-medium ml-8">
              WebDevrs
              </h1>
              <h1 className="text-[17px] text-[#11204D] font-medium ml-8 mt-2">
                Trainee MERN Stack Developer
              </h1>
              <p className="ml-8 mt-5 text-[17px] text-[#11204DB3]">
                Participating in intensive training and hands-on experience with
                MERN Stack technologies: MongoDB, Express.js, Node.js, and
                React.js, under experienced developer guidance. Mastering
                full-stack application development and integration using MERN
                Stack principles to create scalable and robust solutions.
                Exploring Nest.js, an innovative framework for building modular
                server-side applications, to enhance technical expertise and
                project capabilities..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
