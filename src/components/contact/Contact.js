import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);

  const handleName = (e) => setClientName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessages = (e) => setMessages(e.target.value);
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleSend = (e) => {
    e.preventDefault();

    // Error handling
    setErrClientName(!clientName);
    setErrEmail(!email || !EmailValidation(email));
    setErrMessage(!messages);

    if (clientName && email && EmailValidation(email) && messages) {
      const templateParams = {
        clientName,
        email,
        messages,
      };

      // Use EmailJS to send the email
      emailjs
        .send(
          "service_xqxrcnv", // Replace with your Service ID
          "template_8t9nn3i", // Replace with your Template ID
          templateParams,
          "3g5HNCEtUZd2yc6IC"
        )
        .then(() => {
          setSuccessMsg(
            `Hello dear ${clientName}, Your message has been sent successfully. Thank you for your time!`
          );
          setClientName("");
          setEmail("");
          setMessages("");
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
        });
    }
  };
  

  return (

    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-firstClr text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Mumbai, India
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-firstClr text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            <a href="tel:+91-9834694381"  rel="noreferrer" className="cursor-pointer hover:firstClr">
              +91-9834694381
            </a>
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-firstClr text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            <a href="mailto:rilesh.1998@gmail.com"  rel="noreferrer" className="cursor-pointer hover:firstClr">
              rilesh.1998@gmail.com
            </a>
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-firstClr text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 secClr">
            {successMsg}
          </p>
        ) : (
          <form
            onSubmit={handleSend}
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                id="name"
                name="name"
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600"
                } w-full bg-transparent border-2 px-4 py-2 secClr text-gray-200 outline-none duration-300 rounded-md`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                id="email"
                name="email"
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600"
                } w-full bg-transparent border-2 px-4 py-2 secClr text-gray-200 outline-none duration-300 rounded-md`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              id="message"
              name="message"
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 "
              } w-full bg-transparent border-2 px-4 py-2 secClr text-gray-200 outline-none duration-300 resize-none rounded-md`}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-44 flex items-center gap-1 secClr hover:firstClr duration-200 "
            >
              Send Message{" "}
              <span className="mt-1 firstClr">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
