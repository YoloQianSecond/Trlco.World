import React from "react";
import { Link } from "react-router-dom";
function OnePowerfulPlatform() {
  return (
    <>
      <div className="2xl:pb-[230px] md:pb-[133px] pb-[150px] w-full px-5 relative before:content-[''] before:w-full before:left-0 before:right-0 2xl:before:h-[460px] md:before:h-[340px] before:h-[315px] before:bg-[url('./assets/images/platform-bg.png')] md:before:bottom-0 before:absolute before:bg-no-repeat before:bg-cover before:bg-center before:bottom-10">
        <div className="max-w-[1245px]  mx-auto w-full z-[77] relative">
          <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[56px] outfit-bold block ">
            One powerful platform for global stay
          </span>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 items-start">
            <div className="border-solid border border-[#E0E0E0] bg-white py-8 px-5 rounded-3xl flex md:flex-col items-start [&_svg]:md:w-12 [&_svg]:w-8 gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 20.2531L20.2531 0H46C47.1046 0 48 0.895431 48 2V46C48 47.1046 47.1046 48 46 48H2C0.895431 48 0 47.1046 0 46V20.2531Z"
                  fill="#EE3538"
                />
              </svg>
              <p className="mb-0 md:text-xl text-base font-normal text-[#17271F] w-full flex-1 ">
                Enjoy the benefit of <b>no down payment required,</b> making
                home access more affordable
              </p>
            </div>
            <div className="border-solid border border-[#E0E0E0] bg-white py-8 px-5 rounded-3xl md:mt-[120px] relative flex md:flex-col items-start [&_svg]:md:w-12 [&_svg]:w-8 gap-6">
              <div className="flex md:flex-col md:gap-4 gap-5 w-fit items-center justify-center absolute md:left-[-21px] md:right-[inherit] md:top-[21px] bg-white md:px-[3px] right-[42px] top-[-26px]">
                <span className="block border border-solid border-[#E0E0E0] md:border-t-0 md:border-l border-l-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[0_0px_24px_24px] rounded-[0_24px_24px_0px] bg-white"></span>
                <span className="block border border-solid border-[#E0E0E0] md:border-b-0 md:border-r border-r-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[24px_24px_0_0] rounded-[24px_0_0_24px] bg-white"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4783 0L0 23.4783V46C0 47.1046 0.895432 48 2 48H46C47.1046 48 48 47.1046 48 46V23.7391L24.2609 0H23.4783Z"
                  fill="#F36C24"
                />
              </svg>
              <p className="mb-0 md:text-xl text-base font-normal text-[#17271F]">
                <b>Flexible property options</b> cater to diverse needs and
                preferences.
              </p>
            </div>
            <div className="border-solid border border-[#E0E0E0] bg-white py-8 px-5 rounded-3xl md:mt-[120px] relative flex md:flex-col items-start [&_svg]:md:w-12 [&_svg]:w-8 gap-6">
              <div className="flex md:flex-col md:gap-4 gap-5 w-fit items-center justify-center absolute md:left-[-21px]  md:top-[25%] bg-white md:px-[3px] left-[42px] top-[-26px]">
                <span className="block border border-solid border-[#E0E0E0] md:border-t-0 md:border-l border-l-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[0_0px_24px_24px] rounded-[0_24px_24px_0px] bg-white"></span>
                <span className="block border border-solid border-[#E0E0E0] md:border-b-0 md:border-r border-r-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[24px_24px_0_0] rounded-[24px_0_0_24px] bg-white"></span>
              </div>
              {/* right */}
              <div className="flex md:flex-col md:gap-4 gap-5 w-fit items-center justify-center absolute md:top-[21px] bg-white md:px-[3px] md:right-[-21px] right-[42px] md:bottom-[inherit] bottom-[-26px]">
                <span className="block border border-solid border-[#E0E0E0] md:border-t-0 md:border-l border-l-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[0_0px_24px_24px] rounded-[0_24px_24px_0px] bg-white"></span>
                <span className="block border border-solid border-[#E0E0E0] md:border-b-0 md:border-r border-r-0 md:h-[20px] h-[26px] w-[18px] md:rounded-[24px_24px_0_0] rounded-[24px_0_0_24px] bg-white"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48 27.7469L27.7469 48L2 48C0.895432 48 7.8281e-08 47.1046 1.74846e-07 46L4.02145e-06 2C4.11801e-06 0.895427 0.895436 -4.11801e-06 2 -4.02145e-06L46 -1.74846e-07C47.1046 -7.82811e-08 48 0.895432 48 2L48 27.7469Z"
                  fill="#143854"
                />
              </svg>
              <p className="mb-0 md:text-xl text-base font-normal text-[#17271F]">
                <b> Build equity while renting,</b> combining the advantages of
                renting and ownership.
              </p>
            </div>
            
            <div className="border-solid border border-[#E0E0E0] bg-white py-8 px-5 rounded-3xl flex md:flex-col items-start [&_svg]:md:w-12 [&_svg]:w-8 gap-6">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H16.8312C34.0452 0 48 13.9548 48 31.1688V48H0V0Z"
                  fill="#088AB5"
                />
              </svg>

              <p className="mb-0 md:text-xl text-base font-normal text-[#17271F] w-full flex-1 ">
                Experience a <b>seamless relocation process,</b> simplifying
                moves without the usual hassles.
              </p>
            </div>
          </div>
          <div className="flex items-center w-full mt-10">
            <Link class="ct-button-2 w-fit mx-auto block" to={``}>
              <span className="md:block hidden">Coming Soon</span>
              <span className="md:hidden block">Join the waitlist</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnePowerfulPlatform;
