import React, { useEffect, useRef, useState } from "react";
import journeyGlobal1 from "../assets/images/journey-global-1.png";
import journeyGlobal2 from "../assets/images/journey-global-2.png";
import journeyGlobal3 from "../assets/images/journey-global-3.png";
import journeyGlobal4 from "../assets/images/journey-global-4.png";
import journeyGlobal5 from "../assets/images/journey-global-5.png";

function YourJourneyGlobal() {
  // State to track visible steps
  const [visibleSteps, setVisibleSteps] = useState([1, 2]);
  // State to track the currently active step for image display
  const [activeStep, setActiveStep] = useState(1);
  const stepperRef = useRef(null);
  const stepRefs = useRef([]);

  // Function to handle clicks on each step
  const handleStepClick = (step) => {
    // Update the active step
    setActiveStep(step);

    // Calculate the new range of visible steps
    let newVisibleSteps;
    if (step === 1) {
      newVisibleSteps = [1, 2];
    } else if (step === 5) {
      newVisibleSteps = [4, 5];
    } else {
      newVisibleSteps = [step - 1, step, step + 1];
    }
    setVisibleSteps(newVisibleSteps);
  };

  // Function to check if a step should be visible
  const isStepVisible = (step) => visibleSteps.includes(step);
  const isStepSelected = (step) => step === activeStep;

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = parseInt(entry.target.getAttribute("data-step"), 10);
          handleStepClick(step);
        }
      });
    }, options);

    // ✅ snapshot the refs array so cleanup uses the same nodes
    const nodes = [...stepRefs.current].filter(Boolean);

    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []); // keep deps empty; we operate on the snapshot

  return (
    <>
      <div className="bg-[#ffffff] md:py-[120px] pt-20 pb-[123px] global-main-section px-5">
        <div className="w-full max-w-[1200px] mx-auto md:pr-[45px]">
          <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[56px] outfit-bold block">
            Your journey to global home ownership
          </span>
          <div>
            <div
              ref={stepperRef}
              className="grid gap-5 md:gap-[50px] md:grid-cols-2 grid-cols-1 items-center"
            >
              <div className="md:pl-[60px] md:ml-[45px] pl-[60px] md:pr-0 pr-5 md:h-[550px] h-[390px] flex flex-col justify-start overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[100px] md:before:h-[80px] before:bg-[linear-gradient(180deg,rgba(255,255,255,53%)0%,#Ffff_100%)] before:z-10 before:pointer-events-none after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[80px] md:after:h-[140px] after:bg-[linear-gradient(356deg,rgba(255,255,255,10%)0%,#Ffff_100%)] after:z-[888] after:pointer-events-none">
                {/* Step 1 */}
                <div
                  onClick={() => handleStepClick(1)}
                  className={`${isStepVisible(1) ? "block " : "hidden"} ${
                    isStepSelected(1)
                      ? "current-active-pr md:mt-[172px] mt-[50px]"
                      : ""
                  }  ${
                    isStepSelected(2) ? "active-be-ct" : ""
                  } md:!pb-20 !pb-[40px] !min-h-[auto] relative invest-before global-before-ct cursor-pointer transition-all duration-700`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        1 - Sign up
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Create your TRL HomeFi account
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Step 2 */}
                <div
                  onClick={() => handleStepClick(2)}
                  className={`${isStepVisible(2) ? "block " : "hidden"}  ${
                    isStepSelected(2) ? "current-active-pr" : ""
                  }  ${isStepSelected(3) ? "active-be-ct" : ""} ${
                    isStepSelected(1) ? "prev-active-step md:opacity-[0.5]" : ""
                  } md:!pb-20 !pb-[40px] !min-h-[auto] relative invest-before global-before-ct cursor-pointer transition-all duration-700`}
                >
                  <div className="dott-step ">
                    <div className="trans-y">
                      <h3 className="text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        2 - Choose home
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Select your dream property
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div
                  onClick={() => handleStepClick(3)}
                  className={`${isStepVisible(3) ? "block " : "hidden"} ${
                    isStepSelected(3) ? "current-active-pr" : ""
                  }  ${isStepSelected(4) ? "active-be-ct" : ""} ${
                    isStepSelected(2) ? "prev-active-step opacity-[0.5]" : ""
                  } md:!pb-20 !pb-[40px] !min-h-[auto] relative invest-before global-before-ct cursor-pointer transition-all duration-700`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        3 - Approval
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Quick verification process
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Step 4 */}
                <div
                  onClick={() => handleStepClick(4)}
                  className={`${isStepVisible(4) ? "block" : "hidden"}  ${
                    isStepSelected(4) ? "current-active-pr" : ""
                  }  ${isStepSelected(5) ? "active-be-ct" : ""} ${
                    isStepSelected(3) ? "prev-active-step opacity-[0.5]" : ""
                  } md:!pb-20 !pb-[40px] !min-h-[auto] relative invest-before global-before-ct cursor-pointer transition-all duration-700`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        4 - Live
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Move in to your dream home
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Step 5 */}
                <div
                  onClick={() => handleStepClick(5)}
                  className={`[&.invest-before]:after:hidden [&.invest-before]:before:hidden ${
                    isStepVisible(5) ? "block " : "hidden"
                  }  ${isStepSelected(5) ? "current-active-pr" : ""} ${
                    isStepSelected(4) ? "prev-active-step opacity-[0.5]" : ""
                  } md:!pb-20 !pb-[40px] !min-h-[auto] relative invest-before global-before-ct cursor-pointer transition-all duration-700`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        5 - Start paying
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Build equity with each payment
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div>
                {/* Image for Step 1 */}
                <div className={`${activeStep === 1 ? "block" : "hidden"}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img alt="" src={journeyGlobal1} className="w-full" />
                  </div>
                </div>
                {/* Image for Step 2 */}
                <div className={`${activeStep === 2 ? "block" : "hidden"}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img alt="" src={journeyGlobal2} className="w-full" />
                  </div>
                </div>
                {/* Image for Step 3 */}
                <div className={`${activeStep === 3 ? "block" : "hidden"}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img alt="" src={journeyGlobal3} className="w-full" />
                  </div>
                </div>
                {/* Image for Step 4 */}
                <div className={`${activeStep === 4 ? "block" : "hidden"}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img alt="" src={journeyGlobal4} className="w-full" />
                  </div>
                </div>
                {/* Image for Step 5 */}
                <div className={`${activeStep === 5 ? "block" : "hidden"}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img alt="" src={journeyGlobal5} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourJourneyGlobal;
