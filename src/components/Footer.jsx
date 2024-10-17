import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-[#1f2667e6] text-white py-8 mt-10">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">I'm BSharma</h3>
            <p className="text-gray-300 font-semibold">
              Full-Stack Developer based in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-400">
                INDIA
              </span>
              , specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center ">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-green-400 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-300 font-semibold">
            &copy; {new Date().getFullYear()} Bhaskar. All rights reserved.
          </p>
          <div className="flex my-4 md:my-0 gap-5 text-xl">
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
              className=" hover:scale-110 duration-200 text-[#0077B5]"
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
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
