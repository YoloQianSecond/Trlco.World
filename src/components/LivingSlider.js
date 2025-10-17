import React, { useState, useEffect, useRef } from "react";
import pillar1 from "../assets/images/pillar-1.png";
import pillar2 from "../assets/images/pillar-2.png";
import pillar3 from "../assets/images/pillar-3.png";
import pillar4 from "../assets/images/pillar-4.png";
import iconPrev from "../assets/images/icon-previous.png";
import iconNext from "../assets/images/icon-next.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LivingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const isMediumScreen = window.innerWidth >= 600 && window.innerWidth <= 1000;

  const handlePrev = () => {
    carouselRef.current?.prev();
  };
  const handleNext = () => {
    carouselRef.current?.next();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            if (carouselRef.current) {
              // carouselRef.current.to(3, 300);
              carouselRef.current.next(300);
            }
          }, 300);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <div className="md:py-[120px] py-[80px]">
        <div className="">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center">
              <span className="text-[#17271F] text-[28px] md:leading-[55px] leading-[36px] mb-6 md:text-[48px] outfit-bold block">
                Experience the four pillars of TRL Living
              </span>
              <span className="text-[#565656] text-base outfit-regular md:mb-0">
                Our philosophy is built on four key pillars that ensure a
                superior living experience for our community.
              </span>
            </div>
          </div>
          <div
            className="md:mt-[100px] mt-[42px] [&_.owl-dots]:!mt-[25px] block max-w-[1370px] mx-auto relative 2xl:px-5 sm:px-[70px] px-5"
            ref={containerRef}
          >
            <div className="custom-filter-img">
              <img
                src={iconPrev}
                onClick={handlePrev}
                className={`absolute 2xl:left-[-38px] left-[13px] cursor-pointer top-[50%] translate-y-[-50%] z-20  hover:translate-x-[-6%] w-12 ${
                  currentSlide === 1 ? "hidden" : "sm:block hidden"
                }`}
                alt=""
              />
            </div>
            <div className="custom-filter-img">
              <img
                src={iconNext}
                onClick={handleNext}
                className={`absolute right-[13px] 2xl:right-[0px] cursor-pointer top-[50%] md:translate-y-[-50%] z-20 hover:translate-x-[6%] w-12 ${
                  currentSlide === (isMediumScreen ? 3 : 2) ? "hidden" : "sm:block hidden"
                }`}
                alt=""
              />
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={false}
              margin={30}
              nav={false}
              dots={false}
              autoplayHoverPause
              smartSpeed={2000}
              responsive={{
                0: {
                  items: 1,
                  dots: true,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
              ref={carouselRef}
              // items={2.7}
              startPosition={currentSlide - 1}
              onChanged={(event) => setCurrentSlide(event.item.index + 1)}
            >
              <div className="item">
                <div className="md:max-w-[100%] max-w-full mx-auto relative lg:h-[420px] md:h-[380px] h-auto h-316px md:pl-0 px-5 md:pr-[34px]">
                  <img
                    alt=""
                    className="absolute z-[-1] md:left-[15px] left-[15px] md:w-auto !w-[84%]"
                    src={pillar1}
                  />
                  <h5 className="xl:text-[40px] md:text-[40px] md:leading-[48px] text-[34px] leading-[42px] outfit-bold lg:pt-10 pt-6 lg:mb-9 md:mb-7 mb-8 block">
                    Live <span className="block">seamless</span>
                  </h5>
                  <p className="text-[#17271F] xl:text-lg text-base leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5 md:pl-0 pl-5">
                    Our streamlined procedures make these processes transparent,
                    flexible, secure, and affordable. We believe that simplicity
                    is the key to enjoying life's greatest pleasures.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="md:max-w-[100%] max-w-full mx-auto relative lg:h-[420px] md:h-[380px] h-auto md:pl-0 px-5 md:pr-[34px]">
                  <img
                    alt=""
                    className="absolute z-[-1] md:left-[15px] left-[15px] md:w-auto !w-[84%]"
                    src={pillar2}
                  />
                  <h5 className="xl:text-[40px]  md:text-[40px] md:leading-[48px] text-[34px] leading-[42px] outfit-bold lg:pt-10 pt-6 lg:mb-9 md:mb-7 mb-8 block">
                    Live <span className="block">accessible</span>
                  </h5>
                  <p className="text-[#17271F] xl:text-lg text-base leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5 md:pl-0 pl-5">
                    Our goal is to provide choices that empower you to shape
                    your living situation according to your desires, whether you
                    prefer traditional home ownership or flexible rental
                    arrangements.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="md:max-w-[100%] max-w-full mx-auto relative lg:h-[420px] md:h-[380px] h-auto md:pl-0 px-5 md:pr-[34px]">
                  <img
                    alt=""
                    className="absolute z-[-1] md:left-[15px] left-[15px] md:w-auto !w-[84%]"
                    src={pillar3}
                  />
                  <h5 className="xl:text-[40px]  md:text-[40px] md:leading-[48px] text-[34px] leading-[42px] outfit-bold lg:pt-10 pt-6 lg:mb-9 md:mb-7 mb-8 block">
                    Live <span className="block">borderless</span>
                  </h5>
                  <p className="text-[#17271F] xl:text-lg text-base leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5 md:pl-0 pl-5">
                    Our services and solutions support a modern lifestyle,
                    allowing you to seamlessly transition between different
                    aspects of your life, no matter where you are.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="md:max-w-[100%] max-w-full mx-auto relative lg:h-[420px] md:h-[380px] h-auto md:pl-0 px-5 md:pr-[34px]">
                  <img
                    alt=""
                    className="absolute z-[-1] md:left-[15px] left-[15px] md:w-auto !w-[84%]"
                    src={pillar4}
                  />
                  <h5 className="xl:text-[40px]  md:text-[40px] md:leading-[48px] text-[34px] leading-[42px] outfit-bold lg:pt-10 pt-6 lg:mb-9 md:mb-7 mb-8 block">
                    Live <span className="block">for real</span>
                  </h5>
                  <p className="text-[#17271F] xl:text-lg text-base leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5 md:pl-0 pl-5">
                    Our global passport and interconnected ecosystem are
                    designed to break down barriers and provide equal access to
                    opportunities.{" "}
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingSlider;
