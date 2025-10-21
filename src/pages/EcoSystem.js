import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ecosystemtab1 from "../assets/images/ecosystem-tabs-1.png";
import ecosystemCta1 from "../assets/images/ecosystem-cta-1.png";
import mobileEcosystemCta1 from "../assets/images/mobile-ecosystem-cta-1.png";
import rightImg from "../assets/images/AboutCtaBckground.png";
import ecosystemCta2 from "../assets/images/ecosystem-cta-2.png";
import listtab1 from "../assets/images/network-base.png";
import listtab2 from "../assets/images/network-skale.png";
import listtab3 from "../assets/images/network-iota.png";
import listtab4 from "../assets/images/network-coinbase.png";
import listtab5 from "../assets/images/network-wallet-connect.png";
import listtab6 from "../assets/images/network-metamask.png";
import ecosystemtab2 from "../assets/images/ecosystem-tabs-2.png";
import ecosystemtab3 from "../assets/images/ecosystem-tabs-3.png";
import { Link } from "react-router-dom";

const EcoSystem = () => {
  const [active, setActive] = useState(1);
  const handleActive = (item) => setActive(item);
  return (
    <div>
      <Topbar />
      <Header />
      <div className="md:pt-20 md:pb-16 pt-10 pb-16 lg:px-0 px-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <span className="main-title-heading mb-4">
                <span className="orange-text2 orange-text3 mb-4 block after:!hidden">TRL Ecosystem</span>
              </span>
              <span className="text-[#565656] text-[20px] outfit-regular md:max-w-[1000px] mx-auto block">
                Our goal is to rebuild an ecosystem where renters can rent
                freely anywhere in the world, build a new homeownership
                financing system that enables buyers of tomorrow to have the
                flexibility of owning, upscaling, and downscaling at their
                convenience, and for investors to benefit with the security of
                real estate, but receive the upside from the ecosystem.
              </span>
            </div>
            <div className="col-span-12 text-center md:mt-12 mt-10">
              <Link
                to={`https://whitepaper.trlco.world/trl`}
                className="ct-button-2 w-fit mx-auto block"
              >
                Read our whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1086px] w-full mx-auto px-4 ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <img
                alt=""
                className="max-w-[100%] mx-auto md:block hidden"
                src={ecosystemCta1}
              />
              <img
                alt=""
                className="max-w-[100%] mx-auto md:hidden block"
                src={mobileEcosystemCta1}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-5xl mx-auto md:pt-[140px] pt-[100px] md:pb-9 pb-6 px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <span class="text-[#17271F] max-w-[750px] mx-auto text-center md:text-5xl text-[28px] leading-[36px] md:leading-[56px] md:mb-16 mb-[30px] outfit-bold block">
                Revolutionising homeownership, rentals and investments
              </span>
              <img
                alt=""
                className="max-w-[100%] mx-auto"
                src={ecosystemCta2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden flex justify-end">
        <img
          alt=""
          className="md:w-[160px] w-[84px] md:translate-x-[30px] translate-x-[20px]"
          src={rightImg}
        />
      </div>

      <div>
        <div className="max-w-[1206px] mx-auto pb-[120px] lg:mt-[-30px] lg:pt-0 pt-8 px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <span class="text-[#17271F] max-w-[750px] mx-auto text-center md:text-5xl text-[28px] leading-[36px] md:leading-[56px] md:mb-14 mb-[30px] outfit-bold block">
                Explore our network of partners
              </span>
            </div>
            <div className="col-span-12">
              <div className="tabs-pills-eco">
                <div className="overflow-auto md:mb-12 mb-8 mobile-scroll-remove">
                  <div className="flex items-center md:gap-4 gap-3 justify-center network-tab-section w-full min-w-[640px]">
                    <button
                      className={`network-tab ${active === 1 ? "active" : ""}`}
                      onClick={() => handleActive(1)}
                    >
                      Product
                    </button>
                    <button
                      className={`network-tab ${active === 2 ? "active" : ""}`}
                      onClick={() => handleActive(2)}
                    >
                      Blockchain&nbsp;network
                    </button>
                    <button
                      className={`network-tab ${active === 3 ? "active" : ""}`}
                      onClick={() => handleActive(3)}
                    >
                      Security
                    </button>
                    <button
                      className={`network-tab ${active === 4 ? "active" : ""}`}
                      onClick={() => handleActive(4)}
                    >
                      Compliance
                    </button>
                    <button
                      className={`network-tab ${active === 5 ? "active" : ""}`}
                      onClick={() => handleActive(5)}
                    >
                      Wallets
                    </button>
                  </div>
                </div>
                {active === 1 && (
                  <div className="grid grid-cols-12 items-center md:gap-8 xl:px-[120px]">
                    <div className="md:col-span-6 col-span-12 md:order-0 order-1">
                      <span className="block text-2xl leading-6 outfit-bold text-[#17271F] ">
                        TRL Platform
                      </span>
                      <span className="block text-base text-[#565656] md:max-w-[392px] md:mt-3 mt-2 mb-6  md:mb-8">
                      World's first end-to-end RWA ecosystem, featuring the inaugural Home Subscription Service. This service allows users to enjoy flexible living options globally while also providing investment opportunities through our innovative real estate tokenization, all on the Base chain.
                      </span>
                      <Link
                        to={`/roadmap`}
                        className="ct-button-border block w-fit"
                      >
                        Learn more
                      </Link>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-1 order-0 md:mb-0 mb-8">
                      <img src={ecosystemtab1} className="w-full" alt="" />
                    </div>
                  </div>
                )}
                {active === 2 && (
                  <div className="grid grid-cols-12 items-center md:gap-8 gap-6">
                    <div
                      className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)]  flex flex-col justify-between"
                    >
                      <div className="w-full">
                        <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                          <img
                            src={listtab1}
                            className="w-[122px] h-auto object-contain"
                            alt=""
                          />
                        </div>
                        <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                          Base
                        </h2>
                        <span className="block text-base text-[#565656] mb-6">
                          Base Chain is an Ethereum Layer-2 blockchain network
                          developed by Coinbase.
                        </span>
                      </div>
                      <Link
                        to={`https://www.base.org/`}
                        className="ct-button-border block w-fit"
                      >
                        Learn more
                      </Link>
                    </div>
                    <div
                      className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)] flex flex-col justify-between"
                    >
                      <div className="w-full">
                        <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                          <img
                            src={listtab2}
                            className="w-[139px] h-auto object-contain"
                            alt=""
                          />
                        </div>
                        <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                          Skale
                        </h2>
                        <span className="block text-base text-[#565656] mb-6">
                          SKALE Network is a Layer-2 scaling solution that
                          creates a sidechain environment to relieve the
                          congestion on the Ethereum network.
                        </span>
                      </div>
                      <Link
                        to={`https://skale.space/`}
                        className="ct-button-border block w-fit "
                      >
                        Learn more
                      </Link>
                    </div>
                    <div
                      className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)] flex flex-col justify-between"
                    >
                      <div className="w-full">
                        <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                          <img
                            src={listtab3}
                            className="w-[130px] h-auto object-contain"
                            alt=""
                          />
                        </div>

                        <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                          IOTA
                        </h2>
                        <span className="block text-base text-[#565656] mb-6">
                          The IOTA network is built for the Internet of
                          Everything, with tamper-proof data, feeless
                          transactions, and low resource requirements.
                        </span>
                      </div>
                      <Link
                        to={`https://www.iota.org/`}
                        className="ct-button-border block w-fit"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                )}
                {active === 3 && (
                  <div className="">
                    <div className="grid grid-cols-12 items-center md:gap-x-10 xl:px-[120px]">
                      <div className="md:col-span-6 col-span-12 md:order-0 order-1">
                        <span className="block text-2xl leading-6 outfit-bold text-[#17271F] ">
                          Cyberscope
                        </span>
                        <span className="block text-base text-[#565656] md:max-w-[392px] md:mt-3 mt-2 mb-6  md:mb-8">
                          Cyberscope is one of the leading and recognised audit
                          authorities in the crypto space.
                        </span>
                        <Link
                          to={`https://www.cyberscope.io/`}
                          className="ct-button-border block w-fit"
                        >
                          Learn more
                        </Link>
                      </div>
                      <div className="md:col-span-6 col-span-12 order-0 md:order-1 md:mb-0 mb-8">
                        <img src={ecosystemtab2} className=" w-full" alt="" />
                      </div>
                    </div>
                  </div>
                )}
                {active === 4 && (
                  <div className="">
                    <div className="grid grid-cols-12 items-center md:gap-x-10 xl:px-[120px]">
                      <div className="md:col-span-6 col-span-12 md:order-0 order-1">
                        <span className="block text-2xl leading-6 outfit-bold text-[#17271F] ">
                          IX Swap
                        </span>
                        <span className="block text-base text-[#565656] md:max-w-[392px] md:mt-3 mt-2 mb-6  md:mb-8">
                          IX Swap is a DeFi platform that aims to bring access
                          to private market investments through tokenization and
                          security tokens.
                        </span>
                        <Link
                          to={`https://www.ixswap.io/`}
                          className="ct-button-border block w-fit"
                        >
                          Learn more
                        </Link>
                      </div>
                      <div className="md:col-span-6 col-span-12 order-0 md:order-1 md:mb-0 mb-8">
                        <img src={ecosystemtab3} className=" w-full" alt="" />
                      </div>
                    </div>
                  </div>
                )}
                {active === 5 && (
                  <div className="">
                    <div className="grid grid-cols-12 items-start md:gap-8 gap-6">
                      <div
                        className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)]  flex flex-col justify-between"
                      >
                        <div className="w-full">
                          <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                            <img
                              src={listtab4}
                              className="max-w-[180px] w-full h-auto object-contain"
                              alt=""
                            />
                          </div>
                          <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                            Base Wallet
                          </h2>
                          <span className="block text-base text-[#565656] mb-6">
                            Base wallets are designed to interact with and store
                            cryptocurrencies and digital assets on the Base
                            blockchain.
                          </span>
                        </div>
                        <Link
                          to={`https://www.coinbase.com/wallet`}
                          className="ct-button-border block w-fit"
                        >
                          Learn more
                        </Link>
                      </div>
                      <div
                        className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)]  flex flex-col justify-between"
                      >
                        <div className="w-full">
                          <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                            <img
                              src={listtab5}
                              className="max-w-[224px] w-full h-auto object-contain"
                              alt=""
                            />
                          </div>
                          <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                            Wallet Connect
                          </h2>
                          <span className="block text-base text-[#565656] mb-6">
                            WalletConnect is an open source protocol that allows
                            you to connect your crypto wallet to decentralized
                            applications (dApps) on the web.
                          </span>
                        </div>
                        <Link
                          to={`https://walletconnect.com/`}
                          className="ct-button-border block w-fit"
                        >
                          Learn more
                        </Link>
                      </div>

                      <div
                        className="bg-[#fff] md:col-span-4 col-span-12 h-full md:p-6 p-5 rounded-3xl 
                    shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)]  flex flex-col justify-between"
                      >
                        <div className="w-full">
                          <div className="h-[100px] w-full bg-[#F6F6F2] rounded-xl flex items-center justify-center">
                            <img
                              src={listtab6}
                              className="max-w-[213px] w-full h-auto object-contain"
                              alt=""
                            />
                          </div>
                          <h2 className="block text-[#17271F] mt-8 mb-2 text-2xl font-bold capitalize">
                            Metamask
                          </h2>
                          <span className="block text-base text-[#565656] mb-6">
                            MetaMask is a cryptocurrency wallet used to interact
                            with the Ethereum blockchain. It allows users to
                            access their Ethereum wallet through a browser
                            extension or mobile app, which can then be used to
                            interact with decentralized applications.
                          </span>
                        </div>
                        <Link
                          to={`https://metamask.io/`}
                          className="ct-button-border block w-fit"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EcoSystem;
