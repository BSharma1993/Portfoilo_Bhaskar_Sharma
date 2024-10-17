import React, { useState } from "react";
import { IoMdNavigate } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ec4093d3-3515-46ff-b71c-407f7ca91403");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Message Sent");
      setFormText({ name: "", email: "", subject: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      name="Contact"
      className=" px-20 max-w-screen h-fit container m-auto mt-10 md:mt-20"
    >
      <div className=" block md:hidden text-center mb-4">
        <h1 className=" text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
          CONTACT <span className=" text-black">US</span>
        </h1>
      </div>
      <div className=" md:bg-slate-100 rounded-lg flex flex-col md:flex-row items-center justify-between md:px-24 md:py-12">
        <div className=" bg-[#0f3f6f] text-white w-[320px] md:w-[550px] rounded-lg">
          <div className=" p-10 md:p-20">
            <h1 className=" text-4xl md:text-5xl font-semibold">Contact Us</h1>
            <div className=" flex items-center justify-start gap-4 mt-8 md:text-2xl">
              <IoMdNavigate />
              <span>Sector 19, Panchkula Haryana</span>
            </div>
            <div className=" flex items-center justify-start gap-4 mt-8 md:text-2xl">
              <IoIosMail />
              <span>bslucky62@gmail.com</span>
            </div>
            <div className=" flex items-center justify-start gap-4 mt-8 md:text-2xl">
              <FaUserCircle />
              <span>Bhaskar Sharma</span>
            </div>
            <div className=" flex items-center justify-start gap-4 mt-8 md:text-2xl">
              <MdOutlinePhoneIphone />
              <span>+91 1234567890</span>
            </div>
            <div className=" mt-10 flex items-center justify-start gap-8 text-2xl">
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
            </div>
          </div>
        </div>
        <div className=" mt-4 text-start">
          <h2 className=" text-3xl font-semibold text-[#0f3f6f]">
            Get in Touch
          </h2>
          <span>Feel free to drop us a line below!</span>
          <form onSubmit={onSubmit} className=" text-xl font-bold mt-8">
            <label className="input input-bordered flex flex-col mb-4">
              Name
              <input
                required
                type="text"
                name="name"
                className=" border border-gray-950 grow p-2 rounded-lg mt-2"
                placeholder="Your Name"
              />
            </label>
            <label className="input input-bordered flex flex-col mb-4">
              Email
              <input
                required
                type="text"
                name="email"
                className=" border border-gray-950 grow p-2 rounded-lg mt-2"
                placeholder="Email Address"
              />
            </label>
            <h2>Message</h2>
            <textarea
              required
              className="textarea textarea-bordered border-gray-950 w-full border grow p-2 rounded-lg mt-2"
              placeholder="Message"
              name="message"
            ></textarea>
            <input
              className=" cursor-pointer mt-6 hover:scale-110 duration-200 rounded-full bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white px-16 
                py-3"
              type="submit"
              value="SEND MESSAGE"
            />
          </form>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
};

export default Contact;
