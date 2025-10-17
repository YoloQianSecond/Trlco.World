import React, { useEffect, useRef, useState } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import howtobuySteps1 from "../assets/images/steps.png";
import howtobuySteps2 from "../assets/images/steps2.png";
import howtobuySteps3 from "../assets/images/steps3.png";
import howtobuySteps4 from "../assets/images/steps4.png";
import videoPlaceholder from "../assets/images/video-placeholder.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import LearnBreadcrumb from "../assets/images/learn-trl-breadcrumb.png";
import GetStartedSimpleSteps from "../components/GetStartedSimpleSteps";

const HowToBuy = () => {
  const [currentImage, setCurrentImage] = useState(howtobuySteps1); // Set default image URL

  // Ref to access the OwlCarousel instance
  const owlRef = useRef(null);

  // Define an array of images for each slide
  const slideImages = [
    howtobuySteps1,
    howtobuySteps2,
    howtobuySteps3,
    howtobuySteps4,
  ];

  useEffect(() => {
    // const owl = $(owlRef.current);

    // // Start and reset the progress bar on carousel events
    // owl.on('translate.owl.carousel', () => {
    //   startProgressBar();  // Reset and stop the progress bar
    // });

    // owl.on('translated.owl.carousel', () => {
    //   resetProgressBar();  // Start the progress bar
    // });

    // Initialize the progress bar when the component mounts
    resetProgressBar();

    // return () => {
    //   owl.off('translate.owl.carousel');
    //   owl.off('translated.owl.carousel');
    // };
  }, []);

  const startProgressBar = () => {
    // Reset the progress bar height to 0%
    console.log("starting progress..");
    $(".progress").stop(true, true).css({
      height: "0%",
      transition: "none",
    });
  };

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

  const handleOnTranslated = (event) => {
    const index = event.item.index;
    console.log(index);
    if (index === 0) {
      setCurrentImage(howtobuySteps1);
    } else if (index === 1) {
      setCurrentImage(howtobuySteps2);
    } else if (index === 2) {
      setCurrentImage(howtobuySteps3);
    } else if (index === 3) {
      setCurrentImage(howtobuySteps4);
    }
  };

  // Function to handle button click
  const handleButtonClick = (imageIndex) => {
    console.log(imageIndex);
    const indexImage = Number(imageIndex);
    if (indexImage == 1) {
      setCurrentImage(howtobuySteps1);
    } else if (indexImage == 2) {
      setCurrentImage(howtobuySteps2);
    } else if (indexImage == 3) {
      setCurrentImage(howtobuySteps3);
    } else if (indexImage == 4) {
      setCurrentImage(howtobuySteps4);
    }
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
