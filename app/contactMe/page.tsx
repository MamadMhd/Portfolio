"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

function ContactMe() {
  const [contactData, setContactData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e: any) => {
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    const { msg, success } = await response.json();
    if (success) {
      console.log('ddddddddddddddd');
      
      toast.success(msg[0]);
      setContactData({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } else {
      console.log('ddddddddddddddd');
      msg.map((error: string) => toast.error(error));
    }
  };
  return (
    <div className="w-full lg:max-w-8xl h-full flex justify-between  rounded-3xl px-10 lg:px-20 -z-10">
      <div className="w-full h-full lg:flex justify-between backdrop-filter backdrop-blur-sm bg-black/20 rounded-3xl">
        <div className="lg:basis-1/2 md:m-12 m-6 lg:ml-0 lg:pl-6">
          <form className="flex flex-col text-black gap-5 h-full" onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col justify-between gap-2">
              <input
                name="name"
                id="name"
                type="text"
                placeholder="نام"
                className="basis-1/2 md:text-xl font-medium font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
                value={contactData.name}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                id="lastName"
                type="text"
                placeholder="نام خانوادگی"
                className=" basis-1/2 md:text-xl font-medium font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
                value={contactData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email Address"
              dir="ltr"
              className="md:text-xl font-medium font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
              value={contactData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="شماره تماس"
              className="md:text-xl font-medium font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
              value={contactData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="message"
              className="font-vazirmatn md:text-xl font-bold text-white"
            >
              متن پیام
            </label>
            <textarea
              className="md:text-xl font-medium font-vazirmatn rounded-lg p-3 h-full border-2 border-gray-500"
              placeholder="پیام شما ..."
              name="message"
              id="message"
              rows={5}
              value={contactData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="font-vazirmatn bg-emerald-500 border-2 border-emerald-700/60 py-3 rounded-lg text-white font-bold md:text-xl mt-auto"
            >
              ارسال پیام
            </button>
          </form>
        </div>
        <div className="lg:basis-1/2 lg:block hidden items-center bg-cyan-800 rounded-l-3xl">
          <Image
            src="/formBanner.svg"
            className="m-auto h-full w-full"
            width={600}
            height={600}
            alt="Form Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
