import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ContactUs } from "./Emailjs";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

const Showmodel2 = ({ CloseModal2 }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className=" fixed left-0 right-0 bottom-0 top-0 z-10 bg-[#202020]">
        <div className="  bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded-2xl max-w-5xl max-h-fit container mx-auto mt-[80px] md:mt-[85px]">
          <div className=" flex items-center justify-between p-4 md:p-4">
            <h1 className=" font-semibold w-fit cursor-pointer hover:scale-110 duration-200 rounded-full bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white py-2 px-6 text-xl lg:px-10 lg:py-2 lg:text-3xl">
              HIRE ME
            </h1>
            <button
              onClick={CloseModal2}
              className=" font-semibold hover:scale-110 duration-200 rounded-full bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white p-2 text-xl lg:px-2 lg:py-2 lg:text-3xl"
            >
              <IoClose />
            </button>
          </div>
          <div className=" md:w-[1024px] flex flex-col md:flex-row">
            <div className=" text-white hidden md:block p-9 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] md:w-[50%]">
              <span className="  text-base font-semibold mb-4">
                Let's Work Together
              </span>
              <div className=" mt-4 mb-4 w-16 h-1 bg-white"></div>
              <h1 className=" font-extrabold text-5xl">
                Let's Grow Your business.
              </h1>
              <p className="  mt-4 mb-4 text-justify text-base">
                Highly motivated and detail-oriented IT professional seeking a
                challenging position in IT Asset Management. Offering a strong
                background in managing and optimizing IT assets, combined with
                excellent analytical skills and a passion for improving
                operational efficiency. Committed to ensuring accurate inventory
                control, cost optimization, and compliance with industry
                standards.
              </p>
              <h3 className="  text-base mb-2">Let's Work Together</h3>
              <div className=" mt-4 mb-4 w-16 h-1 bg-white"></div>

              <div className=" flex items-center text-center gap-4">
                <CiMail size={22} />
                <span>example@info.com</span>
                <FaPhone size={18} />
                <span>+91 1234567890</span>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Showmodel2;
