import React from "react";
import clients1 from "../assets/images/clients-1.png";
import clients2 from "../assets/images/clients-2.png";
import clients3 from "../assets/images/clients-3.png";
import clients4 from "../assets/images/clients-4.png";
import clients5 from "../assets/images/clients-5.png";
// import clients6 from "../assets/images/clients-6.png";

const LogoSlider = () => {
  return (
    <div className="max-w-[1366px] mx-auto relative before:content before:absolute before:right-0 before:h-full before:top-0 before:bottom-0 before:sm:w-[188px] before:w-[105px] before:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] before:z-[7] before:scale-x-[-1] after:content after:absolute after:left-0 after:h-full after:top-0 after:bottom-0 after:sm:w-[188px] after:w-[105px] after:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] after:z-[7] md:pb-0 pb-20">
      <div className="w-full overflow-hidden">
        <div class="wrapper">
          <div class="marquee world-trl-marquee py-10 logo-slider-lieaner">
            <p className="">
              <div className="flex ">
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients1} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients2} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients3} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients4} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients5} />
                </span>
                {/* <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients6} />
                </span> */}
              </div>
            </p>
            <p className="">
              <div className="flex ">
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients1} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients2} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients3} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients4} />
                </span>
                <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] -translate-y-7">
                  <img alt="" className="w-full h-full" src={clients5} />
                </span>
                {/* <span className="block md:mr-[10px] mr-4 md:w-[200px] sm:sm:w-[200px] w-[150px] translate-y-7">
                  <img alt="" className="w-full h-full " src={clients6} />
                </span> */}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
