import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb] ">
      <div className="flex justify-center flex-col w-[80%] h-full mx-auto mt-20 sm:mt-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/** text content */}
        <div>
            {/** Top Content */}
          <div className="w-fit py-1.5 px-2 md:py-1 rounded-full shadow-md flex items-center space-x-3 bg-white">
            <div className="px-3 py-1 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
              News
            </div>
            <p className="text-xs sm:text-sm">
                We Have Updated Our Term & Condition Policy
            </p>
          </div>
          {/** Heading */}
          <h1 data-aos="fade-up" className="text-2xl text- sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"> The premier workspace companion for your
            <br /> daily needs</h1>
          {/**Description */}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla numquam in fugit nobis quaerat? Ut enim iusto accusantium sapiente sed veniam tempore inventore ab.</p>
          {/**playstore image and store image */}
        <Image src="/images/App.jpg" width={300} height={300} alt="app"  className="mt-7"/> 

          </div>

          {/** Image content */}
          <div data-aos="fade-up" data-aos-delay="300"
          className="hidden lg:block">
            <Image src="/images/hero.png" alt="Hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
