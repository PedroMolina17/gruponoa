"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const Contact = () => {
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
      className="grid md:grid-cols-1 gap-4 relative px-24 py-8 bg-white opacity-90"
      id="contact"
    >
      <div>
        <h5 className="text-4xl font-bold text-[#33353F] my-2 text-center">
          Contactanos{" "}
        </h5>
      </div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
      ) : (
        <form className="flex flex-col md:px-80 " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Job offer"
            />
          </div>
          <div className="mb-12">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-3 w-full  rounded-lg mr-4 font-medium bg-[#f9eb37]   hover:to-[#2e2b33] text-[#2e2b33]"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
