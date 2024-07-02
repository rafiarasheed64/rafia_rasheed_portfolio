import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import mongoDbImg from "../assets/mongoDB-img.png";
const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="h-auto w-full bg-[rgb(252,252,253)] py-48 px-20"
      >
        <div className="h-auto w-full flex home-div">
          <div className="h-auto w-[55%] home-div1">
            <h1 className="text-6xl font-light text-[rgb(48,127,128)] h-text">
              Hello
            </h1>
            <h1 className="text-6xl font-light text-[rgb(48,127,128)] h-text">
              I'm <span className="font-bold">Rafia Rasheed</span>
            </h1>
            <h1 className="text-4xl font-semibold mt-8 text-[rgb(48,127,128)] h-text">
              MERN Stack Developer
            </h1>
            {/* <div className="main text-4xl font-semibold text-[rgb(48,127,128)] mt-3">
              <h1 className="absolute s-1">JavaScript</h1>
              <h1 className="absolute s-2">React JS</h1>
              <h1 className="absolute s-3">Next JS</h1>
            </div> */}
            <div className="main text-4xl font-semibold text-[rgb(48,127,128)] mt-3">
              <h1 className="absolute s-1">JavaScript</h1>
              <h1 className="absolute s-2">React JS</h1>
              <h1 className="absolute s-3">Next JS</h1>
              <h1 className="absolute s-4">MongoDB</h1>
              <h1 className="absolute s-5">Node.js</h1>
              <h1 className="absolute s-6">Express.js</h1>
            </div>
          </div>
          <div className="h-auto w-[50%] flex gap-5 flex-wrap justify-end home-div2">
            <div className="slide">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085254/HTML_qhvhot.png"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085331/js_nidwp7.png"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085666/Reactjs_jupjbi.png"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085689/next_lbvdzn.png"
                alt=""
              />
            </div>
            <div className="slide">
              <img className="rounded-lg" src={mongoDbImg} alt="" />
            </div>
          </div>
        </div>
        <div className="h-auto flex justify-between w-full mt-10 fariha ">
          <div className="w-[83%] text-[23px] text-[#494848] text-1">
            Specializing in MERN stack development, I bring over a year of
            professional experience in crafting comprehensive web applications.
            My skill set encompasses
            <span className="text-[rgb(31,79,80)] font-semibold">
              {" "}
              MongoDB
            </span>{" "}
            for database management,{" "}
            <span className="text-[rgb(31,79,80)] font-semibold">
              Express.js
            </span>{" "}
            for server-side logic,{" "}
            <span className="text-[rgb(31,79,80)] font-semibold">React.js</span>{" "}
            for dynamic user interfaces, and{" "}
            <span className="text-[rgb(31,79,80)] font-semibold"> Node.js</span>{" "}
            for backend development. I am adept at working with clients to
            design and implement transformative digital solutions, fostering
            innovation, identifying profitable opportunities, and validating
            concepts to ensure successful project outcomes.
          </div>
          <div className="w-[145px] h-[170px] rounded-lg bg-[rgb(31,79,80)] text-white pb-10 exp">
            <p className="font-semibold text-[80px] text-center font-sans -mt-3">
              1+
            </p>
            <p className="text-[16px] text-stone-300 text-center -mt-2">
              YEAR OF EXPERIENCE
            </p>
          </div>
        </div>
        <div className="h-auto w-max font-semibold text-[17px] flex items-center mt-20 socials">
          Follow Me on
          <div className="h-[2px] w-[100px] bg-slate-300 ml-[20px] mt-1 gray-div"></div>
          <div className="w-max flex gap-3 ml-5 social-main">
            <div className="h-12 w-12 bg-white flex items-center justify-center rounded-lg border ">
              <a
                href="https://github.com/rafiarasheed64"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className=" text-black text-xl social" />
              </a>
            </div>
            <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center border ">
              <a
                href="https://www.linkedin.com/in/rafia-rasheed-6128311b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className=" text-black text-xl social" />
              </a>
            </div>
            <div className="h-12 w-12 rounded-lg border bg-white flex items-center justify-center ">
              <a href="" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className=" text-black text-xl social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
