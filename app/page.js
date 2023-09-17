import React from "react";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main className="home-main min-h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          style={{ textShadow: "0 0 1rem 2rem black" }}
          className="text-6xl capitalize font-bold text-white text-center"
        >
          let's travel the world
        </h1>
      </div>
      <Navbar />
      <div className="bg-white p-4 w-[80%] absolute bottom-0 left-1/2 -translate-x-1/2">
        <div>
          <ul className="text-blue-600 flex items-center text-lg">
            <li className=" flex items-center justify-between">
              <i className="fa fa-plane"></i>
              <p className="ml-2">Find Flight</p>
            </li>
            <li className="ml-6 flex items-center justify-between text-black">
              <i className="fa fa-solid fa-car"></i>
              <p className="ml-2">Find Stays</p>
            </li>
          </ul>
        </div>
        <form className="my-4 flex items-center justify-evenly flex-wrap">
          <input
            type="text"
            className="my-2 p-1 text-lg border-[1px] border-black outline-none"
            placeholder="From - To"
          />
          <input
            type="text"
            className="my-2 p-1 text-lg border-[1px] border-black outline-none"
            placeholder="Depart - Return"
          />
          <select className="my-2 p-1 text-lg border-[1px] border-black outline-none">
            <option value="">Class</option>
            <option value="">Economy</option>
            <option value="">Business</option>
          </select>
          <input
            type="text"
            className="my-2 p-1 text-lg border-[1px] border-black outline-none"
            placeholder="Passenger"
          />
        </form>
        <div>
          <i className="fa fa-plus"></i>
          <span className="ml-2">Add Promo Code</span>
        </div>
        <br />
        <div>
          <i className="fa fa-arrow"></i>
          <span className=" bg-blue-600 text-white px-4 py-2">
            Find Flights
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
