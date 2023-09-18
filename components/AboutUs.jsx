import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="py-4 px-3 md:px-12">
        <h1 className="my-8 text-4xl font-bold  text-center">
          <span className="text-blue-500">A</span>bout{" "}
          <span className="text-blue-500">U</span>s
        </h1>
        <div className="flex items-center justify-center md:flex-nowrap flex-wrap">
          <Image
            src="/images/about-extra-1.svg"
            width="700"
            height="500"
            alt="about us"
          />
          <div className="px-8 my-8 md:my-0">
            <h1 className="text-4xl font-bold text-blue-500">Why Choose Us?</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              labore minus voluptatibus dolore quae voluptatum adipisci
              asperiores sapiente eos ab assumenda ea aliquid neque repellendus
              repudiandae eum omnis, mollitia molestias.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
