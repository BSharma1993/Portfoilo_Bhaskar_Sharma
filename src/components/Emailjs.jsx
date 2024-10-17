import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const [formText, setFormText] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormText({ ...formText, [name]: value });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w5tg4fy", "template_k48a70o", form.current, {
        publicKey: "YWEADUeb64d62ELHd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent");
          setFormText({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className=" bg-white md:w-[50%] ">
        <form
          className=" p-5 md:p-0 md:m-5 text-xl font-bold"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="input input-bordered flex flex-col mb-5">
            Name
            <input
              required
              onChange={handleInput}
              value={formText.name}
              type="text"
              name="name"
              className=" border border-gray-950 grow p-2  rounded-lg"
              placeholder="Your Name"
            />
          </label>
          <label className="input input-bordered flex flex-col mb-5">
            Email
            <input
              required
              onChange={handleInput}
              value={formText.email}
              type="text"
              name="email"
              className=" border border-gray-950 grow p-2 rounded-lg"
              placeholder="Email Address"
            />
          </label>
          <label className="input input-bordered flex flex-col mb-5">
            Subject
            <input
              required
              onChange={handleInput}
              value={formText.subject}
              type="text"
              name="subject"
              className=" border border-gray-950 grow p-2 rounded-lg"
              placeholder="Your Subject"
            />
          </label>
          <h2>Message</h2>
          <textarea
            required
            onChange={handleInput}
            value={formText.message}
            className="textarea textarea-bordered border-gray-950 w-full border grow p-2 rounded-lg"
            placeholder="Message"
            name="message"
          ></textarea>
          <input
            className=" cursor-pointer mt-6 ml-6 md:ml-20 hover:scale-110 duration-200 rounded-full bg-gradient-to-r from-red-500 to-green-400 text-white px-16 
                py-3"
            type="submit"
            value="SEND MESSAGE"
          />
        </form>
      </div>
    </>
  );
};
