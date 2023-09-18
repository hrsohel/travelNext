import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="py-4 px-3 md:px-12">
        <h1 className="my-8 text-4xl font-bold  text-center">
          <span className="text-blue-500">G</span>allery
        </h1>
        <div className="py-4 flex items-center justify-evenly flex-wrap">
          <Image
            src="/images/building-102840_1280.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
          <Image
            src="/images\channel-3547224_1920.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
          <Image
            src="/images\parthenon-2118627_1920.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
          <Image
            src="/images\saint-martin-5122126_1920.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
          <Image
            src="/images\sea-4102982_1920.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
          <Image
            src="/images\water-4753365_1920.jpg"
            className="my-3"
            width="400"
            height="300"
            alt="Gallery"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
