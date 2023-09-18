import Image from "next/image";
import React from "react";

const FeatureLocaltion = () => {
  return (
    <>
      <section className="py-3 px-6">
        <h1 className="my-8 text-4xl font-bold  text-center">
          <span className="text-blue-500">F</span>eatures{" "}
          <span className="text-blue-500">L</span>ocations
        </h1>
        <div className="flex items-center justify-center md:flex-nowrap flex-wrap">
          <div style={{ boxShadow: "0 0 .2rem black" }} className="rounded-md">
            <div className="w-full h-[20rem]">
              <Image
                src="/images/567218.jpg"
                className="w-full h-full object-cover rounded-t-md"
                width="1000"
                height="1000"
                alt="Hawaii"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-blue-600 font-bold">Hawaii</h2>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                praesentium ut temporibus aspernatur eos, earum amet distinctio
                reiciendis consequuntur id dolor aperiam fugit. Veniam, at.
                Consectetur impedit error quidem qui!
              </p>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
            </div>
          </div>
          <div
            style={{ boxShadow: "0 0 .2rem black" }}
            className="rounded-md mx-0 md:mx-4 my-8 md:my-0"
          >
            <div className="w-full h-[20rem]">
              <Image
                src="/images/saint-martin-5122126_1920.jpg"
                className="w-full h-full object-cover rounded-t-md"
                width="1000"
                height="1000"
                alt="Hawaii"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-blue-600 font-bold">Saint Martin</h2>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                praesentium ut temporibus aspernatur eos, earum amet distinctio
                reiciendis consequuntur id dolor aperiam fugit. Veniam, at.
                Consectetur impedit error quidem qui!
              </p>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star-half mr-2 text-2xl text-yellow-500"></i>
            </div>
          </div>
          <div style={{ boxShadow: "0 0 .2rem black" }} className="rounded-md">
            <div className="w-full h-[20rem]">
              <Image
                src="/images/channel-3547224_1920.jpg"
                className="w-full h-full object-cover rounded-t-md"
                width="1000"
                height="1000"
                alt="Hawaii"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-blue-600 font-bold">Vetican City</h2>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                praesentium ut temporibus aspernatur eos, earum amet distinctio
                reiciendis consequuntur id dolor aperiam fugit. Veniam, at.
                Consectetur impedit error quidem qui!
              </p>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i>
              <i className="fa fa-star-half mr-2 text-2xl text-yellow-500"></i>
              {/* <i className="fa fa-star mr-2 text-2xl text-yellow-500"></i> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureLocaltion;
