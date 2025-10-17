import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ownership1 from "../assets/images/ownership-1.png";
import ownership2 from "../assets/images/ownership-2.png";
import ownership3 from "../assets/images/ownership-3.png";
import ownership4 from "../assets/images/ownership-4.png";
import iconPrev from "../assets/images/icon-previous.png";
import iconNext from "../assets/images/icon-next.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ExperienceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const handlePrev = () => {
    if (currentSlide === 1) return;
    setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide === totalSlides) return;
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="max-w-[1002px] mx-auto">
      <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[50px] outfit-bold block ">
        The next-gen real estate experience
      </span>
      <div className="md:[&_.owl-estate-experience_.owl-nav]:!mt-0 [&_.owl-estate-experience_.owl-nav]:mt-8 md:[&_.owl-estate-experience_.owl-nav]:-translate-y-10 md:[&_.owl-estate-experience_.owl-nav]:justify-start [&_.owl-estate-experience_.owl-nav]:justify-center [&_.owl-estate-experience_.owl-nav]:flex [&_.owl-estate-experience_.owl-nav]:items-center [&_.owl-estate-experience_.owl-nav_button]:w-8 [&_.owl-estate-experience_.owl-nav_button]:h-8 [&_.owl-estate-experience_.owl-nav_button]:rounded-full [&_.owl-estate-experience_.owl-nav_button]:flex  [&_.owl-estate-experience_.owl-nav_button]:justify-center [&_.owl-estate-experience_.owl-nav_button]:!bg-[#dadddb] [&_.owl-estate-experience_.owl-nav_button_span]:text-[35px] [&_.owl-estate-experience_.owl-nav_button_span]:leading-[0] [&_.owl-estate-experience_.owl-nav_button_span]:text-white [&_.owl-estate-experience_.owl-nav_button_span]:block [&_.owl-estate-experience_.owl-nav_button_span]:pt-[12px] [&_.owl-estate-experience_.owl-nav_button]:transition-all [&_.owl-estate-experience_.owl-nav_button]:duration-700 [&_.owl-estate-experience_.owl-nav_button.owl-next:hover]:translate-x-[15px] [&_.owl-estate-experience_.owl-nav_button.owl-prev:hover]:translate-x-[-15px]">
        <OwlCarousel
          className="owl-theme owl-estate-experience"
          center
          margin={10}
          // nav={true}
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          smartSpeed={3000}
          animateIn="fadeIn"
          animateOut="fadeOut"
          responsive={{
            0: {
              items: 1,
              autoHeight:true
            },
            767: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
          items={1}
          loop={false}
          nav={false}
          dots={false}
          startPosition={currentSlide - 1}
          onChanged={(event) => setCurrentSlide(event.item.index + 1)}
        >
          <div className="item" data-dot="1">
            <div className="flex justify-between w-full gap-8 flex-col md:flex-row">
              <div className="md:pt-14">
                <h2 className="md:text-[32px] leading-[40px] text-2xl font-bold text-[#17271F] mb-3">
                  Global fractional ownership
                </h2>
                <span className="block text-base text-[#565656] font-Outfit max-w-[477px]">
                  Invest in premium properties worldwide without the burden of
                  high entry costs. Diversify your portfolio across multiple
                  locations and benefit from property value increases in
                  high-growth markets.
                </span>
              </div>
              <div className="max-w-[480px] w-full mx-auto">
                <img alt="" className="w-full" src={ownership1} />
              </div>
            </div>
          </div>
          <div className="item" data-dot="2">
            <div className="flex justify-between w-full gap-8 flex-col md:flex-row">
              <div className="md:pt-14">
                <h2 className="md:text-[32px] leading-[40px] text-2xl font-bold text-[#17271F] mb-3">
                  Seamless liquidity
                </h2>
                <span className="block text-base text-[#565656] font-Outfit max-w-[477px]">
                  Trade your property tokens 24/7 on our secure marketplace with
                  unprecedented flexibility. Enjoy easy entry and exit for your
                  investments, free from traditional real estate lock-in
                  periods.
                </span>
              </div>
              <div className="max-w-[480px] w-full mx-auto">
                <img alt="" className="w-full" src={ownership2} />
              </div>
            </div>
          </div>
          <div className="item" data-dot="3">
            <div className="flex justify-between w-full gap-8 flex-col md:flex-row">
              <div className="md:pt-14">
                <h2 className="md:text-[32px] leading-[40px] text-2xl font-bold text-[#17271F] mb-3">
                  Optimised yield generation
                </h2>
                <span className="block text-base text-[#565656] font-Outfit max-w-[477px]">
                  Earn passive income through rental yields with daily
                  distributions directly to your wallet. Our automated processes
                  ensure timely and consistent returns, maximising your
                  investment's performance.
                </span>
              </div>
              <div className="max-w-[480px] w-full mx-auto">
                <img alt="" className="w-full" src={ownership3} />
              </div>
            </div>
          </div>
          <div className="item" data-dot="4">
            <div className="flex justify-between w-full gap-8 flex-col md:flex-row">
              <div className="md:pt-14">
                <h2 className="md:text-[32px] leading-[40px] text-2xl font-bold text-[#17271F] mb-3">
                  Secure and transparent transactions
                </h2>
                <span className="block text-base text-[#565656] font-Outfit max-w-[477px]">
                  Rest easy with blockchain-backed ownership providing immutable
                  proof of investment and full transparency. Our platform
                  ensures compliance with regulatory standards, combining
                  innovative technology with trusted financial security.
                </span>
              </div>
              <div className="max-w-[480px] w-full mx-auto">
                <img alt="" className="w-full" src={ownership4} />
              </div>
            </div>
          </div>
        </OwlCarousel>
        <div>
          <div className="flex flex-row gap-3 items-center lg:mt-[-20px] md:mt-3 mt-8 relative z-30 md:justify-start justify-center">
            <div
              onClick={handlePrev}
              className={`custom-filter-img ${
                currentSlide === 1
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:translate-x-[-5px] transition-all duration-500"
              }`}
            >
              <img
                className="w-8"
                src={iconPrev}
                alt="Previous"
              />
            </div>
            <div className="text-[#565656] font-medium">
              {currentSlide}/<span className="hidden ">{totalSlides}</span>4
            </div>
            <div
              onClick={handleNext}
              className={`custom-filter-img ${
                currentSlide === totalSlides
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:translate-x-[5px] transition-all duration-500"
              }`}
            >
              <img
                className="w-8"
                src={iconNext}
                alt="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlider;
