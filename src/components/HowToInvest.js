import React, { useEffect, useRef, useState } from "react";
import investBrowse from "../assets/images/invest-browse.png";
import investInvest from "../assets/images/invest-Invest.png";
import investEarn from "../assets/images/invest-earn.png";
import investSell from "../assets/images/invest-sell.png";
function HowToInvest() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const sectionRef = useRef(null);

// ✅ Fix: capture the current ref value and use it in cleanup
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsRunning(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  // ⏱️ Run the counter only while visible
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  // 🛑 Stop at 20
  useEffect(() => {
    if (count > 20 && isRunning) setIsRunning(false);
  }, [count, isRunning]);

  const handleDisplay = (fCount, section) => {
    console.log(
      "count=======>",
      count,
      "section * 5",
      section * 5,
      "fCount",
      fCount
    );
    if (section === 1) {
      return count <= fCount;
    }
    if (section === 2) {
      return count > fCount && count <= section * 5;
    }
    if (section === 3) {
      return count > fCount && count <= section * 5;
    }
    if (section === 4) {
      return count > fCount;
    }
  };
  return (
    <>
      <div className="max-w-[1360px] mx-auto block relative md:mb-[120px] mb-20 lg:px-[30px] px-0 overflow-hidden md:mt-0 mt-[100px] main-invest-section">
        <div className="w-full bg-[#F6F6F2] md:rounded-[40px] rounded-3xl md:py-20 py-16 pl-2">
          <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[50px] outfit-bold block ">
            How to invest
          </span>
          <div ref={sectionRef}>
            <div className="flex md:gap-16 gap-5 lg:flex-row flex-col-reverse">
              <div
                className="md:pl-[50px] md:ml-[54px] pl-[15px] md:pr-0 pr-5 md:w-[490px] md:h-[510px] flex flex-col justify-between overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[140px] before:bg-[linear-gradient(180deg,rgba(246,246,242,0.00)0%,#F6F6F2_100%)] before:z-10 before:pointer-events-none before:hidden md:before:block"
              >
                <div
                  className={`${
                    handleDisplay(5, 1) ? "block active-be-ct" : "hidden"
                  } relative invest-before transition-all duration-700 [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10 `}
                >
                  <div className="dott-step ">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        1 - Browse
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Access high growth real estate portfolios across
                        multiple markets
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Sign up in less than 3 minutes and browse our collection
                        of global real estate portfolios, sourced by experts.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    handleDisplay(5, 2)
                      ? "block active-be-ct"
                      : handleDisplay(5, 1)
                      ? "remove-class none-active-ct md:block hidden"
                      : "hidden"
                  } relative invest-before transition-all duration-700 [&.remove-class_h2]:opacity-20 [&.remove-class_span]:opacity-20 [&.remove-class_h3]:!text-[#F8D4CE] [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        2 - Invest
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Invest in high growth properties, from only $50
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Have access to a globally curated portfolio with high yields that is asset backed and borderless with as little as $50 
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    handleDisplay(10, 3)
                      ? "block active-be-ct"
                      : handleDisplay(5, 2)
                      ? " remove-class none-active-ct md:block hidden"
                      : "hidden"
                  } relative invest-before transition-all duration-700 [&.remove-class_h2]:opacity-20 [&.remove-class_span]:opacity-20 [&.remove-class_h3]:!text-[#F8D4CE] [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        3 - Earn
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Sit back, relax and claim your rental yield
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        You can now select how rental yields can be claimed: either from USDT or have more of our ecosystem token $TRLCO for amplified yields
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    handleDisplay(15, 4)
                      ? "block active-be-ct"
                      : handleDisplay(10, 3)
                      ? "remove-class none-active-ct md:block hidden"
                      : "hidden"
                  } relative invest-before transition-all duration-700 [&.remove-class_h2]:opacity-20 [&.remove-class_span]:opacity-20  [&.remove-class_h3]:!text-[#F8D4CE] !min-h-auto [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        4 - Sell
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Liquidity at your fingertips
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Sell your shares anytime in our secondary marketplace.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full flex-1">
                <div
                  className={`${
                    handleDisplay(5, 1) ? "block show-img" : "hidden"
                  }`}
                >
                  <div className="mr-[-30px] flex justify-end">
                    <img
                      alt=""
                      src={investBrowse}
                      className="2xl:w-[100%] xl:w-[90%] w-full "
                    />
                  </div>
                </div>

                <div
                  className={`${
                    handleDisplay(5, 2) ? "block show-img" : "hidden"
                  }`}
                >
                  <div className="mr-[-30px] flex justify-end">
                    <img
                      alt=""
                      src={investInvest}
                      className="2xl:w-[100%] xl:w-[90%] w-full "
                    />
                  </div>
                </div>
                <div
                  className={`${
                    handleDisplay(10, 3) ? "block show-img" : "hidden"
                  }`}
                >
                  <div className="mr-[-30px] flex justify-end">
                    <img
                      alt=""
                      src={investEarn}
                      className="2xl:w-[100%] xl:w-[90%] w-full "
                    />
                  </div>
                </div>
                <div
                  className={`${
                    handleDisplay(15, 4) ? "block show-img" : "hidden"
                  }`}
                >
                  <div className="mr-[-30px] flex justify-end">
                    <img
                      alt=""
                      src={investSell}
                      className="2xl:w-[100%] xl:w-[90%] w-full "
                    />
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

export default HowToInvest;
