import React,{ useEffect, useRef, useState } from 'react';
import bgComingSoon from '../assets/images/bgcomingsoon.png'
import homeBanner from '../assets/images/home-banner.png'
import bgInvestIn from '../assets/images/bg-investin.png'
import unlockFeature from '../assets/images/unlock-feature.png'
import popBottom from '../assets/images/pop-bottom.png'
import iconToken from '../assets/images/icon-tokenization.png'
import iconEco from '../assets/images/icon-ecosystem.png'
import nextGen from '../assets/images/nextgen-1.png'
import featured1 from '../assets/images/featured-1.png'
import featured2 from '../assets/images/featured-2.png'
import featured3 from '../assets/images/featured-3.png'
import pillar1 from '../assets/images/pillar-1.png'
import pillar2 from '../assets/images/pillar-2.png'
import pillar3 from '../assets/images/pillar-3.png'
import property1 from '../assets/images/property-1.png'
import property2 from '../assets/images/property-2.png'
import property3 from '../assets/images/property-3.png'
import propertyStripe from '../assets/images/property-stripe.png'
import howToInvest from '../assets/images/howToInvest-2.png'
import experienced2 from '../assets/images/experienced-2.png'
import experienced3 from '../assets/images/experienced-3.png'
import experienced4 from '../assets/images/experienced-4.png'
import iconArrowRight from '../assets/images/icon-ar-right.png'
import homeInvest from '../assets/images/home-invest.png'
import homeLive from '../assets/images/home-live.png'
import clients1 from '../assets/images/clients-1.png'
import clients2 from '../assets/images/clients-2.png'
import clients3 from '../assets/images/clients-3.png'
// import clients4 from '../assets/images/clients-4.png'
import bgUsp from '../assets/images/bgusp.png'
import insights1 from '../assets/images/insights-1.png'
import clientFace1 from '../assets/images/clientface-1.png'
import bgTestimonials from '../assets/images/bg-testimonials.png'
import insightsQuote from '../assets/images/insights-quote.png'
import redeemImg from '../assets/images/redeem-img.png'
import iconEarn from '../assets/images/icon-earn.png'
import iconRedeem from '../assets/images/icon-redeem.png'
import { Accordion } from "flowbite-react";
import iconPrev from '../assets/images/icon-previous.png'
import iconNext from '../assets/images/icon-next.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import particleBar from '../assets/images/particle-bar.png';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';

