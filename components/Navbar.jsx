import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <div>
          <ul className="text-white flex items-center justify-between text-lg">
            <li className=" flex items-center justify-between">
              <i className="fa fa-plane"></i>
              <p className="ml-2">Find Flight</p>
            </li>
            <li className="ml-6 flex items-center justify-between">
              <i className="fa fa-solid fa-car"></i>
              <p className="ml-2">Find Stays</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center justify-around">
            <li className="border-2 border-white px-2 py-1 rounded-md text-white">
              Login
            </li>
            <li className="ml-3 bg-white text-black px-2 py-1 rounded-md">
              Sign Up
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
