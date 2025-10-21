import React, { useEffect, useRef, useState } from "react";
import GetStartedSteps1 from "../assets/images/get-started-steps-1.png";
import GetStartedSteps2 from "../assets/images/get-started-steps-2.png";
import GetStartedSteps3 from "../assets/images/get-started-steps-3.png";
import GetStartedSteps4 from "../assets/images/get-started-steps-4.png";

function GetStartedSimpleSteps() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Fix: capture current ref value and use it in cleanup
  useEffect(() => {
    const node = sectionRef.current; // capture once
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRunning(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  // ⏱️ Run the counter only while isRunning is true
  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  // 🛑 Stop the counter at 20 ticks (or adjust as needed)
  useEffect(() => {
    if (count > 20 && isRunning) {
      setIsRunning(false);
    }
  }, [count, isRunning]);

  const handleDisplay = (fCount, section) => {
    if (section === 1) return count <= fCount;
    if (section === 2) return count > fCount && count <= section * 5;
    if (section === 3) return count > fCount && count <= section * 5;
    if (section === 4) return count > fCount;
    return false;
  };

  return (
    <>
      <div className="max-w-[1920px] block relative md:mb-[120px] mb-20 lg:px-[30px] px-0 overflow-hidden">
        <div className="w-full bg-[#F6F6F2] md:rounded-[40px] rounded-3xl md:py-20 py-16 pl-2">
          <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] text-center md:mb-14 mb-[50px] outfit-bold block">
            Get started with 4 simple steps
          </span>

          <div ref={sectionRef}>
            <div className="flex md:gap-16 gap-5 lg:flex-row flex-col-reverse">
              <div className="md:pl-[50px] md:ml-[54px] pl-[15px] md:pr-0 pr-5 md:w-[490px] md:h-[510px] flex flex-col justify-between overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[140px] before:bg-[linear-gradient(180deg,rgba(246,246,242,0.00)0%,#F6F6F2_100%)] before:z-10 before:pointer-events-none before:hidden md:before:block">
                <div
                  className={`${
                    handleDisplay(5, 1) ? "block active-be-ct" : "hidden"
                  } relative invest-before transition-all duration-700 [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        1 - Start
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Create wallet in Base
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Create a{" "}
                        <span className="inline-block text-[#FF4A3F] font-semibold">
                          Coinbase wallet
                        </span>
                        , or{" "}
                        <span className="inline-block text-[#FF4A3F] font-semibold">
                          import an existing wallet
                        </span>{" "}
                        if you have an existing Metamask or Trust Wallet. All
                        you need to do is add Base Network.
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
                        2 - Buy
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Buy Crypto
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        <span className="inline-block text-[#FF4A3F] font-semibold">
                          Buy some USDT, or send some USDT
                        </span>{" "}
                        to your wallet on the Base Network which can be used to
                        buy $TRLX tokens. Remember to buffer some additional
                        USDT (e.g. 1 USDT) to pay for gas.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    handleDisplay(10, 3)
                      ? "block active-be-ct"
                      : handleDisplay(5, 2)
                      ? "remove-class none-active-ct md:block hidden"
                      : "hidden"
                  } relative invest-before transition-all duration-700 [&.remove-class_h2]:opacity-20 [&.remove-class_span]:opacity-20 [&.remove-class_h3]:!text-[#F8D4CE] [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        3 - Set up
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Create account and complete KYC in IXSWAP
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Complete your KYC in IX Swap, by entering your personal
                        information, and ID. Do buffer 1-2 days to get this
                        approved.
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
                  } relative invest-before transition-all duration-700 [&.remove-class_h2]:opacity-20 [&.remove-class_span]:opacity-20 [&.remove-class_h3]:!text-[#F8D4CE] !min-h-auto [&.active-be-ct_.trans-y]:md:pt-[60px] [&.active-be-ct_.trans-y]:pt-10`}
                >
                  <div className="dott-step">
                    <div className="trans-y">
                      <h3 className="md:text-2xl text-base font-bold text-[#FF4A3F] mb-0 ct-title-before">
                        4 - Done
                      </h3>
                      <h2 className="md:text-[32px] text-[22px] leading-[30px] md:leading-10 font-bold text-[#17271F] py-3 block m-0">
                        Invest in IXSwap RWA Launchpad
                      </h2>
                      <span className="block text-base text-[#565656] font-normal">
                        Once KYC is passed, head to the TRLX public sale page,
                        click <span className="inline-block text-[#FF4A3F] font-semibold">Invest</span> to send in your desired funds, and then wait till the funding round is completed to claim your $TRLX!
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right visuals */}
              <div className="w-full flex-1">
                <div className={`${handleDisplay(5, 1) ? "block show-img" : "hidden"}`}>
                  <div className="mr-[-30px] flex justify-end">
                    <img alt="" src={GetStartedSteps1} className="2xl:w-[80%] xl:w-[90%] w-full" />
                  </div>
                </div>

                <div className={`${handleDisplay(5, 2) ? "block show-img" : "hidden"}`}>
                  <div className="mr-[-30px] flex justify-end">
                    <img alt="" src={GetStartedSteps2} className="2xl:w-[80%] xl:w-[90%] w-full" />
                  </div>
                </div>

                <div className={`${handleDisplay(10, 3) ? "block show-img" : "hidden"}`}>
                  <div className="mr-[-30px] flex justify-end">
                    <img alt="" src={GetStartedSteps3} className="2xl:w-[80%] xl:w-[90%] w-full" />
                  </div>
                </div>

                <div className={`${handleDisplay(15, 4) ? "block show-img" : "hidden"}`}>
                  <div className="mr-[-30px] flex justify-end">
                    <img alt="" src={GetStartedSteps4} className="2xl:w-[80%] xl:w-[90%] w-full n" />
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

export default GetStartedSimpleSteps;
