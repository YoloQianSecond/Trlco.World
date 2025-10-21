import React, { useEffect } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import videoPlaceholder from "../assets/images/video-placeholder.png";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import $ from "jquery";
import HeroSection from "../components/HeroSection";
import LearnBreadcrumb from "../assets/images/learn-trl-breadcrumb.png";
import GetStartedSimpleSteps from "../components/GetStartedSimpleSteps";

const HowToBuy = () => {

  // Ref to access the OwlCarousel instance

  useEffect(() => {

    resetProgressBar();

  }, []);

  const resetProgressBar = () => {
    console.log("resetting progress..");
    // Set the progress bar to fill up over the specified time
    setTimeout(() => {
      $(".progress").css({
        height: "100%",
        transition: "height 20s linear", // Adjust this duration to match your autoplay time
      });
    }, 50); // Short delay to ensure reset takes effect before animating
  };

  return (
    <div>
      <Topbar />
      <Header />
      <div className="w-full">
        <HeroSection
          breadCrumUrl={LearnBreadcrumb}
          title={"Learn with TRL"}
          description={` Empowering everyone to own and build wealth through Real Estate.`}
        />
      </div>

      <div className="w-full mt-[60px]">
        <GetStartedSimpleSteps />
      </div>

      {/* video */}
      <div className="col-span-12 hidden">
        <div className="col-span-12 text-center">
          <span className="text-[#17271F] md:text-[24px] text-[20px] md:mt-0 mt-8 block md:mb-0 mb-4 outfit-semibold">
            Need more guidance?
            <span className="block">Watch the full tutorial video here</span>
          </span>
        </div>
        <div className="col-span-12 text-center">
          <img src={videoPlaceholder} className="mx-auto max-w-[100%]" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToBuy;
