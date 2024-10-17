import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Netflix from "../assets/Netflix.jpg";
import socialmedia from "../assets/socialmedia.jpg";
import menubar from "../assets/menubar.jpg";
import landingpage from "../assets/landingpage.jpg";
import simplepage from "../assets/simplepage.jpg";
import Swipersjs from "../assets/Swipersjs.jpg";

const Portfolio = () => {
  return (
    <>
      <div
        name="Portfolio"
        className=" max-w-screen h-fit container m-auto mt-7 md:mt-24 px-4 md:px-10"
      >
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] ">
          PROT<span className=" text-black">FOLIO</span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 ">
          <div
            className=" px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={Netflix}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              How To Create Netflix Clone Website Using HTML & CSS |
              Step-by-Step Tutorial (Hindi)
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_7").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>
          <div
            className="px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={socialmedia}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              Create Amazing Social Media Buttons | Hover Effects with HTML &
              CSS | Step-by-Step Tutorial (Hindi)
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_6").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>
          <div
            className=" px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={Swipersjs}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              Responsive Card Slider in HTML CSS & JS With Swipers JS |
              Step-by-Step Tutorial (Hindi)
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_8").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>

          <div
            className="px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={menubar}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              How To Create Responsive Navigation Menu Bar Using HTML CSS & JS |
              Step-by-Step Tutorial (Hindi).
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_9").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>
          <div
            className="px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={landingpage}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              How To Create Simple Landing Page Using HTML, CSS and JavaScript |
              Step-by-Step Tutorial (Hindi)
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_10").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>
          <div
            className="px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
          >
            <div className=" max-w-full ">
              <img
                className=" rounded-lg w-[400px] h-[200px]"
                src={simplepage}
                alt=""
              />
            </div>
            <h3 className=" mt-4 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]">
              How To Create Landing Page Using HTML & CSS |Step-by-Step Tutorial
              (Hindi)
            </h3>
            <div className=" mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_11").showModal()
                }
                className=" text-sm md:text-2xl flex items-center justify-between gap-52 md:gap-72 text-black hover:text-blue-500 "
              >
                Vist Site
                <FaArrowAltCircleRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
