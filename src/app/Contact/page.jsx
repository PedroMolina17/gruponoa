"use client";
import React, { useState } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const Contact = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isAsuntoFocused, setAsuntoFocused] = useState(false);
  const [isJobFocused, setJobFocused] = useState(false);

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-1 gap-4 relative px-24 py-8 bg-white opacity-90 "
      id="contact"
    >
      <div>
        <h5 className="text-4xl font-bold text-[#33353F] my-2 text-center">
          Contactanos{" "}
        </h5>
      </div>
      {emailSubmitted ? (
        <form className="flex flex-col md:px-80 " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="h-14 border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="h-14 border border-[#363636] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2"
              placeholder="Job offer"
            />
          </div>
          <div className="mb-12">
            <label
              htmlFor="message"
              className="text-black block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-36 border border-[#363636] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2"
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="h-16 px-5 py-3 w-full  rounded-lg mr-4 font-medium bg-[#f9eb37]   hover:to-[#2e2b33] text-[#2e2b33]"
          >
            Enviar
          </button>{" "}
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        </form>
      ) : (
        <form className="flex flex-col md:px-80 " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="h-14 border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2"
              placeholder="example@gmail.com"
              style={{
                borderColor: isEmailFocused
                  ? "rgb(230, 217, 55)"
                  : "rgb(54, 54, 54)",
                outline: "none",
              }}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="h-14 border border-opacity-30 rounded-md  border-[#363636] placeholder-[#9CA2A9] text-black text-sm  block w-full p-2"
              style={{
                borderColor: isAsuntoFocused
                  ? "rgb(54, 54, 54)"
                  : "rgb(54, 54, 54)",
                outline: "none",
                boxShadow: isAsuntoFocused
                  ? "0 0 5px rgba(54, 54, 54, 0.7)"
                  : "none",
              }}
              onFocus={() => setAsuntoFocused(true)}
              onBlur={() => setAsuntoFocused(false)}
              placeholder="Asunto"
            />
          </div>
          <div className="mb-12">
            <label
              htmlFor="message"
              className="text-black block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-36 border border-[#363636] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2"
              placeholder="Let's talk about..."
              style={{
                borderColor: isJobFocused
                  ? "rgb(230, 217, 55)"
                  : "rgb(54, 54, 54)",
                outline: "none",
                boxShadow: isJobFocused
                  ? "0 0 5px rgba(230, 217, 55, 0.7)"
                  : "none",
              }}
              onFocus={() => setJobFocused(true)}
              onBlur={() => setJobFocused(false)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="h-16 px-12 py-3 w-full  rounded-lg mr-4 font-medium bg-[#f9eb37]   hover:bg-[#363636] hover:text-white text-[#2e2b33]"
          >
            Enviar
          </button>
        </form>
      )}{" "}
      <FloatingWhatsApp
        phoneNumber="+51 934629301"
        className="text-black"
        accountName="Grupo Noa"
        avatar="img/LOGO2.png"
        chatMessage="¡Hola! 🤝 ¿Cómo lo podemos ayudar?"
      />
    </section>
  );
};

export default Contact;
