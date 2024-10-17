import React, { useState } from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import mainimg from "../assets/MainImg.jpg";
// import icon from "../assets/icon.jpg";
import MyModal from "./Showmodel";
import Showmodel2 from "./Showmodel2";
import resume from "../assets/Bhaskar-Resume.pdf";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const CloseModal = () => setShowModal(false);
  const CloseModal2 = () => setShowModal2(false);

  return (
    <div name="Home" className=" max-w-screen h-fit container m-auto mt-[70px]">
      <div className=" flex flex-col md:flex-row items-center">
        <div className=" m-4 md:ml-20 order-2 md:order-1 ">
          <div className=" mb-4">
            <h3 className=" text-2xl md:text-4xl font-bold">
              Web Code <span className="text-[#4077b1]">Oswald</span>
            </h3>
          </div>
          <div className="">
            <h1 className=" text-3xl md:text-6xl font-extrabold">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Bhaskar
              </span>
            </h1>
            <p className=" mt-4 md:w-[650px] text-black font-bold text-sm text-justify md:text-lg">
              Highly motivated and detail-oriented IT professional seeking a
              challenging position in IT Asset Management. Offering a strong
              background in managing and optimizing IT assets, combined with
              excellent analytical skills and a passion for improving
              operational efficiency. Committed to ensuring accurate inventory
              control, cost optimization, and compliance with industry
              standards.
            </p>
          </div>
          <div className=" mt-6 md:mt-6 flex items-center justify-evenly md:justify-normal gap-20 ">
            <button
              onClick={() => setShowModal(true)}
              className=" hover:scale-110 duration-200 rounded-lg bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white p-2 text-xl lg:px-4 lg:py-2 lg:text-3xl"
            >
              About Me
            </button>
            {showModal && <MyModal CloseModal={CloseModal} />}
            <button
              onClick={() => setShowModal2(true)}
              className=" hover:scale-110 duration-200 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 text-xl lg:px-6 lg:py-2 lg:text-3xl"
            >
              Hire Me
            </button>
            {showModal2 && <Showmodel2 CloseModal2={CloseModal2} />}
          </div>
        </div>
        <div className=" mt-5 md:w-[800px] md:mt-10 order-1 ">
          <img
            className=" m-auto mb-4 w-48 h-44 rounded-3xl object-cover object-center transform 
        transition-transform duration-300 hover:scale-105 md:w-[550px] md:h-[500px] "
            src={mainimg}
            alt="mainimg"
          />
        </div>
      </div>
      <div className=" text-center md:text-end md:pr-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500">
        <a className=" font-semibold" href={resume} download="resume.pdf">
          [ DOWNLOAD CV ]
        </a>
      </div>
      <div className=" flex justify-end text-center m-auto fixed right-5 top-52 ">
        <div className=" flex flex-col gap-8 text-xl lg:gap-10 lg:text-3xl">
          <a
            className=" hover:scale-110 duration-200 text-[#1877F2]"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a
            className=" hover:scale-110 duration-200 text-[#000000]"
            href="https://x.com/Bhaskar06873674"
            target="_blank"
          >
            <FaXTwitter />
          </a>

          <a
            className=" hover:scale-110 duration-200 text-[#24292e]"
            href="https://github.com/BSharma1993"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            className=" hover:scale-110 duration-200  text-[#0077B5]"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className=" hover:scale-110 duration-200 bg-[#e1306c] rounded-lg text-white"
            href="https://www.instagram.com/official_sharmabhaskar/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
