import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="my-8 text-4xl font-bold text-blue-500 text-center">
        Get in Touch
      </h1>
      <div className="flex items-center justify-center md:flex-nowrap flex-wrap py-4 px-2 md:px-12">
        <div className="md:w-[30%]">
          <div>
            <h1 className="text-xl font-bold">
              <i className="fa fa-home text-blue-500 text-2xl mr-2"></i>Address
            </h1>
            <p className="text-[#666]">Chittagong, Bangladesh</p>
          </div>
          <div className="my-12">
            <h1 className="text-xl font-bold">
              <i className="fa fa-envelope text-blue-500 text-2xl mr-2"></i>
              Address
            </h1>
            <p className="text-[#666]">xyz@gmail.com</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              <i className="fa fa-phone text-blue-500 text-2xl mr-2"></i>Address
            </h1>
            <p className="text-[#666]">5443545456</p>
          </div>
        </div>
        <form className="md:px-8 my-8 md:my-0 w-full md:w-[70%]">
          <div className="flex items-center justify-center sm:flex-nowrap flex-wrap">
            <input
              type="text"
              className="w-full text-lg p-1 border-[1px] border-blue-500 outline-none"
              placeholder="Full name"
            />
            <input
              type="email"
              className="w-full text-lg md:ml-3 md:my-0 my-4 ml-0 p-1 border-[1px] border-blue-500 outline-none"
              placeholder="Email"
            />
          </div>
          <textarea
            className="w-full text-lg p-1 md:mt-12 mt-0 border-[1px] border-blue-500 outline-none"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="Message"
            className="px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-300"
          />
        </form>
      </div>
      <hr />
      <h1 className="text-center text-xl font-semibold my-4">
        Created by{" "}
        <Link className="text-blue-500" href="https:hrfolio.vercel.app">
          HR Sohel
        </Link>
      </h1>
    </>
  );
};

export default Contact;
