import React from "react";

function HeroSection({ breadCrumUrl, title, description }) {
  return (
    <div className="max-w-7xl mx-auto md:px-4">
      <div className="bg-no-repeat bg-cover md:rounded-[40px] md:pr-[87px] px-4 md:pl-[50px] md:pt-10 sm:pt-[100px] pt-[72px] md:m-0 rounded-[12px] relative lg:bg-[0] md:bg-[url('assets/images/comman-hero-bg.png')] bg-[url('assets/images/mobile-comman-hero-bg.png')] md:min-h-[400px] flex items-end justify-between">
        <div className="flex justify-between relative md:items-end md:flex-row flex-col gap-[33px] w-full">
          <div className="md:mb-10">
            <div className="md:min-h-[280px] flex flex-col items-start justify-center">
              <span className="text-[#fff] md:text-[55px] text-[34px] leading-[42px] md:leading-[60px] outfit-bold block">
                {title}
              </span>
              <p className="text-[#fff] md:text-[19px] md:leading-7 text-xl md:mt-4 mt-5 max-w-[580px] font-normal">
                {description}
              </p>
            </div>
          </div>
          <div className="">
            <img
              alt=""
              className="w-full max-w-[450px] h-auto "
              src={breadCrumUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