const Invest = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.state) {
      const totalItems = carouselRef.current.state.items.length;
      setTotalSlides(totalItems);
    }
  }, [carouselRef.current]);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleTranslated = (event) => {
    if (carouselRef.current) {
      const index = event.item.index + 1;
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsInView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
        <Topbar/>
        <div className='md:py-2 mt-5 header-white'>
            <div className='max-w-[1400px] mx-auto lg:px-0 px-3'>
                <div className='bg-no-repeat bg-cover md:rounded-[50px] lg:p-10 px-5 py-8 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${homeBanner})` }}>
                    <img alt="" className='absolute bottom-0 left-0' src={popBottom}/>
                    <div className='grid grid-cols-12 items-center'>
                        <HeaderWhite/>
                        <div className='col-span-12'>
                            <div className='md:h-[650px] h-[350px] flex flex-col items-center justify-center'>
                                <span className='text-[#fff] md:text-[72px] text-[38px] leading-[42px] md:leading-[80px] outfit-bold block text-center'>The future of real estate <span className='md:block'>in onchain</span></span>    
                                <p className='text-[#fff] text-center text-[20px] leading-[26px] mt-3'>Fully backed by Real World Assets, now everyone can own real estate with TRL.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pt-16 pt-5' ref={sectionRef} style={{
        color: isInView ? '#FF4A3F' : '#FFEEED',
        transition: 'color 0.3s ease',
      }}>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <span className='md:text-[48px] text-[30px] outfit-bold  md:leading-[72px] text-center block max-w-[1000px] mx-auto'>
                            We are the world’s first 360 RWA ecosystem that drives the flywheel effect for both the consumer and investor when it comes to real estate living, tokenization, DeFi systems and utility rewards.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pb-16'>
            <div className='max-w-[1600px] mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 mt-10'>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        center
                        margin={10}
                        nav={false}
                        dots={false}
                        items={5.2}
                        autoplay
                        autoplayTimeout={3000}
                        autoplayHoverPause
                        responsive={{
                            0: {
                            items: 1.3,
                            },
                            600: {
                            items: 3.5,
                            },
                            1000: {
                            items: 4.5,
                            },
                        }}
                    >
                    <div className="item">
                        <div>
                            <img alt="" className='md:mt-0' src={clients1}/>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img alt="" className='md:mt-24' src={clients2}/>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img alt="" className='md:mt-0' src={clients3}/>
                        </div>
                    </div>
                    {/* <div className="item">
                        <div>
                            <img alt="" className='md:mt-24' src={clients4}/>
                        </div>
                    </div> */}
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pb-16 pb-10 md:pt-0 pt-5 overflow-x-clip'>
            <div className='max-w-[1600px] mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='orange-text2 mb-3 md:text-[72px] text-[34px] outfit-bold block'>
                            The TRL Ecosystem
                        </span>
                    </div>
                    <div className='md:col-span-6 col-span-12 mr-[-60px]'>
                        <div className='relative lg:min-h-[600px]'>
                            <img alt="" src={homeInvest} className='h-full w-full relative z-[9]' />
                            <div className='absolute left-[40%] top-[50%] translate-y-[-50%] translate-x-[-40%] z-[99] max-w-[60%]'>
                                <span className='block text-[#fff] text-[28px] leading-[32px] md:text-[30px] md:leading-[34px] lg:text-[55px] outfit-bold lg:leading-[66px]'>
                                    Invest in properties globally without getting locked in (or out)
                                </span>
                                <span className='block mt-4 md:mt-8 text-[#fff] text-[17px] leading-[24px] outfit-regular'>
                                    Buy a fraction of a portfolio of properties, earn instant real-time yields, and trade easily in our highly liquid marketplace.
                                </span>
                                <img alt="" className='lg:mt-24 mt-8' src={iconArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-6 col-span-12 lg:ml-[-15px]'>
                        <div className='relative lg:min-h-[612px] md:min-h-[400px]'>
                            <img alt="" src={homeLive} className='h-full w-full relative z-[-1]' />
                            <div className='absolute left-[40%] top-[50%] translate-y-[-50%] translate-x-[-35%] z-[1] max-w-[60%]'>
                                <span className='block text-[#fff] text-[28px] leading-[32px] md:text-[30px] md:leading-[34px] lg:text-[55px] outfit-bold lg:leading-[66px]'>
                                    Experience global living without boundaries
                                </span>
                                <span className='block mt-4 md:mt-8 text-[#fff] text-[17px] leading-[24px] outfit-regular'>
                                    Live flexibly anywhere in the world with our pioneering home subscription service and seamless access to global rental and home ownership opportunities.
                                </span>
                                <img alt="" className='lg:mt-24 mt-8' src={iconArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pb-16 pb-10 md:pt-0 pt-5 lg:px-0 px-3 overflow-x-clip'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12 items-center'>
              <div className='col-span-12 text-center'>
                  <span className='text-[#17271F] text-[32px] md:leading-[52px] leading-[35px] md:mb-12 mb-6 md:text-[48px] outfit-bold block'>The next-gen real estate experience</span>
              </div>
              <div className='col-span-12 relative'>
                
              <OwlCarousel ref={carouselRef}
                        className="owl-theme"
                        center
                        margin={30}
                        nav={false}
                        infinite={false}
                        dots={false}
                        responsive={{
                            0: {
                            items: 1,
                            },
                            600: {
                            items: 1,
                            },
                            1000: {
                            items: 1,
                            },
                        }}
                        onTranslated={handleTranslated}
                    >
                        <div className='item items-center'>
                            <div className='grid grid-cols-12 items-center'>
                              <div className='md:col-span-6 col-span-12'>
                                <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Global fractional ownership</span>
                                <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[500px]'>Invest in premium properties worldwide without the burden of high entry costs. Diversify your portfolio across multiple locations and benefit from property value increases in high-growth markets.</span>
                              </div>
                              <div className='md:col-span-6 col-span-12'>
                                <img src={nextGen} className='max-w-[90%] mx-auto' alt=""/>
                              </div>
                            </div>
                        </div>
                        <div className='item items-center'>
                            <div className='grid grid-cols-12 items-center'>
                              <div className='md:col-span-6 col-span-12'>
                                <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Global fractional ownership</span>
                                <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[500px]'>Invest in premium properties worldwide without the burden of high entry costs. Diversify your portfolio across multiple locations and benefit from property value increases in high-growth markets.</span>
                              </div>
                              <div className='md:col-span-6 col-span-12'>
                                <img src={nextGen} className='max-w-[90%] mx-auto' alt=""/>
                              </div>
                            </div>
                        </div>
                        <div className='item items-center'>
                            <div className='grid grid-cols-12 items-center'>
                              <div className='md:col-span-6 col-span-12'>
                                <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Global fractional ownership</span>
                                <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[500px]'>Invest in premium properties worldwide without the burden of high entry costs. Diversify your portfolio across multiple locations and benefit from property value increases in high-growth markets.</span>
                              </div>
                              <div className='md:col-span-6 col-span-12'>
                                <img src={nextGen} className='max-w-[90%] mx-auto' alt=""/>
                              </div>
                            </div>
                        </div>
                        <div className='item items-center'>
                            <div className='grid grid-cols-12 items-center'>
                              <div className='md:col-span-6 col-span-12'>
                                <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Global fractional ownership</span>
                                <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[500px]'>Invest in premium properties worldwide without the burden of high entry costs. Diversify your portfolio across multiple locations and benefit from property value increases in high-growth markets.</span>
                              </div>
                              <div className='md:col-span-6 col-span-12'>
                                <img src={nextGen} className='max-w-[90%] mx-auto' alt=""/>
                              </div>
                            </div>
                        </div>
                        </OwlCarousel>

                <div>
                  <ul className='flex flex-row gap-x-2 items-center md:mt-[-20px] mt-4'>
                    <li onClick={handlePrev}>
                      <img className="max-w-[36px] cursor-pointer" src={iconPrev} alt="Previous" />
                    </li>
                    <li>
                      {currentSlide}/<span className='hidden'>{totalSlides}</span>4
                    </li>
                    <li onClick={handleNext}>
                      <img className="max-w-[36px] cursor-pointer" src={iconNext} alt="Next" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:py-16 lg:px-0 px-3 py-8 relative'>
            <div className='max-w-7xl mx-auto bg-[#F6F6F2] md:px-10 px-5 py-8 rounded-[12px] md:py-14 md:rounded-[25px]'>
                <div className='grid grid-cols-12 md:gap-x-16 md:gap-y-12 items-center'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[42px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>How to invest</span>
                    </div>
                    <div className='md:col-span-6 col-span-12 relative'>
                    <img src={particleBar} className='h-[100%] absolute left-0 top-0' alt=""/>
                    <div className='absolute left-[20px] md:block hidden bottom-0 h-[200px] z-[1] w-[93%] bg-[#F6F6F2]/70'></div>
                      <div className='relative md:min-h-[470px] md:max-h-[470px] max-h-[250px] min-h-[250px] overflow-y-scroll'>
                        
                        
                        <div className='md:pb-14 pb-8 md:pl-12 pl-8 pr-5 z-[2]'>
                          <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>1 - Browse</span>
                          <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Access high growth real estate portfolios across multiple markets</span>
                          <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5'>Sign up in less than 3 minutes and browse our collection of global real estate portfolios, sourced by experts.</span>
                        </div>
                        <div className='md:pb-14 pb-8 md:pl-12 pl-8 pr-5 z-[2]'>
                          <span className='block text-[#FF4A3F] outfit-bold mb-2 md:text-[24px] text-[20px]'>2 - Invest</span>
                          <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Invest in a high growth properties, from only $50</span>
                          <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5'>Create a Coinbase wallet, or import an existing wallet if you have an existing Metamask or Trust Wallet. All you need to do is add Base Network.</span>
                        </div>
                      </div>
                    </div>
                    <div className='md:col-span-6 col-span-12'>
                      <img src={howToInvest} className='md:pt-0 pt-10' alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pb-16 py-6 lg:px-0 px-3 relative mb-[150px]'>
          <img src={propertyStripe} alt="" className='absolute bottom-[-100px] left-0 w-full' />
          <div className='max-w-7xl mx-auto relative z-[9]'>
            <div className='grid grid-cols-12 md:gap-5 items-center gap-3'>
              <div className='col-span-12 text-center'>
                  <span className='text-[#17271F] mb-8 md:text-[42px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Begin investing in a global property portfolio</span>
              </div>
              <div className='md:col-span-4 col-span-12'>
                <img src={property1} alt=""/>
              </div>
              <div className='md:col-span-4 col-span-12'>
                <img src={property2} alt=""/>
              </div>
              <div className='md:col-span-4 col-span-12'>
                <img src={property3} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className='md:pb-16 md:pt-24 lg:px-0 px-3 pb-6 cs-accordion' style={{ backgroundImage: `url(${bgUsp})` }}>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12 items-center md:gap-x-10'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] text-[32px] md:leading-[52px] leading-[35px] md:mb-0 mb-2 md:text-[48px] outfit-bold block'>Unlock real world value with $TRLCO</span>
                        <span className='text-[#565656] text-[16px] outfit-regular max-w-[600px] mx-auto block mb-10'>
                            $TRLCO is the main utility token powering the TRL 360 ecosystem.
                            Earn and redeem $TRLCO for lifestyle privileges like dining and experiences.
                        </span>
                    </div>
                    <div className='md:col-span-5 col-span-12'>
                        <img alt="" className='w-full' src={redeemImg}/>
                    </div>
                    <div className='md:col-span-7 col-span-12'>
                        <h5 className='text-[28px] outfit-semibold md:mb-8 mb-4 md:mt-0 mt-4'>How this works</h5>
                    <Accordion >
                        <Accordion.Panel>
                            <Accordion.Title>
                                <span className='md:text-[30px] text-[24px] mb-4 outfit-bold'>Earn & redeem</span>
                            </Accordion.Title>
                            <Accordion.Content>
                            <div className='flex flex-row gap-x-2 mb-2 mt-4'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconEarn}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                    Earn $TRLCO and other rewards-based activities within the TRL ecosystem.
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconRedeem}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                Redeem $TRLCO for tangible benefits like monthly subscription offsets, rent-to-own products, and more via our redemption store.
                                </div>
                            </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <span className='md:text-[30px] text-[24px] mb-4 outfit-bold mt-5'>Utility & access</span>
                            </Accordion.Title>
                            <Accordion.Content>
                            <div className='flex flex-row gap-x-2 mb-2 mt-4'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconEarn}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                    Earn $TRLCO and other rewards-based activities within the TRL ecosystem.
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconRedeem}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                Redeem $TRLCO for tangible benefits like monthly subscription offsets, rent-to-own products, and more via our redemption store.
                                </div>
                            </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <span className='md:text-[30px] text-[24px] mb-4 outfit-bold'>Community benefits</span>
                            </Accordion.Title>
                            <Accordion.Content>
                            <div className='flex flex-row gap-x-2 mb-2 mt-4'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconEarn}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                    Earn $TRLCO and other rewards-based activities within the TRL ecosystem.
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconRedeem}/>
                                </div>
                                <div className='md:text-[18px] text-[14px] text-[#565656] outfit-regular'>
                                Redeem $TRLCO for tangible benefits like monthly subscription offsets, rent-to-own products, and more via our redemption store.
                                </div>
                            </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:py-16 py-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] text-[32px] md:leading-[52px] leading-[35px] mb-2 md:text-[48px] outfit-bold block'>Experience the four pillars of TRL Living</span>
                        <span className='text-[#565656] text-[16px] outfit-regular md:mb-0 mb-5'>Our philosophy is built on four key pillars that ensure a superior living experience for our community.</span>
                    </div>
                    <div className='col-span-12 md:mt-16 mt-5'>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={30}
                        nav={false}
                        items={5.2}
                        autoplay
                        autoplayTimeout={3000}
                        autoplayHoverPause
                        responsive={{
                            0: {
                            items: 1,
                            },
                            600: {
                            items: 1.2,
                            },
                            1000: {
                            items: 2.7,
                            },
                        }}
                    >
                        <div className='item'>
                            <div className='max-w-[80%] mx-auto relative md:h-[380px]'>
                                <img alt="" className='absolute z-[-1] right-[-20px]' src={pillar1}/>
                                <h5 className='md:text-[42px] text-[36px] leading-[38px] outfit-bold md:pt-16 pt-8 md:leading-[48px] mb-6 block'>Live <span className='block'>seamless</span></h5>
                                <p className='text-[#17271F] text-[16px] leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5'>Our streamlined procedures make these processes transparent, flexible, secure, and affordable. We believe that simplicity is the key to enjoying life’s greatest pleasures.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='max-w-[80%] mx-auto relative md:h-[380px]'>
                                <img alt="" className='absolute z-[-1] right-[-20px]' src={pillar2}/>
                                <h5 className='md:text-[42px] text-[36px] leading-[38px] outfit-bold md:pt-16 pt-8 md:leading-[48px] mb-6 block'>Live <span className='block'>accessible</span></h5>
                                <p className='text-[#17271F] text-[16px] leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5'>Our goal is to provide choices that empower you to shape your living situation according to your desires, whether you prefer traditional home ownership or flexible rental arrangements.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='max-w-[80%] mx-auto relative md:h-[380px]'>
                                <img alt="" className='absolute z-[-1] right-[-20px]' src={pillar3}/>
                                <h5 className='md:text-[42px] text-[36px] leading-[38px] outfit-bold md:pt-16 pt-8 md:leading-[48px] mb-6 block'>Live <span className='block'>borderless</span></h5>
                                <p className='text-[#17271F] text-[16px] leading-[24px] md:w-[88%] ml-auto md:mb-0 mb-5'>Our services and solutions support a modern lifestyle, allowing you to seamlessly transition between different aspects of your life, no matter where you are.</p>
                            </div>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:py-16 lg:px-0 px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[32px] text-[26px] md:leading-[36px] leading-[29px] md:mb-0 mb-3 outfit-semibold block'>Backed by experienced Web 2 and Web 3 experts</span>
                        <span className='text-[#565656] text-[16px] outfit-regular'>Our team has decades of leadership experience at market leaders in the blockchain, real estate, financial services, and gaming sectors.</span>
                    </div>
                    <div className='col-span-12 text-center'>
                        <ul className='flex flex-row items-center justify-center w-full mt-8 gap-x-5'>
                            <li>
                                <img alt="" src={experienced2} />
                            </li>
                            <li>
                                <img alt="" src={experienced3} />
                            </li>
                            <li>
                                <img alt="" src={experienced4} />
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-12 text-center mt-8'>
                        <button className='text-[#fff] bg-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-5 rounded-[25px]'>Invest Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:py-16 lg:px-0 px-3 py-8'>
            <div className='max-w-[1400px] mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[48px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Insights from the team</span>
                    </div>
                    <div className='col-span-12'>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        center={true}
                        margin={10}
                        nav={false}
                        dots={false}
                        items={5.2}
                        autoplay
                        autoplayTimeout={3000}
                        autoplayHoverPause
                        responsive={{
                            0: {
                            items: 1,
                            },
                            600: {
                            items: 1.5,
                            },
                            1000: {
                            items: 1.5,
                            },
                        }}
                    >
                    <div className="item">
                        <div className='grid grid-cols-11 items-center mt-6'>
                            <div className='md:col-span-3 col-span-12'>
                                <img alt="" className='md:mb-0 mb-4' src={insights1}/>
                            </div>
                            <div className='md:col-span-8 col-span-12'>
                                <div className='md:m-4 md:p-10 p-6 bg-cover bg-no-repeat md:h-[390px] h-[280px] max-w-full md:max-w-[94%] relative flex flex-col justify-between' style={{ backgroundImage: `url(${bgTestimonials})` }}>
                                    <p className='md:ext-[20px]'>Lorem ipsum dolor sit amet consectetur. Nunc accumsan tellus lectus dui molestie aliquet in. Pretium nullam vehicula eget mi fermentum nunc tincidunt. Enim viverra aliquam ut massa vitae adipiscing consequat in sed. Interdum at gravida vel tortor habitant cras augue euismod.</p>
                                    <img alt="" className='md:max-w-[100px] max-w-[50px] absolute md:right-[38px] right-[0px] md:bottom-0 bottom-[20px]' src={insightsQuote}/>
                                    <div className='grid grid-cols-12'>
                                        <div className='md:col-span-5 col-span-9'>
                                            <div className='flex flex-row items-center gap-x-2'>
                                                <div>
                                                    <img alt="" src={clientFace1}/>
                                                </div>
                                                <div>
                                                    <span className='block outfit-bold'>Adrian Gaffor</span>
                                                    <span className='block text-[#565656]'>Co-founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='grid grid-cols-11 items-center mt-6'>
                            <div className='md:col-span-3 col-span-12'>
                                <img alt="" className='md:mb-0 mb-4' src={insights1}/>
                            </div>
                            <div className='md:col-span-8 col-span-12'>
                                <div className='md:m-4 md:p-10 p-6 bg-cover bg-no-repeat md:h-[390px] h-[280px] max-w-full md:max-w-[94%] relative flex flex-col justify-between' style={{ backgroundImage: `url(${bgTestimonials})` }}>
                                    <p className='md:ext-[20px]'>Lorem ipsum dolor sit amet consectetur. Nunc accumsan tellus lectus dui molestie aliquet in. Pretium nullam vehicula eget mi fermentum nunc tincidunt. Enim viverra aliquam ut massa vitae adipiscing consequat in sed. Interdum at gravida vel tortor habitant cras augue euismod.</p>
                                    <img alt="" className='md:max-w-[100px] max-w-[50px] absolute md:right-[38px] right-[0px] md:bottom-0 bottom-[20px]' src={insightsQuote}/>
                                    <div className='grid grid-cols-12'>
                                        <div className='md:col-span-5 col-span-9'>
                                            <div className='flex flex-row items-center gap-x-2'>
                                                <div>
                                                    <img alt="" src={clientFace1}/>
                                                </div>
                                                <div>
                                                    <span className='block outfit-bold'>Adrian Gaffor</span>
                                                    <span className='block text-[#565656]'>Co-founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='grid grid-cols-11 items-center mt-6'>
                            <div className='md:col-span-3 col-span-12'>
                                <img alt="" className='md:mb-0 mb-4' src={insights1}/>
                            </div>
                            <div className='md:col-span-8 col-span-12'>
                                <div className='md:m-4 md:p-10 p-6 bg-cover bg-no-repeat md:h-[390px] h-[280px] max-w-full md:max-w-[94%] relative flex flex-col justify-between' style={{ backgroundImage: `url(${bgTestimonials})` }}>
                                    <p className='md:ext-[20px]'>Lorem ipsum dolor sit amet consectetur. Nunc accumsan tellus lectus dui molestie aliquet in. Pretium nullam vehicula eget mi fermentum nunc tincidunt. Enim viverra aliquam ut massa vitae adipiscing consequat in sed. Interdum at gravida vel tortor habitant cras augue euismod.</p>
                                    <img alt="" className='md:max-w-[100px] max-w-[50px] absolute md:right-[38px] right-[0px] md:bottom-0 bottom-[20px]' src={insightsQuote}/>
                                    <div className='grid grid-cols-12'>
                                        <div className='md:col-span-5 col-span-9'>
                                            <div className='flex flex-row items-center gap-x-2'>
                                                <div>
                                                    <img alt="" src={clientFace1}/>
                                                </div>
                                                <div>
                                                    <span className='block outfit-bold'>Adrian Gaffor</span>
                                                    <span className='block text-[#565656]'>Co-founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='grid grid-cols-11 items-center mt-6'>
                            <div className='md:col-span-3 col-span-12'>
                                <img alt="" className='md:mb-0 mb-4' src={insights1}/>
                            </div>
                            <div className='md:col-span-8 col-span-12'>
                                <div className='md:m-4 md:p-10 p-6 bg-cover bg-no-repeat md:h-[390px] h-[280px] max-w-full md:max-w-[94%] relative flex flex-col justify-between' style={{ backgroundImage: `url(${bgTestimonials})` }}>
                                    <p className='md:ext-[20px]'>Lorem ipsum dolor sit amet consectetur. Nunc accumsan tellus lectus dui molestie aliquet in. Pretium nullam vehicula eget mi fermentum nunc tincidunt. Enim viverra aliquam ut massa vitae adipiscing consequat in sed. Interdum at gravida vel tortor habitant cras augue euismod.</p>
                                    <img alt="" className='md:max-w-[100px] max-w-[50px] absolute md:right-[38px] right-[0px] md:bottom-0 bottom-[20px]' src={insightsQuote}/>
                                    <div className='grid grid-cols-12'>
                                        <div className='md:col-span-5 col-span-9'>
                                            <div className='flex flex-row items-center gap-x-2'>
                                                <div>
                                                    <img alt="" src={clientFace1}/>
                                                </div>
                                                <div>
                                                    <span className='block outfit-bold'>Adrian Gaffor</span>
                                                    <span className='block text-[#565656]'>Co-founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-no-repeat bg-cover lg:px-0 px-3 lg:py-0 pb-6 pt-6" style={{ backgroundImage: `url(${bgComingSoon})` }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 items-center">
                    <div className="md:col-span-6 col-span-12">
                        <span className='block md:text-[30px] md:leading-[40px] text-[22px] orange-text outfit-bold mb-2'>Coming Soon</span>
                        <span className='block md:text-[48px] text-[38px] md:leading-[52px] leading-[42px] outfit-bold mb-6 md:mb-6 max-w-[480px]'>
                            Unlock the future of real estate with TRL Marketplace
                        </span>
                        <ul>
                            <li className='flex flex-row md:gap-x-2 gap-x-2 mb-4'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconToken} />
                                </div>
                                <div>
                                    <span className='block text-[18px] leading-[26px] outfit-bold'>
                                        Tokenisation-as-a-service
                                    </span>
                                    <span className='block text-[16px] leading-[24px] text-[#565656] outfit-regular mt-1 max-w-[500px]'>
                                        Empower homeowners and real estate agents to list and tokenise properties for sale, boosting property volume and offering consumers the chance to invest in fractional ownership.
                                    </span>
                                </div>
                            </li>
                            <li className='flex flex-row md:gap-x-2 gap-x-2'>
                                <div>
                                    <img alt="" className='min-w-[30px]' src={iconEco} />
                                </div>
                                <div>
                                    <span className='block text-[18px] leading-[26px] outfit-bold'>
                                        Ecosystem partnerships
                                    </span>
                                    <span className='block text-[16px] leading-[24px] text-[#565656] outfit-regular mt-1 max-w-[500px]'>
                                    Enjoy seamless access to a wide range of services from top RWA partners, providing a comprehensive, efficient, and scalable investment platform.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <img alt="" src={unlockFeature} className="md:w-[85%] mx-auto" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-7xl mx-auto md:py-24 lg:px-0 px-3 py-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <img alt="" className='max-w-[100%] mx-auto' src={bgInvestIn}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:px-0 px-3'>
            <div className='max-w-7xl mx-auto md:py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <ul className='flex flex-row items-center justify-center md:gap-x-5 gap-x-1'>
                            <li>
                                <span className='text-[#565656] md:text-[16px] text-[13px] outfit-regular md:inline'>Proudly featured in</span>
                            </li>
                            <li>
                                <img alt="" src={featured1}/>
                            </li>
                            <li>
                                <img alt="" src={featured2}/>
                            </li>
                            <li>
                                <img alt="" src={featured3}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Invest;