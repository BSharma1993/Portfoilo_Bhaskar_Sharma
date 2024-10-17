import React from "react";
import mainimg from "../assets/MainImg.jpg";
import { ReactTyped } from "react-typed";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div
        name="About"
        className=" max-w-screen h-fit container m-auto mt-7 md:mt-24 md:px-6"
      >
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
          ABOUT <span className=" text-black">ME</span>
        </h2>

        <div className="  flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0 ">
          <div className="  md:w-[50%] m-auto">
            <h3 className=" m-2 md:mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-green-500">
              MY SKILL
            </h3>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                HTML
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[95%]"
                ></div>
              </div>
            </div>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                CSS
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[90%]"
                ></div>
              </div>
            </div>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                MongoDB
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[75%]"
                ></div>
              </div>
            </div>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                Express.JS
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[70%]"
                ></div>
              </div>
            </div>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                React.JS
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[85%]"
                ></div>
              </div>
            </div>
            <div className="  flex items-center p-2 gap-8 md:gap-0">
              <label htmlFor="htmlandcss" className="w-2/12">
                Node.JS
              </label>
              <div className=" w-56 md:grow bg-gray-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-[90%]"
                ></div>
              </div>
            </div>
            <div className=" m-6 flex justify-between text-center ">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p className=" text-xs md:text-xl">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className=" text-xs md:text-xl">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className=" text-xs md:text-xl">Happy Clients</p>
              </div>
            </div>
            <div className=" border-black flex items-center justify-center gap-2 md:gap-10 text-white">
              <button
                className="btn md:mt-6 border border-blue-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl font-bold hover:scale-110 duration-200 rounded-xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                React Js
                <br />
                <span className=" text-xs md:text-xl">Certificate</span>
              </button>
              <button
                className="btn md:mt-6 border  border-blue-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl font-bold hover:scale-110 duration-200 rounded-xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Java
                <br />
                <span className=" text-xs md:text-xl">Certificate</span>
              </button>
              <button
                className="btn md:mt-6 border border-blue-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl font-bold hover:scale-110 duration-200 rounded-xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                ISO 20000
                <br />
                <span className=" text-xs md:text-xl">Certificate</span>
              </button>
              <button
                className="btn md:mt-6 border  border-blue-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl font-bold hover:scale-110 duration-200 rounded-xl bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                ITIL 4
                <br />
                <span className=" text-xs md:text-xl">Certificate</span>
              </button>
            </div>
          </div>
          <div className=" md:w-[50%] m-auto">
            <div className=" w-1/4 m-auto">
              <img
                src={mainimg}
                alt=""
                className="w-44 h-24 md:h-44 rounded-full mt-4"
              />
            </div>
            <div className=" text-center m-4">
              <h1 className=" md:mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-pink-400 to-blue-500">
                I'm Bhaskar Sharma
              </h1>
              <ReactTyped
                className=" text-[#4077b1] font-bold text-lg md:text-xl"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={60}
                loop={true}
              />
              <p className=" md:w-[600px] m-auto mt-2 md:mt-4 text-black font-bold text-sm text-justify md:text-lg">
                Highly motivated and detail-oriented IT professional seeking a
                challenging position in IT Asset Management. Offering a strong
                background in managing and optimizing IT assets, combined with
                excellent analytical skills and a passion for improving
                operational efficiency. Committed to ensuring accurate inventory
                control, cost optimization, and compliance with industry
                standards.
              </p>
            </div>
            <div className=" m-6 flex items-center justify-between cursor-pointer">
              <div className=" flex flex-col md:flex-row items-center justify-between gap-2 hover:scale-110 duration-200">
                <div className=" border border-black rounded-full w-8 h-8 flex items-center justify-center ">
                  <a
                    href="https://www.youtube.com/channel/UCLkkp8Xc_1oQxPPQtTpY6qw"
                    target="_blank"
                  >
                    {" "}
                    <FaYoutube size={20} color="#FF0000" />
                  </a>
                </div>
                <a
                  className="text-[11px] md:text-xl"
                  href="https://www.youtube.com/channel/UCLkkp8Xc_1oQxPPQtTpY6qw"
                  target="_blank"
                >
                  Youtube Channel
                </a>
              </div>
              <div className=" flex flex-col md:flex-row items-center justify-between gap-2 hover:scale-110 duration-200">
                <div className=" border border-black rounded-full w-8 h-8 flex items-center justify-center">
                  <FaUser size={20} color="#99AAb5" />
                </div>
                <a className="text-[11px] md:text-xl" href="">
                  bslucky62@gmail.com
                </a>
              </div>
              <div className=" flex flex-col md:flex-row items-center justify-between gap-2 hover:scale-110 duration-200">
                <div className=" border border-black rounded-full w-8 h-8 flex items-center justify-center">
                  <FaPhoneAlt size={20} color="#0f52b9" />
                </div>
                <a className="text-[11px] md:text-xl" href="">
                  +91 1234567890
                </a>
              </div>
            </div>

            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
