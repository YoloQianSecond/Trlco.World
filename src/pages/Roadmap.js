import React, { useRef } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import iconPrev from "../assets/images/icon-previous.png";
import iconNext from "../assets/images/icon-next.png";

const RoadMap = () => {
  const carouselRef = useRef(null);

  const goToNextSlide = () => {
    carouselRef.current.next(); // Go to next slide
  };

  const goToPrevSlide = () => {
    carouselRef.current.prev(); // Go to previous slide
  };
  return (
    <div>
      <Topbar />
      <Header />
      <div className="md:py-16 py-10 lg:px-0 px-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2 className="main-title-heading mb-4">
                <span className="orange-text2 orange-text3 after:!hidden">Roadmap</span>
              </h2>
              <span className="text-[#565656] text-xl outfit-regular md:max-w-[595px] mx-auto block">
                Our journey aims to revolutionize real estate investment using
                Web3 technology. We’re committed to creating a transparent,
                efficient, and accessible platform for all investors.
              </span>
            </div>
          </div>
        </div>

        <div className="md:max-w-[90%] ml-auto mt-10 ">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <div className="custom-nav mt-5"></div>
            </div>
            <div className="md:col-span-12 col-span-12 relative">
              <span
                className="absolute right-0 top-0 bottom-0 h-full 3xl:w-[380px] 2xl:w-[280px] xl:w-[180px] w-[100px] z-30 pointer-events-none
              bg-[linear-gradient(91deg,rgba(255,255,255,0.00)_-25%,#FFF_71.67%)] lg:block hidden"
              ></span>
              <div className="absolute md:left-0 left-[50%] md:translate-x-0 translate-x-[-50%] top-[-5px] 2xl:top-[300px] xl:top-[250px] lg:top-[200px] md:top-[180px] z-30 flex items-center md:gap-6 gap-[180px] ">
                <button
                  onClick={goToPrevSlide}
                  className="md:bg-white custom-prev w-12 cursor-pointer md:hover:translate-x-[-5px] custom-filter-img transition-all duration-500 md:[&:hover_img]:opacity-100 [&:hover_img]:opacity-50"
                >
                  <img
                    src={iconPrev}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="md:bg-white custom-next w-12 cursor-pointer md:hover:translate-x-[5px] custom-filter-img transition-all duration-500 md:[&:hover_img]:opacity-100 [&:hover_img]:opacity-50"
                >
                  <img
                    src={iconNext}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
              <div className="roadmap-q-section">
                <OwlCarousel
                  ref={carouselRef}
                  className="owl-theme roadmap-q-slider "
                  loop
                  margin={30}
                  nav={false}
                  dots={false}
                  responsive={{
                    0: {
                      items: 1,
                      dots: "true",
                      autoHeight: true,
                    },
                    600: {
                      items: 1,
                      dots: "true",
                      autoHeight: true,
                    },
                    767: {
                      items: 1.2,
                    },
                    1000: {
                      items: 1.2,
                    },
                  }}
                >
                  <div className="item md:m-0">
                    <div className="grid grid-cols-12">
                      <div className="md:col-span-4 col-span-12 md:hidden active-title-show ">
                        <span className="block 2xl:text-[96px] xl:text-[70px] md:text-[60px] text-[32px] leading-[40px]  text-[#FF4A3F] outfit-bold 2xl:leading-[108px] xl:leading-[90px] md:leading-[60px] md:mt-10 md:px-0 px-4 md:0 mb-10 md:text-left text-center">
                          Q3 <span className="md:block inline">2025</span>
                        </span>
                      </div>
                      <div className="md:col-span-8 col-span-12">
                        <div className="2xl:pr-36 xl:pr-20 md:px-0 px-2">
                          <div className="mx-auto relative cs-boxshadow xl:m-10 m-4 rounded-[25px] md:p-8 p-6">
                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] ">
                              Project
                            </span>
                            <ul className="!list-disc flex flex-col  mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Launch $TRLCO Presale Page with $SBROS (Asset Backed Tokenization of 2 Gastro Bars: Bosko & Granite) – Target Hard Cap Raise: $2.7M
                              </li>
                              <li className="text-[#8A8A8A]">
                                Target to Onboard 2 or 3 Small Businesses for Tokenization – Target AUM: $2M and above
                              </li>
                              <li className="text-[#8A8A8A]">
                                Target to Onboard 2 more Property Developments for Tokenization – Target AUM: $2M and above
                              </li>
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Product
                            </span>
                            <ul className="!list-disc flex flex-col  mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                MVP Launch of TRL Platform for Asset Tokenization
                              </li>
                              <li className="text-[#8A8A8A]">
                                $TRLCO Token Generation Event (TGE) planning underway.
                              </li>
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Funding & Marketing
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Begin $TRLCO community-building campaigns
                              </li>
                              <li className="text-[#8A8A8A]">
                                Strategic marketing push in APAC and MENA regions
                              </li>
                              <li className="text-[#8A8A8A]">
                                Expand ecosystem partnerships for asset onboarding
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item md:m-0 ">
                    <div className="grid grid-cols-12">
                      <div className="md:col-span-4 col-span-12 md:hidden active-title-show">
                        <span className="block 2xl:text-[96px] xl:text-[70px] md:text-[60px] text-[32px] leading-[40px]  text-[#FF4A3F] outfit-bold 2xl:leading-[108px] xl:leading-[90px] md:leading-[60px] md:mt-10 md:px-0 px-4 md:0 mb-10 md:text-left text-center">
                          Q4 <span className="md:block inline">2025</span>
                        </span>
                      </div>
                      <div className="md:col-span-8 col-span-12">
                        <div className="2xl:pr-36 xl:pr-20 md:px-0 px-2">
                          <div className="mx-auto relative cs-boxshadow xl:m-10 m-4 rounded-[25px] md:p-8 p-6">
                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656]">
                              Project
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Tokenize 3 Additional Businesses and 3 Properties – Target AUM: $5M
                              </li>
                              <li className="text-[#8A8A8A]">
                                Expand TRL real estate and business pool across SEA
                              </li>
                              {/* <li className="text-[#8A8A8A]">
                                ⁠Onboard $3M worth for TRLX 1 Dubai
                              </li> */}
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Product
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Full-scale rollout of TRL Platform MVP
                              </li>
                              <li className="text-[#8A8A8A]">
                                Platform improvements based on user testing                              
                              </li>
                              {/* <li className="text-[#8A8A8A]">
                                ⁠⁠$TRLX 0 (Johor Property) tokens ready on
                                Testnet
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠Partnership with IXSwap
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠⁠$TRLX Investor DApp Portal under development 
                              </li> */}
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Funding & Marketing
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-5">
                              <li className="text-[#8A8A8A]">
                                $TRLCO Token Generation Event (TGE) execution
                              </li>
                              <li className="text-[#8A8A8A]">
                                Start preparation for consumer product launch campaigns
                              </li>
                              {/* <li className="text-[#8A8A8A]">
                                ⁠Secured strategic advisors and partners during
                                major web3 events 
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠Started connections with T1 Launchpads and
                                Exchanges
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item md:m-0">
                    <div className="grid grid-cols-12">
                      <div className="md:col-span-4 col-span-12 md:hidden active-title-show">
                        <span className="block 2xl:text-[96px] xl:text-[70px] md:text-[60px] text-[32px] leading-[40px]  text-[#FF4A3F] outfit-bold 2xl:leading-[108px] xl:leading-[90px] md:leading-[60px] md:mt-10 md:px-0 px-4 md:0 mb-10 md:text-left text-center">
                          {/* Q3  */}
                          <span className="md:block inline">2026</span>
                        </span>
                      </div>
                      <div className="md:col-span-8 col-span-12">
                        <div className="2xl:pr-36 xl:pr-20 md:px-0 px-2">
                          <div className="mx-auto relative cs-boxshadow xl:m-10 m-4 rounded-[25px] md:p-8 p-6">
                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656]">
                              Project
                            </span>
                            <ul className="!list-disc flex flex-col  mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Launch TRL HomeSub and Consumer Services
                              </li>
                              <li className="text-[#8A8A8A]">
                                Expand tokenized assets into 2 new countries
                              </li>
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Product
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Release TRL AI Agent & Investment Recommendation Engine
                              </li>
                              <li className="text-[#8A8A8A]">
                                Launch full TRL app suite (HomeSub, HomeFi, Utility Dashboard)
                              </li>
                              {/* <li className="text-[#8A8A8A]">
                                Initiate partnerships for Web2–Web3 onboarding
                              </li>
                              <li className="text-[#8A8A8A]">
                                Global marketing campaign for lifestyle and housing services
                              </li> */}
                              {/* <li className="text-[#8A8A8A]">
                                HOMESUB platform under development
                              </li> */}
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Funding & Marketing
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Initiate partnerships for Web2–Web3 onboarding
                              </li>
                              <li className="text-[#8A8A8A]">
                                Global marketing campaign for lifestyle and housing services
                              </li>
                              {/* <li className="text-[#8A8A8A]">
                                ⁠1st Live RWA side Event in Malaysia Blockchain
                                Week and others
                              </li>
                              <li className="text-[#8A8A8A]">
                                Secured Private and Public Round Commitments
                                with Launchpads 
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠Secured top T1 Exchange IEO offers
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="item md:m-0 ">
                    <div className="grid grid-cols-12">
                      <div className="md:col-span-4 col-span-12 md:hidden active-title-show">
                        <span className="block 2xl:text-[96px] xl:text-[70px] md:text-[60px] text-[32px] leading-[40px]  text-[#FF4A3F] outfit-bold 2xl:leading-[108px] xl:leading-[90px] md:leading-[60px] md:mt-10 md:px-0 px-4 md:0 mb-10 md:text-left text-center">
                          Q4 <span className="md:block inline">2024</span>
                        </span>
                      </div>
                      <div className="md:col-span-8 col-span-12">
                        <div className="2xl:pr-36 xl:pr-20 md:px-0 px-2">
                          <div className="mx-auto relative cs-boxshadow xl:m-10 m-4 rounded-[25px] md:p-8 p-6">
                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656]">
                              Project
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Finalized strategic partnerships and properties
                                in key markets: Malaysia, Dubai, Bali and
                                Thailand
                              </li>
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Product
                            </span>
                            <ul className="!list-disc flex flex-col  mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                TaaS Platform under development
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠HOMESUB Consumer Platform launch 
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠Investor DApp platform bridge and swap features
                                ready 
                              </li>
                            </ul>

                            <span className="md:text-2xl text-[22px] leading-7 outfit-bold text-[#565656] md:mt-12 mt-8 block">
                              Funding & Marketing
                            </span>
                            <ul className="!list-disc flex flex-col mt-4 pl-6">
                              <li className="text-[#8A8A8A]">
                                Closed Private and Public Rounds in Launchpads 
                              </li>
                              <li className="text-[#8A8A8A]">
                                IEO round complete
                              </li>
                              <li className="text-[#8A8A8A]">
                                ⁠Token Listing in top tier Exchanges and TGE
                                (Oct 24’)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoadMap;
