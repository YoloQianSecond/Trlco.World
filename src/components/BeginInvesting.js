import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
function BeginInvesting() {
  return (
    <>
      <div className="md:pb-[188px] pb-10 w-full p-4 relative before:content-[''] before:w-full before:left-0 before:right-0 2xl:before:h-[460px] md:before:h-[340px] before:h-[210px] before:bg-[url('./assets/images/property-bg.png')] md:before:bottom-0 before:absolute before:bg-no-repeat before:bg-cover before:bg-center before:bottom-10">
        <div className="max-w-[1205px] mx-auto 2xl:px-0 px-5">
          <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[50px] outfit-bold block ">
            Begin investing in a global property portfolio
          </span>
          <div className="md:grid grid-cols-3 gap-8 hidden ">
            <Link
              to={``}
              className="block shadow-[0px_4px_10px_0px_rgba(23,39,31,0.16)] hover:shadow-[0px_4px_10px_0px_rgba(23,39,31,0.30)] bg-[#FFEEED] rounded-3xl property-boxs-ct relative min-h-[435px] overflow-hidden transition-all duration-500"
            >
              <div className="z-20 relative px-8 py-10">
                <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#FF4A3F] text-base font-medium text-[#FF4A3F] w-fit ">
                  $TRLX
                </span>
                <h4 className="text-[32px] leading-[40px] font-bold text-[#17271F] mt-3 mb-7 max-w-[250px] ">
                  Johor Bahru, Malaysia
                </h4>
                {/* <button class="ct-button !py-2 !px-4 !text-sm ">
                  Available
                </button> */}
              </div>
            </Link>
            <Link
              to={``}
              className="block shadow-[0px_4px_10px_0px_rgba(23,39,31,0.16)] hover:shadow-[0px_4px_10px_0px_rgba(23,39,31,0.30)] bg-[#FFEEED] rounded-3xl property-boxs-ct property-boxs-ct-2 relative min-h-[435px] overflow-hidden transition-all duration-500"
            >
              <div className="z-20 relative px-8 py-10">
                <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#FF4A3F] text-base font-medium text-[#FF4A3F] w-fit ">
                  $TRLX
                </span>
                <h4 className="text-[32px] leading-[40px] font-bold text-[#17271F] mt-3 mb-7 max-w-[250px] ">
                  Bali, Indonesia
                </h4>
                {/* <button class="ct-button !py-2 !px-4 !text-sm ">
                  Available
                </button> */}
              </div>
            </Link>
            <Link
              to={`/`}
              className="bg-[#F6F6F2] rounded-3xl property-boxs-ct property-boxs-ct-3 relative min-h-[435px] overflow-hidden pointer-events-none select-none block"
            >
              <div className="z-20 relative px-8 py-10">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#8A8A8A] text-base font-medium text-[#8A8A8A] w-fit ">
                    $TRLX
                  </span>
                  <span className="block py-[2px] px-3 rounded-lg text-base border border-solid border-[#D7F2EE] font-medium text-[#106E5F] w-fit bg-[#D7F2EE]">
                    Coming Soon
                  </span>
                </div>
                <h4 className="text-[32px] leading-[40px] font-bold text-[#565656] mt-3 mb-7 max-w-[250px] ">
                  Kuala Lumpur, Malaysia
                </h4>
              </div>
            </Link>
            <Link
              to={`/`}
              className="bg-[#F6F6F2] rounded-3xl property-boxs-ct property-boxs-ct-3 relative min-h-[435px] overflow-hidden pointer-events-none select-none"
            >
              <div className="z-20 relative px-8 py-10">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#8A8A8A] text-base font-medium text-[#8A8A8A] w-fit ">
                    $TRLX
                  </span>
                  <span className="block py-[2px] px-3 rounded-lg text-base border border-solid border-[#D7F2EE] font-medium text-[#106E5F] w-fit bg-[#D7F2EE]">
                    Coming Soon
                  </span>
                </div>
                <h4 className="text-[32px] leading-[40px] font-bold text-[#565656] mt-3 mb-7 max-w-[250px] ">
                  Dubai, United Arab Emirates
                </h4>
              </div>
            </Link>
          </div>
          <div className="md:hidden block [&_.owl-dots]:!mt-8">
            <OwlCarousel
              className="owl-theme owl-estate-experience"
              loop
              center
              margin={10}
              nav={false}
              dots={true}
              responsive={{
                0: {
                  items: 1,
                },
                1000: {
                  items: 1,
                },
              }}
            >
              <div className="item">
                <Link
                  to={``}
                  className="block shadow-[0px_4px_10px_0px_rgba(23,39,31,0.16)] hover:shadow-[0px_4px_10px_0px_rgba(23,39,31,0.30)] bg-[#FFEEED] rounded-3xl property-boxs-ct relative min-h-[380px] overflow-hidden transition-all duration-500"
                >
                  <div className="z-20 relative px-8 py-10">
                    <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#FF4A3F] text-base font-medium text-[#FF4A3F] w-fit ">
                      $TRLX
                    </span>
                    <h4 className="md:text-[32px] text-2xl leading-[32px] md:leading-[40px] font-bold text-[#17271F] mt-3 mb-7 max-w-[250px] ">
                      Johor Bahru, Malaysia
                    </h4>
                    {/* <button class="ct-button !py-2 !px-4 !text-sm ">
                      Invest Now
                    </button> */}
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link
                  to={``}
                  className="block shadow-[0px_4px_10px_0px_rgba(23,39,31,0.16)] hover:shadow-[0px_4px_10px_0px_rgba(23,39,31,0.30)] bg-[#FFEEED] rounded-3xl property-boxs-ct property-boxs-ct-2 relative min-h-[380px] overflow-hidden transition-all duration-500"
                >
                  <div className="z-20 relative px-8 py-10">
                    <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#FF4A3F] text-base font-medium text-[#FF4A3F] w-fit ">
                      $TRLX
                    </span>
                    <h4 className="md:text-[32px] text-2xl leading-[32px] md:leading-[40px] font-bold text-[#17271F] mt-3 mb-7 max-w-[250px] ">
                      Bali, Indonesia
                    </h4>
                    {/* <button class="ct-button !py-2 !px-4 !text-sm ">
                      Invest Now
                    </button> */}
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link
                  to={`/`}
                  className=" block bg-[#F6F6F2] rounded-3xl property-boxs-ct property-boxs-ct-3 relative min-h-[380px] overflow-hidden pointer-events-none select-none"
                >
                  <div className="z-20 relative px-8 py-10">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#8A8A8A] text-base font-medium text-[#8A8A8A] w-fit ">
                        $TRLX
                      </span>
                      <span className="block py-[2px] px-3 rounded-lg text-base border border-solid border-[#D7F2EE] font-medium text-[#106E5F] w-fit bg-[#D7F2EE]">
                        Coming Soon
                      </span>
                    </div>
                    <h4 className="md:text-[32px] text-2xl md:leading-[40px] leading-[32px] font-bold text-[#565656] mt-3 mb-7 max-w-[250px] ">
                      Kuala Lumpur, Malaysia
                    </h4>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link
                  to={`/`}
                  className="block bg-[#F6F6F2] rounded-3xl property-boxs-ct property-boxs-ct-4 relative min-h-[380px] overflow-hidden pointer-events-none select-none"
                >
                  <div className="z-20 relative px-8 py-10">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="block py-[2px] px-3 rounded-lg border border-solid border-[#8A8A8A] text-base font-medium text-[#8A8A8A] w-fit ">
                        $TRLX
                      </span>
                      <span className="block py-[2px] px-3 rounded-lg text-base border border-solid border-[#D7F2EE] font-medium text-[#106E5F] w-fit bg-[#D7F2EE]">
                        Coming Soon
                      </span>
                    </div>
                    <h4 className="md:text-[32px] text-2xl md:leading-[40px] leading-[32px] font-bold text-[#565656] mt-3 mb-7 max-w-[250px] ">
                        Dubai, United Arab Emirates
                    </h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeginInvesting;
