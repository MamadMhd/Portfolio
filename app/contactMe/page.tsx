import React from "react";
import Image from "next/image";

function ContactMe() {
  return (
    <div className="w-full max-w-8xl h-full flex justify-between  rounded-3xl">
      <div className="w-full h-full flex justify-between backdrop-filter backdrop-blur-sm bg-black/20 rounded-3xl">
        <div className="basis-1/2 m-6 ml-0 pl-6">
          <form className="flex flex-col gap-5 h-full">
            <div className="flex justify-between gap-2">
              <input
                name="name"
                type="text"
                placeholder="نام"
                className="basis-1/2 text-xl font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="نام خانوادگی"
                className=" basis-1/2 text-xl font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="ایمیل"
              className="text-xl font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
              required
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="text-xl font-vazirmatn rounded-lg p-3 border-2 border-gray-500"
              required
            />
            <label
              htmlFor=""
              className="font-vazirmatn text-xl font-bold text-white"
            >
              متن پیام
            </label>
            <textarea
              className="text-xl font-vazirmatn rounded-lg p-3 w-full h-full border-2 border-gray-500"
              placeholder="پیام شما ..."
              required
            />
            <button
              type="submit"
              className="font-vazirmatn w-full bg-emerald-500 border-2 border-emerald-700/60 py-3 rounded-lg text-white font-bold text-xl mt-auto"
            >
              ارسال پیام
            </button>
          </form>
        </div>
        <div className="basis-1/2 items-center bg-cyan-800 rounded-l-3xl">
          <Image
            src="/formBanner.svg"
            className="m-auto"
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
