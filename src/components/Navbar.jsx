import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import resume from "../assets/Bhaskar-Resume.pdf";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: "1",
      text: "Home",
    },
    {
      id: "2",
      text: "About",
    },
    {
      id: "3",
      text: "Service",
    },
    {
      id: "4",
      text: "Portfolio",
    },
    {
      id: "5",
      text: "Testimonial",
    },
    // {
    //   id: "6",
    //   text: "Blog",
    // },
    {
      id: "7",
      text: "Contact",
    },
  ];
  return (
    <>
      <div className=" max-w-screen container mx-auto px-2 md:px-5 lg:px-10 h-16 shadow-xl fixed top-0 left-0 right-0 z-50 md:rounded-md bg-white">
        <div className=" flex justify-between items-center h-16">
          <div className="">
            <ReactTyped
              className=" text-[#4077b1] font-bold text-3xl"
              strings={["Web", "Code", "Oswald"]}
              typeSpeed={40}
              backSpeed={60}
              loop={true}
            />
          </div>
          <div>
            <ul className=" hidden md:flex items-center font-semibold justify-between lg:gap-8 lg:text-xl md:text-sm md:gap-4 ">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:underline ease-out cursor-pointer "
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <a
                className=" hover:scale-110 duration-200 rounded-2xl bg-[#4595eb] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white md:text-lg md:py-1 md:px-4 lg:px-6 lg:py-2 lg:text-2xl "
                href={resume}
                target="_blank"
              >
                Resume
              </a>
            </ul>
            <div onClick={() => setMenu(!menu)} className=" md:hidden">
              {menu ? <IoMdClose size={28} /> : <IoMenuSharp size={28} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className=" bg-white">
            <ul className=" md:hidden flex flex-col h-screen items-center justify-center gap-8 text-xl ">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:underline ease-out cursor-pointer "
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
