/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useRef, useState } from "react";
import shapeRuby from "../assets/images/shape-ruby.png";
import emerald from "../assets/images/emerald-r.png";
import bgComingSoon from "../assets/images/bgcomingsoon.png";
import arrowh from "../assets/images/h-arrow-down.png";
import homeBanner from "../assets/images/home-banner-1.png";
import homeBanner2 from "../assets/images/home-banner-2.png";
import mobileBanner1 from "../assets/images/mobile-home-banner-1.png";
import mobileBanner2 from "../assets/images/mobile-home-banner-2.png";
import leftBild from "../assets/images/left-bild.png";
import rightUser from "../assets/images/right-user.png";
import cloud1 from "../assets/images/cloud-1.png";
import cloud2 from "../assets/images/cloud-2.png";
import bgInvestIn from "../assets/images/bg-investin.png";
import mobilebgInvestIn from "../assets/images/mobile-bg-investin.png";
import unlockFeature from "../assets/images/unlock-feature.png";
import experienced1 from "../assets/images/experienced-1.png";
import experienced2 from "../assets/images/experienced-2.png";
import experienced3 from "../assets/images/experienced-3.png";
import experienced4 from "../assets/images/experienced-4.png";
import experienced5 from "../assets/images/experienced-5.png";
import experienced6 from "../assets/images/experienced-6.png";
import experienced7 from "../assets/images/experienced-7.png";
import experienced8 from "../assets/images/experienced-8.png";
import experienced9 from "../assets/images/experienced-9.png";
import experienced10 from "../assets/images/experienced-10.png";
import iconArrowRight from "../assets/images/icon-ar-right.png";
import slideLeftAarow from "../assets/images/slide-in-left-aarow.png";
import slideRightAarow from "../assets/images/slide-in-right-aarow.png";
import iconPrev from "../assets/images/icon-previous.png";
import iconNext from "../assets/images/icon-next.png";
import bgUsp from "../assets/images/bgusp.png";
import videoThubmnail1 from "../assets/images/video-thubmnail-1.png";
import videoThubmnail2 from "../assets/images/video-thubmnail-2.png";
import videoThubmnail3 from "../assets/images/video-thubmnail-3.png";
import playIcon from "../assets/images/play-Icon-button.png";
import clientFace1 from "../assets/images/clientface-1.png";
import clientFace4 from "../assets/images/leadership-4.png";
import clientFace5 from "../assets/images/leadership-5.png";
import bgTestimonials from "../assets/images/bg-testimonials.png";
import insightsQuote from "../assets/images/insights-quote.png";
import redeemImg from "../assets/images/redeem-img.png";
import { Accordion } from "flowbite-react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import HeaderWhite from "../components/HeaderWhite";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import AOS from "aos";
import "aos/dist/aos.css";
import HowToInvest from "../components/HowToInvest";
import proudlyFeaturedLogo1 from "../assets/images/experienced-1.png";
import proudlyFeaturedLogo2 from "../assets/images/benzinga.png";
import proudlyFeaturedLogo3 from "../assets/images/odaily.png";
import { Link } from "react-router-dom";
import ExperienceSlider from "../components/ExperienceSlider";
import LivingSlider from "../components/LivingSlider";
import TextAnimation from "../components/TextAnimation";
import LogoSlider from "../components/LogoSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BeginInvesting from "../components/BeginInvesting";
import TheWorldFirst from "../components/TheWorldFirst";
import GlobalNetwork from "../components/GlobalNetwork";
import YourJourneyGlobal from "../components/YourJourneyGlobal";
import OnePowerfulPlatform from "../components/OnePowerfulPlatform";


gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const sectionRef = useRef(null);
  const [, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  const [leftWidth, setLeftWidth] = useState(50);
  const [rightWidth, setRightWidth] = useState(50);
  const [isHoverApply, setIsHoverApply] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isDisplay, setIsDisplay] = useState({ left: false, right: false });
  const [isConsumer] = useState(false);
  const [forRight, setForRight] = useState(false);
  const [forLeft, setForLeft] = useState(false);

  const targetDivRef = useRef(null);
  const elementRef = useRef(null);

  const mobileDivRef = useRef(null);
  const mobileLeftDivRef = useRef(null);

// === HERO SLIDER STATE (pure JS) ===
const [heroIdx, setHeroIdx] = useState(0);
const heroAutoplayRef = useRef(null);
const heroTouchingRef = useRef(false);
const heroStartXRef = useRef(null);
const heroDeltaXRef = useRef(0);

// two slides: first with clouds, second without
const heroSlides = [
  { bg: homeBanner, bgMobile:mobileBanner1, showClouds: true },
  { bg: homeBanner2, bgMobile:mobileBanner2 ,showClouds: false }, // make sure homeBanner2 is imported
];

// autoplay every 3s; pauses while swiping
useEffect(() => {
  if (heroTouchingRef.current) return;
  if (heroAutoplayRef.current) clearInterval(heroAutoplayRef.current);
  heroAutoplayRef.current = setInterval(() => {
    setHeroIdx((i) => (i + 1) % heroSlides.length);
  }, 3000);
  return () => heroAutoplayRef.current && clearInterval(heroAutoplayRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [heroIdx]);

function heroGoTo(next) {
  setHeroIdx((next + heroSlides.length) % heroSlides.length);
}

function heroOnTouchStart(e) {
  heroTouchingRef.current = true;
  if (heroAutoplayRef.current) clearInterval(heroAutoplayRef.current);
  heroStartXRef.current = e.touches[0].clientX;
  heroDeltaXRef.current = 0;
}
function heroOnTouchMove(e) {
  if (heroStartXRef.current == null) return;
  heroDeltaXRef.current = e.touches[0].clientX - heroStartXRef.current;
}
function heroOnTouchEnd() {
  heroTouchingRef.current = false;
  const threshold = 60;
  if (heroDeltaXRef.current > threshold) heroGoTo(heroIdx - 1);
  else if (heroDeltaXRef.current < -threshold) heroGoTo(heroIdx + 1);
  heroStartXRef.current = null;
  heroDeltaXRef.current = 0;
}

  // 1) targetDivRef -> setIsActive
useEffect(() => {
  const node = targetDivRef.current;           // snapshot once
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => setIsActive(entry.isIntersecting),
    { threshold: 0.5 }
  );

  observer.observe(node);
  return () => {
    observer.unobserve(node);                  // use the snapshot
    observer.disconnect();
  };
}, []);

// 2) mobileDivRef -> setIsActive1
useEffect(() => {
  const node = mobileDivRef.current;           // snapshot once
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => setIsActive1(entry.isIntersecting),
    { threshold: 0.5 }
  );

  observer.observe(node);
  return () => {
    observer.unobserve(node);
    observer.disconnect();
  };
}, []);

// 3) mobileLeftDivRef -> setIsActive (or setIsActiveLeft if you have one)
useEffect(() => {
  const node = mobileLeftDivRef.current;       // snapshot once
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => setIsActive(entry.isIntersecting),
    { threshold: 0.5 }
  );

  observer.observe(node);
  return () => {
    observer.unobserve(node);
    observer.disconnect();
  };
}, []);

  useEffect(() => {
    const element = elementRef.current;

    // Create the animation
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0, // Translate upwards by 50px
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom-=1300",
          end: "bottomp+=0",
          scrub: true,
          markers: true,
        },
      }
    );
    gsap.set(".gsap-marker-start", { opacity: 0 });
    gsap.set(".gsap-marker-end", { opacity: 0 });
    gsap.set(".gsap-marker-scroller-start", { opacity: 0 });
    gsap.set(".gsap-marker-scroller-end", { opacity: 0 });
    // Clean up the animation when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const expandLeft = () => {
    setLeftWidth(100);
    setRightWidth(0);
    setIsDisplay({ ...isDisplay, left: true });
  };

  const expandRight = () => {
    setLeftWidth(0);
    setRightWidth(100);
    setIsDisplay({ ...isDisplay, right: true });
  };
  const handleDisplay = () => setIsDisplay({ right: false, left: false });
  const handleHoverLeft = () => {
    if (isHoverApply) {
      setLeftWidth(65);
      setRightWidth(35);
      handleDisplay();
    }
  };

  const leftClick = () => {
    setIsHoverApply(false);
    setRightWidth(0);
    setLeftWidth(100);
    setIsDisplay({ right: false, left: true });
  };

  const rightClick = () => {
    setIsHoverApply(false);
    setRightWidth(100);
    setLeftWidth(0);
    setIsDisplay({ right: true, left: false });
  };
  const handleHoverRight = () => {
    if (isHoverApply) {
      setLeftWidth(35);
      setRightWidth(65);
      handleDisplay();
    }
  };

  const handleMouseLeave = () => {
    if (leftWidth !== 100 && rightWidth !== 100) {
      setLeftWidth(50);
      setRightWidth(50);
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      delay: 100,
    });

    const refreshAOS = () => {
      AOS.refresh(); // Use refresh() instead of refreshHard()
    };

    // Call AOS.refresh() on window scroll and resize events
    window.addEventListener("scroll", refreshAOS);
    window.addEventListener("resize", refreshAOS);

    // Optionally, force AOS refresh after a short delay
    setTimeout(refreshAOS, 100);

    return () => {
      window.removeEventListener("scroll", refreshAOS);
      window.removeEventListener("resize", refreshAOS);
    };
  }, []);

  // This useEffect will refresh AOS on route changes if using React Router
  useEffect(
    () => {
      AOS.refresh();
    },
    [
      /* dependencies if any, e.g., navigation or content changes */
    ]
  );
  return (
    <div className="">
      <div className="lg:mb-5">
        <Topbar />
      </div>
      <div className="lg:hidden block sticky top-0 z-50 ">
        <Header />
      </div>
      <div className=" lg:block hidden ">
        <HeaderWhite />
      </div>
      
      <div
        className="md:py-2 md:mt-5 header-white"
      >
        <div className="max-w-[1400px] mx-auto 2xl:px-4 md:px-[30px] px-4">
  <div
    className="relative overflow-hidden md:rounded-[50px] rounded-3xl"
    onTouchStart={heroOnTouchStart}
    onTouchMove={heroOnTouchMove}
    onTouchEnd={heroOnTouchEnd}
  >
    {/* Track */}
    <div
      className="flex transition-transform duration-700 ease-out"
      style={{ transform: `translateX(-${heroIdx * 100}%)` }}
    >
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="shrink-0 w-full bg-no-repeat !bg-cover bg-center lg:p-10 px-5 md:py-8 pt-[78px] pb-6 relative overflow-clip hero-section-bg"
          // style={{ backgroundImage: `url(${s.bg})` }}
          // style={{ '--hero-bg': `url(${s.bg})` }}
            style={{
              backgroundImage: `url(${s.bg})`,        // desktop: inline
              '--hero-bg': `url(${s.bgMobile || s.bg})` // mobile: CSS var (fallback to desktop if not provided)
            }}
        >
          {/* Clouds only on slide 1 */}
          {s.showClouds && (
            <>
              <img
                alt=""
                className="absolute left-0 top-0 pointer-events-none hidden sm:block"
                src={cloud1}
                data-aos="fade-right"
                data-aos-once="false"
                data-aos-duration="1800"
                data-aos-offset="50"
              />
              <img
                alt=""
                className="absolute right-0 top-0 pointer-events-none hidden sm:block"
                src={cloud2}
                data-aos="fade-left"
                data-aos-once="false"
                data-aos-duration="1800"
                data-aos-offset="50"
              />
            </>
          )}

          {/* down arrow */}
          <div className="bg-[#17271F]/20 md:w-[50px] md:h-[50px] h-8 w-8 rounded-full flex items-center justify-center absolute md:bottom-[15px] bottom-2 left-1/2 -translate-x-1/2 z-[2]">
            <img src={arrowh} className="animate-bounce mt-[4px] w-[10px]" alt="" />
          </div>

          {/* shared text */}
          <div className="grid grid-cols-12 items-center relative z-[1]">
            <div className="col-span-12">
              <div className="md:h-[650px] h-[330px] flex flex-col md:items-center md:justify-center md:-translate-y-[60px]">
                <span
                  className="text-white md:text-[72px] text-[34px] leading-[42px] md:leading-[80px] outfit-bold block text-center mb-5"
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="1800"
                  data-aos-offset="200"
                >
                  The future of real estate{" "}
                  <span className="md:block">is on-chain</span>
                </span>
                <p
                  className="text-white text-center md:text-[20px] text-base md:leading-[26px] mb-0 font-normal"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-offset="200"
                >
                  Fully backed by Real World Assets, now everyone can own real
                  estate with TRL.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* dots */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-[3]">
      {heroSlides.map((_, i) => (
        <button
          key={i}
          onClick={() => heroGoTo(i)}
          className={`h-2.5 w-2.5 rounded-full transition-opacity ${heroIdx === i ? "opacity-100 bg-white" : "opacity-50 bg-white/70"}`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  </div>
</div>

      </div>

      {/* text section */}
      <div
        className="md:pt-[120px] sm:pt-16 pt-20 md:pb-[113px] sm:pb-20 pb-10 px-3 "
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <span className="block max-w-[991px] mx-auto">
                <TextAnimation />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Logo Slider */}
      <div className="max-w-full mx-auto">
        <LogoSlider />
      </div>
      {/* The TRL Ecosystem section */}
      <div className="md:block  md:pt-[152px] pt-[100px] hidden">
        {/* show section */}
        <div className="max-w-full md:block hidden mx-auto ">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <span className="orange-text3 orange-text2 md:mb-14 mb-8 md:text-[72px] md:leading-[80px] text-[34px] leading-[48px] outfit-bold block">
                The TRL Ecosystem
              </span>
            </div>
          </div>
          <div className="relative w-full flex">
            {/* Left Button */}
            <div
              className={`${
                leftWidth === 0
                  ? "block"
                  : leftWidth === 100
                  ? "hidden"
                  : "hidden"
              }`}
            >
              <div className="ml-[-104px] z-[44] translate-x-[105%] sticky top-0">
                <div className="" onClick={leftClick}>
                  <div className="stycky-buttonOn-ecosystem left-ecosystem-st translate-x-[-50px] hover:translate-x-[-10px] cursor-pointer transition-all duration-300 [&:hover_.sty-arrow]:rotate-[180deg] [&:hover_span]:opacity-100 ">
                    <div className="flex items-center gap-[20px] h-full justify-center pt-8">
                      <div className="span-ecosystem">
                        <span className="text-white text-lg font-semibold transition-all duration-700 block opacity-0">
                          For Investor
                        </span>
                      </div>
                      <img
                        src={slideLeftAarow}
                        alt="arrow"
                        className="w-[11px] sty-arrow transition-all duration-500"
                      />
                      {/* <img src={slideRightAarow} alt="arrow" className="w-[11px]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Center Content */}
            <div className="w-full overflow-hidden">
              <div className="container  ">
                <div
                  className={`left-section  ${
                    rightWidth === 0
                      ? "left-translate-active-ct"
                      : rightWidth === 65
                      ? "hover-left-translate"
                      : ""
                  }`}
                  style={{
                    width: `${leftWidth}%`,
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    transition: "width 0.3s ease",
                  }}
                  onClick={expandLeft}
                  onMouseEnter={handleHoverLeft}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    // src={investbgNew}
                    className={`absolute left-0 top-0 w-full opacity-[0.5] object-cover ${
                      leftWidth === 0 ? "" : ""
                    }`}
                    alt=""
                  />
                  <img
                    alt=""
                    src={slideLeftAarow}
                    className={`absolute left-[20px] top-[55%] z-50 ${
                      leftWidth === 0 ? "block" : "hidden"
                    }`}
                  />

                  <div
                    className={` ticker-content left-rot-skew-section absolute moving-image pt-2 outfit-bold left-[-4px] bottom-[0px] ${
                      leftWidth === 0 ? "" : "block"
                    }`}
                  >
                    {/* Scroll */}
                    <div className="overflow-hidden">
                      <div className="w-full scroll-skew-left">
                        <div class="wrapper">
                          <div class="marquee">
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                              </div>
                            </p>
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[128px] left-span-star-vbe">
                                  FOR INVESTOR
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Scroll */}
                  </div>

                  <div className="flex w-full lg:pr-[100px] pr-[50px]">
                    <div className="left-trans-x">
                      <div className="2xl:w-[595px] xl:w-[500px] lg:w-[450px] md:w-[330px] lg:pl-20 pl-10 pt-[148px] relative z-10">
                        <div className="w-full min-h-[440px]">
                          <span
                            className={`block xl:text-5xl text-4xl font-semibold text-white font-Outfit ${
                              leftWidth === 0 ? "hidden" : "block"
                            }`}
                          >
                            Invest in properties globally without getting locked
                            in (or out)
                          </span>
                          <span
                            className={`block md:mt-8 text-white text-base outfit-regular ${
                              leftWidth === 0 ? "hidden" : "block"
                            }`}
                          >
                            Buy a fraction of a portfolio of properties, earn
                            instant real-time yields, and trade easily in our
                            highly liquid marketplace.
                          </span>
                        </div>
                        {isDisplay.left && (
                          <div className="mt-auto w-fit text-center">
                            <div className="overflow-hidden h-[15px]  mb-5">
                              <span className="block bg-white w-[2px] rounded-sm mx-auto line-ani"></span>
                            </div>
                            <span className="block text-sm text-white font-normal">
                              Explore
                            </span>
                          </div>
                        )}

                        {!(rightWidth === 100 || leftWidth === 100) ? (
                          <img
                            alt=""
                            className="pointer-events-none hide-show-left-sec"
                            src={iconArrowRight}
                          />
                        ) : null}
                      </div>
                    </div>

                    {isDisplay.left && (
                      <div className="pr-[50px] w-full flex-1 flex flex-col justify-end items-end h-[736px]">
                        <img
                          alt=""
                          className="w-full max-w-[689px] object-contain "
                          src={leftBild}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  // className={`right-section  ${
                  //   rightWidth === 95 ? "right-translate-active-ct" : ""
                  // }`}
                  className={`right-section  ${
                    leftWidth === 0
                      ? "right-translate-active-ct"
                      : leftWidth === 65
                      ? "hover-right-translate"
                      : ""
                  }`}
                  style={{
                    width: `${rightWidth}%`,
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    transition: "width 0.3s ease",
                  }}
                  onClick={expandRight}
                  onMouseEnter={handleHoverRight}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <span className="right-ticker-before absolute bottom-[3px] left-0 bg-[#D2F1FC] w-6 h-[50px] block"></span> */}
                  <div
                    className={`right-ticker-before ticker-content2 left-rot-skew-section absolute moving-image pt-2 outfit-bold left-0px bottom-[0px] ${
                      leftWidth === 0 ? "" : "block"
                    }`}
                  >
                    {/* Scroll */}
                    <div className="overflow-hidden ">
                      <div className="w-full scroll-skew-left ">
                        <div class="wrapper">
                          <div class="marquee">
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                              </div>
                            </p>
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[128px] span-star-vbe">
                                  FOR CONSUMER
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Scroll */}
                  </div>
                  <img
                    alt=""
                    src={slideLeftAarow}
                    className={`absolute left-[0px] rotate-180 top-[45%] xgxggdg  ${
                      rightWidth === 0 ? "block" : "hidden"
                    }`}
                  />
                  <div className="flex w-full">
                    <div className="right-trans-x">
                      <div className="xl:w-[595px] lg:w-[400px] w-[350px] lg:pl-20 pl-10 pt-[148px] relative z-10 experience-add-trans">
                        <div className="min-h-[440px]">
                          <span
                            className={`block xl:text-5xl text-4xl  font-semibold text-white font-Outfit ${
                              rightWidth === 0 ? "hidden" : "block"
                            }`}
                          >
                            Experience global living without boundaries
                          </span>
                          <span
                            className={`block md:mt-8 text-white text-base outfit-regular ${
                              rightWidth === 0 ? "hidden" : "block"
                            }`}
                          >
                            Live flexibly anywhere in the world with our
                            pioneering home subscription service and seamless
                            access to global rental and home ownership
                            opportunities.
                          </span>
                        </div>
                        {isDisplay.right && (
                          <div className="mt-auto w-fit text-center">
                            <div className="overflow-hidden h-[15px]  mb-5">
                              <span className="block bg-white w-[2px] rounded-sm mx-auto line-ani"></span>
                            </div>
                            <span className="block text-sm text-white font-normal">
                              Explore
                            </span>
                          </div>
                        )}
                        {!isDisplay.right && (
                          <img
                            alt=""
                            className=" pointer-events-none"
                            src={iconArrowRight}
                          />
                        )}
                      </div>
                    </div>
                    {isDisplay.right && (
                      <div className="w-full flex-1 flex justify-end relative z-20">
                        <img
                          alt=""
                          className="w-full max-w-[689px] object-contain"
                          src={rightUser}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Deshktop Left Data */}
              <div
                className={`w-full pt-[150px] hidden opacity-0 ${
                  leftWidth === 100 ? "!block show-left-co-keyfram" : ""
                }`}
              >
                <div className="md:pt-[0px] pt-[60px] md:pb-[120px] pb-6 px-4">
                  <ExperienceSlider />
                </div>
                <HowToInvest />
                <BeginInvesting />
              </div>
              {/* Deshktop Live right Data */}
              <div
                className={`opacity-0 hidden ${
                  rightWidth === 100 ? "!block show-right-co-keyfram" : ""
                }`}
              >
                <TheWorldFirst />
                <GlobalNetwork />
                <YourJourneyGlobal />
                <OnePowerfulPlatform />
              </div>
            </div>
            {/* Right button */}
            <div
              className={` ${
                rightWidth === 0
                  ? "block w-0"
                  : rightWidth === 100
                  ? "hidden w-0"
                  : "hidden w-0"
              }`}
            >
              <div className="z-[34]  sticky top-0">
                <div className="" onClick={rightClick}>
                  <div className="stycky-buttonOn-ecosystem right-ecosystem-st  cursor-pointer transition-all duration-300 [&:hover_.sty-arrow]:rotate-[180deg] [&:hover_span]:opacity-100 ">
                    <div className="flex items-center gap-[20px] h-full justify-center pb-[130px]">
                      <img
                        src={slideRightAarow}
                        alt="arrow"
                        className="w-[11px] sty-arrow transition-all duration-500 right-block-w-img"
                      />
                      <div className="span-ecosystem scale-[-1]">
                        <span className="text-white text-lg font-semibold transition-all duration-700 block opacity-0">
                          For Consumer
                        </span>
                      </div>
                      {/* <img src={slideRightAarow} alt="arrow" className="w-[11px]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Data */}
      <div className="md:hidden block pb-10 overflow-hidden">
        <span className="text-center px-4 orange-text2 md:mb-14 mb-8 md:text-[72px] md:leading-[80px] text-[34px] leading-[48px] outfit-bold block orange-text3">
          The TRL Ecosystem
        </span>
        <div>
          {/* defutl Top */}
          {!forLeft && !forRight && (
            <>
              <div onClick={() => setForLeft(true)}>
                <div className="mobile-left-content-ct w-full pt-11">
                  <div className="">
                    <div className="px-6 ">
                      <h2 className="text-[28px] leading-[36px] text-white font-semibold mb-3">
                        Invest in properties globally without getting locked in
                        (or out)
                      </h2>
                      <span className="block text-base text-[#F6F6F2]">
                        Buy a fraction of a portfolio of properties, earn
                        instant real-time yields, and trade easily in our highly
                        liquid marketplace.
                      </span>
                      <div className="my-[44px]">
                        <img
                          alt=""
                          className="pointer-events-none"
                          src={iconArrowRight}
                        />
                      </div>
                    </div>
                    <div className="mobile-title-liner-eco mobile-keFrame-run">
                      {/* Scroll */}
                      <div
                        className="w-full bg-[#FDC2A3] overflow-hidden !translate-y-[-20px]  
                  shadow-[0px_2.013px_5.033px_0px_rgba(238,53,56,0.20)] opacity-50"
                      >
                        <div class="wrapper">
                          <div class="marquee">
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                              </div>
                            </p>
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                                  FOR INVESTOR
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Scroll */}
                    </div>
                  </div>
                </div>
              </div>
              {/* defutl Bottom */}
              <div onClick={() => setForRight(true)}>
                <div className="mobile-right-content-ct w-full pt-11 ">
                  <div className="">
                    <div className="px-6 ">
                      <h2 className="text-[28px] leading-[36px] text-white font-semibold mb-3">
                        Experience global living without boundaries
                      </h2>
                      <span className="block text-base text-[#F6F6F2]">
                        Live flexibly anywhere in the world with our pioneering
                        home subscription service and seamless access to global
                        rental and homeownership opportunitie
                      </span>
                      <div className="my-[44px]">
                        <img
                          alt=""
                          className="pointer-events-none"
                          src={iconArrowRight}
                        />
                      </div>
                    </div>
                    <div className="mobile-title-liner-eco mobile-keFrame-run">
                      {/* Scroll */}
                      <div className="w-full bg-[#D2F1FC] overflow-hidden shadow-[0px_2.033px_5.082px_0px_rgba(20,56,84,0.20)] !translate-y-[-20px] opacity-50">
                        <div class="wrapper">
                          <div class="marquee">
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                              </div>
                            </p>
                            <p className="">
                              <div className="flex items-center">
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                                <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                                  FOR CONSUMER
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Scroll */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* Left slide */}
        <div
          className={` ${isConsumer ? "show-left-content !block" : ""} ${
            forLeft ? "!block" : "hidden"
          }`}
        >
          <div
            ref={mobileLeftDivRef}
            className={` [&.investProperties_.showBtnConsumer]:pointer-events-auto [&.investProperties_.showBtnConsumer]:!opacity-100 
               ${isActive ? "investProperties" : " "}              
              ${forLeft ? "!block" : "hidden"}`}
          >
            <div className="mobile-left-content-ct w-full pt-11 ">
              <div className="">
                <div className="px-6 ">
                  <h2 className="text-[28px] leading-[36px] text-white font-semibold mb-3">
                    Invest in properties globally without getting locked in (or
                    out)
                  </h2>
                  <span className="block text-base text-[#F6F6F2]">
                    Buy a fraction of a portfolio of properties, earn instant
                    real-time yields, and trade easily in our highly liquid
                    marketplace.
                  </span>
                </div>
                <img
                  alt=""
                  className="w-full translate-y-[23px]"
                  src={leftBild}
                />
                <div className="mobile-title-liner-eco">
                  {/* Scroll */}
                  <div
                    className="w-full bg-[#FDC2A3] overflow-hidden translate-y-[18px] 
                  shadow-[0px_2.013px_5.033px_0px_rgba(238,53,56,0.20)]"
                  >
                    <div class="wrapper">
                      <div class="marquee">
                        <p className="">
                          <div className="flex items-center">
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                          </div>
                        </p>
                        <p className="">
                          <div className="flex items-center">
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(243,108,36,0.70)]">
                              FOR INVESTOR
                            </span>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Scroll */}
                </div>
              </div>
            </div>
            <div className="opacity-0 pointer-events-none showBtnConsumer transition-all duration-300">
              <div
                onClick={() => {
                  setForLeft(false);
                  setForRight(true);
                }}
                className="bg-[#2C729B] py-5 px-4 flex items-center justify-between w-full fixed left-0 right-0 bottom-0 z-[33]"
              >
                <span className={`block text-lg font-bold text-white`}>
                  For consumer
                </span>
                <img
                  alt=""
                  className="cursor-pointer w-5"
                  src={iconArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right slide */}
        <div
          ref={mobileDivRef}
          className={` [&.investProperties_.showBtninvestor-hide]:pointer-events-auto [&.investProperties_.showBtninvestor-hide]:opacity-100 ${
            isActive1 ? "investProperties" : "hidden"
          } ${forRight ? "!block" : "hidden"}`}
        >
          <div
            className={` ${isConsumer ? "show-invester-content !block" : ""} ${
              forRight ? "!block" : "hidden"
            }`}
          >
            <div className="mobile-right-content-ct w-full pt-11 ">
              <div className="">
                <div className="px-6 ">
                  <h2 className="text-[28px] leading-[36px] text-white font-semibold mb-3">
                    Experience global living without boundaries
                  </h2>
                  <span className="block text-base text-[#F6F6F2]">
                    Live flexibly anywhere in the world with our pioneering home
                    subscription service and seamless access to global rental
                    and homeownership opportunitie
                  </span>
                </div>
                <img alt="" className="w-full" src={rightUser} />
                <div className="mobile-title-liner-eco">
                  {/* Scroll */}
                  <div className="w-full bg-[#D2F1FC] overflow-hidden translate-y-[18px] shadow-[0px_2.033px_5.082px_0px_rgba(20,56,84,0.20)]">
                    <div class="wrapper">
                      <div class="marquee">
                        <p className="">
                          <div className="flex items-center">
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                          </div>
                        </p>
                        <p className="">
                          <div className="flex items-center">
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                            <span className="block mr-[50px] text-xs mt-2 font-bold text-[rgba(8,138,181,0.70)]">
                              FOR CONSUMER
                            </span>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scroll */}
              </div>
            </div>

            <div class="showBtninvestor-hide opacity-0 pointer-events-none">
              <div
                // onClick={() => setIsConsumer(false)}
                onClick={() => {
                  setForLeft(true);
                  setForRight(false);
                }}
                className="bg-[#FF514D] py-5 px-4 flex items-center justify-between w-full fixed left-0 right-0 bottom-0 z-[33]"
              >
                <span className="block text-lg font-bold text-white">
                  For investor
                </span>
                <img
                  alt=""
                  className="cursor-pointer w-5"
                  src={iconArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile Left Content */}
      <div className={`w-full pt-10 ${forLeft ? "!block" : "hidden"}`}>
        <div className="md:pt-[0px] pt-[60px] md:pb-[120px] pb-6 px-4">
          <ExperienceSlider />
        </div>
        <HowToInvest />
        <BeginInvesting />
      </div>

      {/* mobile right Content */}
      <div className={`w-full ${forRight ? "!block" : "hidden"}`}>
        <TheWorldFirst />
        <GlobalNetwork />
        <YourJourneyGlobal />
        <OnePowerfulPlatform />
      </div>

      {/* Unlock real world value with $TRLCO section */}
      <div
        className={` md:mt-[234px] mt-[140px] cs-accordion relative md:pt-[160px] pt-[121px]  ${
          isActive ? "add-translate-world" : ""
        }`}
        style={{ backgroundImage: `url(${bgUsp})` }}
        ref={targetDivRef}
      >
        <img
          alt=""
          src={shapeRuby}
          className="absolute left-[50%] translate-x-[-50%] top-[-20px] md:w-[340px] w-[250px]"
        />

        <div className="text-center absolute top-[-90px] left-2/4 translate-x-[-50%] z-20">
          <img
            alt=""
            src={emerald}
            className="md:w-[146px] md:h-[146px] w-[118px] h-[118px] value-logo z-20 transition-all duration-500"
          />
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex flex-col items-center md:gap-x-10">
            <div className="max-w-7xl mx-auto">
              <div className=" text-center px-5">
                <span className="text-[#17271F] text-[28px] md:text-[48px] md:leading-[52px] leading-[36px] md:mb-5 mb-5  outfit-bold block ">
                  Unlock real world value with $TRLCO
                </span>
                <span className="text-[#565656] text-[16px] outfit-regular max-w-[600px] mx-auto block">
                  $TRLCO is the main utility token powering the TRL 360
                  ecosystem. Earn and redeem $TRLCO for lifestyle privileges
                  like dining and experiences.
                </span>
              </div>
            </div>
            <div className="max-w-[1366px] mx-auto md:mt-[120px] mt-[102px] md:mb-[150px] mb-[135px] w-full overflow-hidden">
              {/* Scroll */}
              <div className="w-full">
                <div class="wrapper">
                  <div class="marquee world-trl-marquee">
                    <p className="">
                      <div className="flex items-center">
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                      </div>
                    </p>
                    <p className="">
                      <div className="flex items-center">
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                        <span className="block md:mr-[60px] mr-[44px] md:text-[32px] md:leading-[40px] text-[22px] leading-[28px] text-[#8A8A8A] outfit-regular">
                          {" "}
                          $TRLCO utility token
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              {/* Scroll */}
            </div>
            <div className="w-11 hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur dolores nulla laborum repellat doloremque vero unde,
              ex eius reprehenderit cum enim sit? Eius accusamus nemo quia natus
              dolorem quisquam quasi!
            </div>
            {/* ref={elementRef} */}
            <div className="px-5 overflow-hidden how-this-works-block md:pb-[136px] pb-[80px]">
              <div className="max-w-[1000px] mx-auto w-full show-how-work-section">
                <div className="flex md:gap-[50px] gap-[30px] md:flex-row flex-col">
                  <div className="md:w-[390px] w-full">
                    <img alt="" className="w-full" src={redeemImg} />
                  </div>
                  <div className="w-full flex-1">
                    <h5 className="md:text-[24px] text-[28px] leading-[normal] font-bold md:outfit-semibold md:mb-8 mb-9">
                      How this works
                    </h5>
                    <Accordion>
                      <Accordion.Panel className="">
                        <Accordion.Title className="transition-opacity duration-800 animate-fadeIn !px-0 !border-0 !my-0 [&_h2]:!text-[#17271F] [&_svg]:hidden [&.text-gray-500_h2]:!text-[#E0E0E0]">
                          <span className="md:text-[40px] text-[24px] outfit-bold md:leading-[48px] ">
                            Earn & redeem
                          </span>
                        </Accordion.Title>
                        <Accordion.Content className="transition-opacity duration-800 animate-fadeIn !px-0 md:pb-14">
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              {/* <img alt="" className="w-[24px]" src={iconEarn} /> */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.7175 0.472658C11.4821 -0.0221358 12.5188 -0.0221358 13.2834 0.472658L14.0295 0.892611C14.0733 0.930052 14.1272 0.944305 14.1658 0.950739C14.2092 0.957977 14.2513 0.957969 14.2745 0.957965L15.1207 0.958079L15.1254 0.957852C16.0739 0.912682 16.9725 1.40965 17.3761 2.26173L17.8085 3.03064L17.9705 3.1926L18.7348 3.5748C19.5914 4.02615 20.0861 4.92796 20.0412 5.82714V6.72531C20.0412 6.74855 20.0411 6.7906 20.0484 6.83403C20.0549 6.873 20.0693 6.92756 20.1076 6.97164L20.525 7.66748C21.0216 8.48014 21.0215 9.47222 20.525 10.2849L20.1065 11.0289C20.0691 11.0728 20.0548 11.1267 20.0484 11.1653C20.0411 11.2087 20.0412 11.2508 20.0412 11.274L20.041 12.1202L20.0413 12.125C20.0863 13.0707 19.5918 13.9264 18.7339 14.378L17.9687 14.8085L17.8068 14.9704L17.4251 15.7338C16.9723 16.5473 16.0687 17.0862 15.1726 17.0413H14.2745C14.2513 17.0413 14.2092 17.0413 14.1658 17.0486C14.1268 17.0551 14.0723 17.0695 14.0282 17.1078L13.3325 17.5253C12.5199 18.0219 11.5279 18.0219 10.7154 17.5252L9.97144 17.1067C9.92759 17.0693 9.87368 17.055 9.83508 17.0486C9.79165 17.0413 9.74961 17.0413 9.72637 17.0413L8.88023 17.0412L8.87547 17.0415C7.93244 17.0864 7.07429 16.5468 6.62136 15.7315L6.19235 14.9687L6.03216 14.8085L5.269 14.3791C4.45373 13.9262 3.91483 13.0682 3.95973 12.125L3.95973 11.274C3.95974 11.2508 3.95975 11.2087 3.95251 11.1653C3.94608 11.1267 3.93183 11.0728 3.89439 11.0289L3.47786 10.2879L3.47449 10.2827C2.97975 9.51804 2.97991 8.48138 3.47465 7.71669L3.89439 6.97039C3.93183 6.92653 3.94608 6.87263 3.95251 6.83403C3.95975 6.7906 3.95974 6.74856 3.95973 6.72532L3.95985 5.87907L3.95962 5.87431C3.91466 4.92998 4.45467 4.02663 5.26712 3.57429L6.0304 3.1926L6.19235 3.03064L6.6214 2.26787L6.6227 2.26539C7.07426 1.40733 7.92989 0.912932 8.87547 0.957965L9.72638 0.957965C9.74962 0.957969 9.79166 0.957977 9.83508 0.950739C9.87368 0.944305 9.92758 0.930052 9.97144 0.892612L10.7123 0.476026L10.7175 0.472658ZM12.971 2.65157L12.2247 2.23171C12.0954 2.11248 11.9055 2.11248 11.7762 2.23171L11.0363 2.64761L11.03 2.65181C10.6299 2.91857 10.1357 3.01042 9.67788 3.01042H8.83331C8.68125 3.01042 8.48435 3.06105 8.41336 3.25682L7.99516 4.00039C7.76963 4.4064 7.40726 4.76861 7.0013 4.99417L6.25829 5.41216C6.06772 5.4813 6.01192 5.67106 6.01192 5.78521L6.01142 6.67681L6.01242 6.68676C6.05679 7.13052 5.92324 7.62373 5.65311 8.02897L5.2333 8.7754C5.11409 8.90474 5.11409 9.09457 5.2333 9.22392L5.64915 9.96388L5.65335 9.97018C5.92007 10.3703 6.01192 10.8647 6.01192 11.3225V12.1672C6.01192 12.3192 6.06253 12.5162 6.25829 12.5872L7.00176 13.0054C7.40772 13.231 7.76989 13.5934 7.99542 13.9994L8.41336 14.7425C8.48435 14.9383 8.68125 14.9889 8.83331 14.9889L9.67788 14.9894L9.68783 14.9884C10.1315 14.944 10.6247 15.0776 11.0299 15.3477L11.7762 15.7676C11.9055 15.8868 12.0954 15.8868 12.2247 15.7676L12.9646 15.3517L12.9709 15.3475C13.371 15.0807 13.8652 14.9889 14.323 14.9889H15.2145C15.3287 14.9889 15.5184 14.9331 15.5875 14.7425L16.0057 13.9989C16.2313 13.5929 16.5936 13.2307 16.9996 13.0051L17.7426 12.5872C17.9384 12.5162 17.989 12.3192 17.989 12.1672V11.3225C17.989 10.8647 18.0811 10.3705 18.3478 9.97034L18.7676 9.22392C18.8868 9.09457 18.8868 8.90474 18.7676 8.7754L18.3517 8.03544L18.3475 8.02913C18.0808 7.62899 17.989 7.13465 17.989 6.67681V5.78521C17.989 5.67106 17.9332 5.4813 17.7426 5.41216L16.9991 4.99391C16.5932 4.76835 16.231 4.40594 16.0055 3.99992L15.5875 3.25682C15.5184 3.06623 15.3287 3.01042 15.2145 3.01042H14.323C13.8652 3.01042 13.3711 2.91833 12.971 2.65157Z"
                                  fill="#17271F"
                                />
                                <path
                                  d="M3.06164 20.5988L4.98538 16L5.21998 16.4223C5.92379 17.7363 7.37833 18.5809 8.87979 18.534H9.44283L9.86512 18.8156C10.2405 19.0033 10.6628 19.191 11.085 19.2848L9.30207 23.4613C9.20823 23.6959 8.97363 23.8836 8.6921 23.8836C8.41058 23.9305 8.12906 23.7897 7.9883 23.5551L6.48684 21.2557L3.85929 21.6311C3.57777 21.6781 3.29624 21.5842 3.15548 21.3496C2.9678 21.1619 2.9678 20.8803 3.06164 20.5988ZM14.6979 23.4613L12.9619 19.2848C13.3372 19.191 13.7595 19.0502 14.1349 18.8156L14.6041 18.534H15.1202C16.6217 18.5809 18.0762 17.7363 18.8269 16.4223L19.0146 16L20.9384 20.5988C21.0322 20.8803 21.0322 21.1619 20.8445 21.3496C20.7038 21.5842 20.4222 21.6781 20.1407 21.6311L17.5132 21.2557L16.0117 23.5551C15.8709 23.7897 15.5894 23.9305 15.3079 23.8836C15.0264 23.8836 14.7918 23.6959 14.6979 23.4613Z"
                                  fill="#FF4A3F"
                                />
                                <path
                                  d="M12.9762 5.22581V5.73387C13.2302 5.77016 13.4842 5.84274 13.7383 5.91532C14.1012 6.02419 14.3552 6.42339 14.2463 6.78629C14.1375 7.18548 13.7383 7.40323 13.3391 7.33065C12.9399 7.22177 12.577 7.1129 12.2141 7.1129C11.9237 7.1129 11.6334 7.18548 11.452 7.29435C11.2705 7.40323 11.1979 7.5121 11.1979 7.65726C11.1979 7.69355 11.2342 7.76613 11.4157 7.875C11.6334 8.02016 11.96 8.12903 12.4318 8.27419H12.4681C12.8673 8.38306 13.3754 8.56452 13.8108 8.81855C14.2826 9.10887 14.6818 9.58065 14.6818 10.3427C14.7181 11.1048 14.3189 11.6492 13.8108 11.9758C13.5205 12.121 13.2302 12.2298 12.9399 12.3024V12.7742C12.9399 13.1734 12.6133 13.5 12.2141 13.5C11.8149 13.5 11.4883 13.1734 11.4883 12.7742V12.2661C11.1254 12.1573 10.7987 12.0484 10.4721 11.9395C10.3996 11.9032 10.327 11.9032 10.2544 11.8669C9.89149 11.7581 9.67375 11.3226 9.81891 10.9597C9.92778 10.5605 10.327 10.379 10.7262 10.4879C10.7987 10.5242 10.9076 10.5605 10.9802 10.5968C11.4883 10.7419 11.8512 10.8871 12.2504 10.8871C12.577 10.8871 12.8673 10.8508 13.0487 10.7056C13.1939 10.6331 13.2665 10.5242 13.2302 10.3427C13.2302 10.2339 13.2302 10.1613 13.0487 10.0524C12.7947 9.90726 12.4681 9.79839 12.0326 9.65323H11.96C11.5608 9.50806 11.0528 9.3629 10.6536 9.14516C10.2181 8.85484 9.78262 8.38306 9.78262 7.65726C9.74633 6.89516 10.1818 6.35081 10.6899 6.06048C10.9439 5.91532 11.2342 5.80645 11.5246 5.73387V5.22581C11.5246 4.82661 11.8512 4.5 12.2504 4.5C12.6496 4.5 12.9762 4.82661 12.9762 5.22581Z"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base text-[#565656] outfit-regular w-full flex-1">
                              Earn $TRLCO and other rewards-based activities
                              within the TRL ecosystem.
                            </div>
                          </div>
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M10.9258 2.93359L12 4.69531L13.0312 2.93359C13.7188 1.73047 14.9648 1 16.3398 1H16.4688C18.5312 1 20.25 2.71875 20.25 4.78125C20.25 5.42578 20.0781 5.98438 19.8203 6.5H20.9375C22.0547 6.5 23 7.44531 23 8.5625V11.3125C23 12.2148 22.3984 12.9883 21.625 13.2891V13.375V20.25C21.625 21.7969 20.3789 23 18.875 23H5.125C3.57812 23 2.375 21.7969 2.375 20.25V13.375V13.2891C1.55859 12.9883 1 12.2148 1 11.3125V8.5625C1 7.44531 1.90234 6.5 3.0625 6.5H4.13672C3.87891 5.98438 3.75 5.42578 3.75 4.78125C3.75 2.71875 5.42578 1 7.53125 1H7.61719C8.99219 1 10.2383 1.73047 10.9258 2.93359ZM20.9375 8.5625H16.4688H13.375V11.3125H19.5625H20.9375V8.5625ZM10.625 8.5625H7.53125H3.0625V11.3125H4.4375H10.625V8.5625ZM10.625 13.375H4.4375V20.25C4.4375 20.6367 4.73828 20.9375 5.125 20.9375H10.625V13.375ZM13.375 20.9375H18.875C19.2188 20.9375 19.5625 20.6367 19.5625 20.25V13.375H13.375V20.9375ZM16.4688 6.5C17.4141 6.5 18.1875 5.76953 18.1875 4.78125C18.1875 3.83594 17.4141 3.0625 16.4688 3.0625H16.3398C15.6953 3.0625 15.1367 3.40625 14.793 3.96484L13.2891 6.5H13.375H16.4688ZM10.625 6.5H10.668L9.16406 3.96484C8.86328 3.40625 8.26172 3.0625 7.61719 3.0625H7.53125C6.54297 3.0625 5.8125 3.83594 5.8125 4.78125C5.8125 5.76953 6.54297 6.5 7.53125 6.5H10.625Z"
                                  fill="#17271F"
                                />
                                <rect
                                  x="10"
                                  y="6.50391"
                                  width="4"
                                  height="16.4961"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base  text-[#565656] outfit-regular w-full flex-1">
                              Redeem $TRLCO for tangible benefits like monthly
                              subscription offsets, rent-to-own products, and
                              more via our redemption store.
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel className="">
                        <Accordion.Title className="transition-opacity duration-800 animate-fadeIn !px-0 !border-0 !mt-5 [&_h2]:!text-[#17271F] [&_svg]:hidden [&.text-gray-500_h2]:!text-[#E0E0E0]">
                          <span className="md:text-[40px] text-[24px] outfit-bold md:leading-[48px] !mb-0 ">
                            Utility & access
                          </span>
                        </Accordion.Title>
                        <Accordion.Content className="animate-fadeIn !px-0 md:pb-14">
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.0576 0.898438C5.92809 0.898438 0.957489 5.86782 0.957489 11.9888C0.957489 12.8542 1.05315 13.706 1.24694 14.5252C0.833111 14.9959 0.582031 15.6134 0.582031 16.2894C0.582031 17.7656 1.7787 18.9623 3.25487 18.9623C4.73103 18.9623 5.9277 17.7656 5.9277 16.2894C5.9277 14.8133 4.73103 13.6166 3.25487 13.6166C3.18532 13.6166 3.11639 13.6193 3.04815 13.6245C2.95315 13.0967 2.90507 12.5492 2.90507 11.9888C2.90507 6.94466 7.0025 2.84602 12.0576 2.84602C13.8337 2.84602 15.4892 3.34677 16.879 4.22083C17.3342 4.50715 17.9354 4.37021 18.2217 3.91495C18.5081 3.45969 18.3711 2.85852 17.9158 2.5722C16.2182 1.50449 14.2038 0.898438 12.0576 0.898438ZM2.52962 16.2894C2.52962 15.8889 2.85432 15.5642 3.25487 15.5642C3.65541 15.5642 3.98011 15.8889 3.98011 16.2894C3.98011 16.69 3.65541 17.0147 3.25487 17.0147C2.85432 17.0147 2.52962 16.69 2.52962 16.2894Z"
                                  fill="#17271F"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.8938 4.97633C19.4176 4.97633 18.221 6.17299 18.221 7.64916C18.221 9.12533 19.4176 10.322 20.8938 10.322C20.9474 10.322 21.0007 10.3204 21.0535 10.3173C21.1553 10.8637 21.2099 11.4257 21.2099 11.9984C21.2099 17.0528 17.1118 21.1509 12.0574 21.1509C10.2825 21.1509 8.63395 20.6507 7.22992 19.782C6.77258 19.499 6.17243 19.6403 5.88945 20.0977C5.60647 20.555 5.74782 21.1552 6.20516 21.4382C7.90795 22.4918 9.90991 23.0984 12.0574 23.0984C18.1875 23.0984 23.1575 18.1284 23.1575 11.9984C23.1575 11.1227 23.0526 10.2713 22.8626 9.45695C23.2996 8.98117 23.5666 8.34625 23.5666 7.64916C23.5666 6.17299 22.37 4.97633 20.8938 4.97633ZM20.1685 7.64916C20.1685 7.24862 20.4933 6.92391 20.8938 6.92391C21.2943 6.92391 21.619 7.24862 21.619 7.64916C21.619 8.0497 21.2943 8.37441 20.8938 8.37441C20.4933 8.37441 20.1685 8.0497 20.1685 7.64916Z"
                                  fill="#17271F"
                                />
                                <path
                                  d="M12.7921 7.85938V8.46094C13.0929 8.50391 13.3937 8.58984 13.6945 8.67578C14.1241 8.80469 14.4249 9.27734 14.296 9.70703C14.1671 10.1797 13.6945 10.4375 13.2218 10.3516C12.7491 10.2227 12.3195 10.0938 11.8898 10.0938C11.546 10.0938 11.2023 10.1797 10.9874 10.3086C10.7726 10.4375 10.6866 10.5664 10.6866 10.7383C10.6866 10.7812 10.7296 10.8672 10.9445 10.9961C11.2023 11.168 11.589 11.2969 12.1476 11.4688H12.1906C12.6632 11.5977 13.2648 11.8125 13.7804 12.1133C14.339 12.457 14.8116 13.0156 14.8116 13.918C14.8546 14.8203 14.382 15.4648 13.7804 15.8516C13.4366 16.0234 13.0929 16.1523 12.7491 16.2383V16.7969C12.7491 17.2695 12.3624 17.6562 11.8898 17.6562C11.4171 17.6562 11.0304 17.2695 11.0304 16.7969V16.1953C10.6007 16.0664 10.214 15.9375 9.82727 15.8086C9.74134 15.7656 9.6554 15.7656 9.56946 15.7227C9.13977 15.5938 8.88196 15.0781 9.05384 14.6484C9.18274 14.1758 9.6554 13.9609 10.1281 14.0898C10.214 14.1328 10.3429 14.1758 10.4288 14.2188C11.0304 14.3906 11.4601 14.5625 11.9327 14.5625C12.3195 14.5625 12.6632 14.5195 12.8781 14.3477C13.0499 14.2617 13.1359 14.1328 13.0929 13.918C13.0929 13.7891 13.0929 13.7031 12.8781 13.5742C12.5773 13.4023 12.1906 13.2734 11.6749 13.1016H11.589C11.1163 12.9297 10.5148 12.7578 10.0421 12.5C9.52649 12.1562 9.01087 11.5977 9.01087 10.7383C8.9679 9.83594 9.48352 9.19141 10.0851 8.84766C10.3859 8.67578 10.7296 8.54688 11.0734 8.46094V7.85938C11.0734 7.38672 11.4601 7 11.9327 7C12.4054 7 12.7921 7.38672 12.7921 7.85938Z"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base text-[#565656] outfit-regular w-full flex-1">
                              Use $TRLCO to pay for services such as home
                              cleaning and utilities.
                            </div>
                          </div>
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M20.9375 11.9785C20.9375 8.79883 19.2188 5.87695 16.4688 4.24414C13.6758 2.6543 10.2812 2.6543 7.53125 4.24414C4.73828 5.87695 3.0625 8.79883 3.0625 11.9785C3.0625 15.2012 4.73828 18.123 7.53125 19.7559C10.2812 21.3457 13.6758 21.3457 16.4688 19.7559C19.2188 18.123 20.9375 15.2012 20.9375 11.9785ZM1 11.9785C1 8.06836 3.0625 4.45898 6.5 2.48242C9.89453 0.505859 14.0625 0.505859 17.5 2.48242C20.8945 4.45898 23 8.06836 23 11.9785C23 15.9316 20.8945 19.541 17.5 21.5176C14.0625 23.4941 9.89453 23.4941 6.5 21.5176C3.0625 19.541 1 15.9316 1 11.9785Z"
                                  fill="#17271F"
                                />
                                <path
                                  d="M7.10156 13.4955C6.39844 12.7909 6 11.7843 6 10.7274V10.6016C6 8.84004 7.17188 7.33015 8.78906 7.05334C9.86719 6.85202 10.9453 7.22949 11.7188 8.03476L12 8.33674L12.2812 8.03476C13.0312 7.22949 14.1328 6.85202 15.1875 7.05334C16.8047 7.33015 18 8.84004 18 10.6016V10.7274C18 11.7843 17.5781 12.7909 16.875 13.4955L12.6328 17.7484C12.4688 17.9245 12.2344 18 12 18C11.7422 18 11.5078 17.9245 11.3438 17.7484L7.10156 13.4955Z"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base text-[#565656] outfit-regular w-full flex-1">
                              Enjoy future lifestyle activities supported by
                              $TRLCO, enhancing your living experience.
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel className="my-5">
                        <Accordion.Title className="transition-opacity duration-800 animate-fadeIn !px-0 !border-0 !mt-5 [&_h2]:!text-[#17271F] [&_svg]:hidden [&.text-gray-500_h2]:!text-[#E0E0E0]">
                          <span className="md:text-[40px] text-[24px] outfit-bold md:leading-[48px] !mb-0">
                            Community benefits
                          </span>
                        </Accordion.Title>
                        <Accordion.Content className="animate-fadeIn !px-0 md:pb-14">
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M3.0625 3.01786V17.9464C3.0625 18.5402 3.49219 18.9643 4.09375 18.9643H21.9688C22.5273 18.9643 23 19.4308 23 19.9821C23 20.5759 22.5273 21 21.9688 21H4.09375C2.375 21 1 19.6429 1 17.9464V3.01786C1 2.46652 1.42969 2 2.03125 2C2.58984 2 3.0625 2.46652 3.0625 3.01786Z"
                                  fill="#17271F"
                                />
                                <path
                                  d="M20.877 7.71763L14.9902 13.4855C14.6035 13.9096 13.959 13.9096 13.5723 13.4855L10.1777 10.135L6.7832 13.4855C6.35352 13.9096 5.70898 13.9096 5.32227 13.4855C4.89258 13.1038 4.89258 12.4676 5.32227 12.0859L9.44727 8.01451C9.61914 7.80246 9.87695 7.71763 10.1777 7.71763C10.4355 7.71763 10.6934 7.80246 10.9082 8.01451L14.3027 11.365L19.416 6.31808C19.8027 5.89397 20.4473 5.89397 20.877 6.31808C21.2637 6.69978 21.2637 7.33594 20.877 7.71763Z"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base  text-[#565656] outfit-regular w-full flex-1">
                              $TRLCO drives real value by enabling greater
                              financial independence and increasing cash flow.
                            </div>
                          </div>
                          <div className="flex flex-row gap-[18px] mt-6">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M16.5117 10.4102L16.7266 10.1953L18.7031 10.5391C18.7891 11.0117 18.875 11.4844 18.875 12C18.875 15.8242 15.7812 18.875 12 18.875C8.17578 18.875 5.125 15.8242 5.125 12C5.125 8.21875 8.17578 5.125 12 5.125C12.5156 5.125 12.9883 5.21094 13.4609 5.29688L13.8047 7.27344L13.5898 7.48828C13.0742 7.31641 12.5586 7.1875 12 7.1875C9.33594 7.1875 7.1875 9.37891 7.1875 12C7.1875 14.6641 9.33594 16.8125 12 16.8125C14.6211 16.8125 16.8125 14.6641 16.8125 12C16.8125 11.4414 16.6836 10.9258 16.5117 10.4102ZM20.6797 10.0664H20.7227L22.3555 8.39062C22.7852 9.50781 23 10.7539 23 12C23 18.1016 18.0586 23 12 23C5.89844 23 1 18.1016 1 12C1 5.94141 5.89844 1 12 1C13.2461 1 14.4922 1.21484 15.6094 1.64453L13.9336 3.27734C13.332 3.14844 12.6445 3.0625 12 3.0625C7.05859 3.0625 3.0625 7.10156 3.0625 12C3.0625 16.9414 7.05859 20.9375 11.957 20.9375C16.8984 20.9375 20.8945 16.9414 20.8945 12C20.8945 11.3555 20.8516 10.668 20.6797 10.0664Z"
                                  fill="#17271F"
                                />
                                <path
                                  d="M16.9492 8.88888L12.5898 13.2014C12.168 13.6701 11.4648 13.6701 11.043 13.2014C10.5742 12.7795 10.5742 12.0764 11.043 11.6076L15.3555 7.29513L14.9336 4.95138C14.8867 4.48263 15.0273 3.96701 15.3555 3.63888L17.7461 1.24826C18.168 0.82638 18.7773 0.967005 19.0117 1.48263L20.0898 4.15451L22.7617 5.23263C23.2773 5.46701 23.3711 6.12326 22.9961 6.49826L20.6055 8.88888C20.2773 9.217 19.7617 9.35763 19.293 9.31076L16.9492 8.88888Z"
                                  fill="#FF4A3F"
                                />
                              </svg>
                            </div>
                            <div className="text-base text-[#565656] outfit-regular w-full flex-1">
                              Token holders benefit from an integrated system
                              that supports their daily needs and long-term
                              goals.
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Experience the four pillars of TRL Living section */}
      <LivingSlider />
      {/* Backed by experienced Web 2 and Web 3 experts  */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className=" text-center px-4">
              <span className="text-[#17271F] md:text-[32px] text-[28px] md:leading-[40px] leading-[36px] mb-3 outfit-semibold block">
                Backed by experienced Web 2 and Web 3 experts
              </span>
              <span className="text-[#565656] text-base outfit-regular md:mb-12 mb-8 block">
                Our team has decades of leadership experience at market leaders
                in the blockchain, real estate, financial services, and gaming
                sectors.
              </span>
            </div>
            <div className="md:block hidden"></div>
            <div className="text-center max-w-[1003px] mx-auto relative before:content before:absolute before:right-0 before:h-full before:top-0 before:bottom-0 before:sm:w-[188px]  before:w-[105px] before:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] before:z-10 before:scale-x-[-1] after:content after:absolute after:left-0 after:h-full after:top-0 after:bottom-0 after:sm:w-[188px] after:w-[105px] after:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] after:z-10">
              {/* Scroll */}
              <div className="w-full overflow-hidden">
                <div class="wrapper">
                  <div class="marquee">
                    <p className="">
                      <div className="flex items-center">
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced1}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced2}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced3}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced4}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced5}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced6}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced7}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced8}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced9}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced10}
                          />
                        </span>
                      </div>
                    </p>
                    <p className="">
                      <div className="flex items-center">
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced1}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced2}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced3}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced4}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced5}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced6}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced7}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced8}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced9}
                          />
                        </span>
                        <span className="mr-12 w-[150px] flex item-center justify-center">
                          <img
                            alt=""
                            className="w-full object-contain"
                            src={experienced10}
                          />
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              {/* Scroll */}
            </div>
            <div className="w-full flex flex-col justify-center items-center px-4">
              <div className="text-center md:mt-[80px] mt-[50px] md:block hidden">
                <Link
                  to={`https://trl.world/`}
                  className="ct-button w-fit block"
                >
                  Invest Now
                </Link>
              </div>
              <div className="text-center mt-[50px] block md:hidden">
                <Link
                  to={`https://trl.world/`}
                  className="ct-button w-fit block"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insights from the team */}
      <div className="px-4 md:pt-[128px] pt-20 md:pb-[140px] pb-20 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="">
            <div className=" text-center">
              <span className="text-[#17271F] md:text-[48px] md:leading-[56px] text-[30px] leading-[34px] outfit-bold block md:mb-14 mb-8">
                Insights from the team
              </span>
            </div>
            <div className=" relative [&_.owl-dots]:!mt-8 before:pointer-events-none before:content before:absolute before:right-0 before:h-full before:top-0 before:bottom-0 before:sm:w-[188px]  before:w-[105px] before:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] before:z-10 before:scale-x-[-1] after:content after:absolute after:left-0 after:h-full after:top-0 after:bottom-0 after:sm:w-[188px] after:w-[105px] after:bg-[linear-gradient(90deg,#FFF_15%,rgba(255,255,255,0.00)_100%)] after:z-10 after:pointer-events-none md:before:block before:hidden md:after:block after:hidden ">
              <div className="custom-filter-img">
                <img
                  src={iconPrev}
                  onClick={handlePrev}
                  className="absolute left-0 md:left-[66px] cursor-pointer md:top-[50%] md:translate-y-[-50%] md:block hidden z-20  hover:translate-x-[-6%] w-12"
                  alt=""
                />
              </div>
              <div className="custom-filter-img">
                <img
                  src={iconNext}
                  onClick={handleNext}
                  className="absolute right-0 md:right-[90px] cursor-pointer md:top-[50%] md:translate-y-[-50%] md:block hidden z-20  hover:translate-x-[6%] w-12"
                  alt=""
                />
              </div>
              <OwlCarousel
                ref={carouselRef}
                className="owl-theme insightsfrom-slider"
                loop
                center={true}
                margin={10}
                nav={false}
                dots={false}
                items={1.3}
                responsive={{
                  0: {
                    items: 1,
                    dots: true,
                    autoHeight: true,
                  },
                  600: {
                    items: 1,
                    dots: true,
                    autoHeight: true,
                  },
                  991: {
                    items: 1,
                  },
                  1000: {
                    items: 1.3,
                  },
                }}
              >
                <div className="item">
                  <div className="grid grid-cols-11 items-center xl:px-9">
                    <div className="md:col-span-3 col-span-12 md:h-[440px] h-[300px] md:mb-0 mb-4 md:bg-transparent bg-[#17271F] md:rounded-none rounded-3xl overflow-hidden">
                      <Link
                        to={`https://www.youtube.com/watch?v=5j-YLqpqb-g&t=1s`}
                        className="relative"
                      >
                        <img
                          alt=""
                          className="h-full md:object-cover object-contain md:rounded-3xl"
                          src={videoThubmnail1}
                        />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-80 transition-all duration-500 hover:opacity-100">
                          <img
                            alt=""
                            className=" w-full h-full object-contain"
                            src={playIcon}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="md:col-span-8 col-span-12">
                      <div
                        className="md:m-4 md:p-10 p-4 bg-cover bg-no-repeat md:h-[440px] h-auto max-w-full md:max-w-[94%] relative flex flex-col justify-between sliderbg-size"
                        style={{ backgroundImage: `url(${bgTestimonials})` }}
                      >
                        <div>
                          <p className="lg:text-lg text-base">
                            <b>
                              Our mission is to pioneer and be the{" "}
                              <span className="underline decoration-solid inline-">
                                #1 all-inclusive RWA super-app ecosystem{" "}
                              </span>
                            </b>{" "}
                            that bridges the gap between Web 2.0 and Web 3.0
                            consumers, investors, and businesses enabling a
                            gateway for mass adoption. This ecosystem will
                            unlock the true potential of tokenization, offering
                            seamless, borderless, and accessible access to RWAs
                            starting with real estate to achieve amplified
                            yields and maximise utility. Beyond investment,
                            users can redeem tokens for benefits like free
                            dining, luxurious stays, and travel experiences - to
                            name a few.
                          </p>
                        </div>
                        <img
                          alt=""
                          className="md:max-w-[100px] sm:max-w-[85px] max-w-[50px] absolute right-[38px] md:bottom-0 bottom-[20px] comma-sm"
                          src={insightsQuote}
                        />
                        <div className="grid grid-cols-12">
                          <div className="md:col-span-5 col-span-9">
                            <div className="flex sm:flex-row flex-col sm:items-center gap-x-2 md:mt-0 mt-14">
                              <div>
                                <img
                                  alt=""
                                  src={clientFace1}
                                  className="sm:max-w-[65px] max-w-[40px] w-full"
                                />
                              </div>
                              <div>
                                <span className="block outfit-bold xl:text-xl sm:text-base text-sm">
                                  Adrian Gaffor
                                </span>
                                <span className="block text-[#565656] xl:text-xl sm:text-base text-sm">
                                  Co-founder & CEO
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="grid grid-cols-11 items-center xl:px-9">
                    <div className="md:col-span-3 col-span-12 md:h-[440px] h-[300px] md:mb-0 mb-4 md:bg-transparent bg-[#17271F] md:rounded-none rounded-3xl overflow-hidden">
                      <Link
                        to={``}
                        className="relative"
                      >
                        <img
                          alt=""
                          className="h-full md:object-cover object-contain md:rounded-3xl"
                          src={videoThubmnail2}
                        />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-80 transition-all duration-500 hover:opacity-100">
                          <img
                            alt=""
                            className=" w-full h-full object-contain"
                            src={playIcon}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="md:col-span-8 col-span-12">
                      <div
                        className="md:m-4 md:p-10 p-4 bg-cover bg-no-repeat md:h-[440px] h-auto max-w-full md:max-w-[94%] relative flex flex-col justify-between sliderbg-size"
                        style={{ backgroundImage: `url(${bgTestimonials})` }}
                      >
                        <div>
                          <p className="lg:text-lg text-base">
                            TRL's dynamic investment strategy, designed to
                            maximize your returns through a dual-focus approach.
                            Our strategy revolves around sourcing high-potential
                            properties in high-growth markets such as Dubai,
                            Kuala Lumpur, and Bali, with a keen eye on both
                            emerging and undervalued areas. We meticulously
                            evaluate properties using stringent criteria and
                            local market insights to ensure optimal acquisition
                            prices.
                          </p>
                        </div>
                        <img
                          alt=""
                          className="md:max-w-[100px] sm:max-w-[85px] max-w-[50px] absolute right-[38px] md:bottom-0 bottom-[20px] comma-sm"
                          src={insightsQuote}
                        />
                        <div className="grid grid-cols-12">
                          <div className="md:col-span-5 col-span-9">
                            <div className="flex sm:flex-row flex-col sm:items-center gap-x-2 md:mt-0 mt-14">
                              <div>
                                <img
                                  alt=""
                                  src={clientFace4}
                                  className="sm:max-w-[65px] max-w-[40px] w-full"
                                />
                              </div>
                              <div>
                                <span className="block outfit-bold xl:text-xl sm:text-base text-sm">
                                  Adrian Sim
                                </span>
                                <span className="block text-[#565656] xl:text-xl sm:text-base text-sm">
                                  Chief Business Officer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="grid grid-cols-11 items-center xl:px-9">
                    <div className="md:col-span-3 col-span-12 md:h-[440px] h-[300px] md:mb-0 mb-4 md:bg-transparent bg-[#17271F] md:rounded-none rounded-3xl overflow-hidden">
                      <Link
                        to={`https://www.youtube.com/watch?v=Am938Y2pXJ8`}
                        className="relative"
                      >
                        <img
                          alt=""
                          className="h-full md:object-cover object-contain md:rounded-3xl"
                          src={videoThubmnail3}
                        />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-80 transition-all duration-500 hover:opacity-100">
                          <img
                            alt=""
                            className=" w-full h-full object-contain"
                            src={playIcon}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="md:col-span-8 col-span-12">
                      <div
                        className="md:m-4 md:p-10 p-4 bg-cover bg-no-repeat md:h-[440px] h-auto max-w-full md:max-w-[94%] relative flex flex-col justify-between sliderbg-size"
                        style={{ backgroundImage: `url(${bgTestimonials})` }}
                      >
                        <div>
                          <p className="lg:text-lg text-base">
                            TRL's investment strategy not only aims to maximize
                            returns but also prioritizes safeguarding our
                            investors' funds. We leverage Special Purpose
                            Vehicles (SPVs) and blockchain technology through
                            tokenization to enhance security and transparency.
                            By utilizing SPVs, we isolate assets and manage risk
                            effectively, while tokenization on the blockchain
                            provides a secure, transparent way to handle
                            investments and transactions.
                          </p>
                        </div>
                        <img
                          alt=""
                          className="md:max-w-[100px] sm:max-w-[85px] max-w-[50px] absolute right-[38px] md:bottom-0 bottom-[20px] comma-sm"
                          src={insightsQuote}
                        />
                        <div className="grid grid-cols-12">
                          <div className="md:col-span-5 col-span-9">
                            <div className="flex sm:flex-row flex-col sm:items-center gap-x-2 md:mt-0 mt-14">
                              <div>
                                <img
                                  alt=""
                                  src={clientFace5}
                                  className="sm:max-w-[65px] max-w-[40px] w-full"
                                />
                              </div>
                              <div>
                                <span className="block outfit-bold xl:text-xl sm:text-base text-sm">
                                  Warren How
                                </span>
                                <span className="block text-[#565656] xl:text-xl sm:text-base text-sm">
                                  Co-founder & COO
                                </span>
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

      {/*  Coming Soon section*/}
      <div
        className="bg-no-repeat bg-cover px-4 lg:py-0 main-bgcomingsoon-section"
        style={{ backgroundImage: `url(${bgComingSoon})` }}
      >
        <div className="max-w-[1366px] mx-auto xl:px-[60px]">
          <div className="grid grid-cols-12 items-end">
            <div className="md:col-span-6 col-span-12 md:pt-[80px] md:pb-[80px] pt-[64px] pb-8">
              <span className="block md:text-[30px] md:leading-[40px] text-2xl orange-text3 outfit-bold md:mb-[24px] mb-3">
                Coming Soon
              </span>
              <span className="block md:text-[48px] text-[28px] md:leading-[52px] leading-[36px] outfit-bold mb-2 md:mb-10 max-w-[480px]">
                Unlock the future of real estate with TRL Marketplace
              </span>
              <span className="block text-base text-[#565656] outfit-regular md:hidden mb-10 ">
                Get ready for the next evolution in real estate. TRL is
                launching the world's first home subscription platform,
                transforming how you live and invest.
              </span>
              <ul>
                <li className="flex flex-row gap-x-[18px] mb-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.0625 3.01786V17.9464C3.0625 18.5402 3.49219 18.9643 4.09375 18.9643H21.9688C22.5273 18.9643 23 19.4308 23 19.9821C23 20.5759 22.5273 21 21.9688 21H4.09375C2.375 21 1 19.6429 1 17.9464V3.01786C1 2.46652 1.42969 2 2.03125 2C2.58984 2 3.0625 2.46652 3.0625 3.01786Z"
                        fill="#17271F"
                      />
                      <path
                        d="M20.877 7.71763L14.9902 13.4855C14.6035 13.9096 13.959 13.9096 13.5723 13.4855L10.1777 10.135L6.7832 13.4855C6.35352 13.9096 5.70898 13.9096 5.32227 13.4855C4.89258 13.1038 4.89258 12.4676 5.32227 12.0859L9.44727 8.01451C9.61914 7.80246 9.87695 7.71763 10.1777 7.71763C10.4355 7.71763 10.6934 7.80246 10.9082 8.01451L14.3027 11.365L19.416 6.31808C19.8027 5.89397 20.4473 5.89397 20.877 6.31808C21.2637 6.69978 21.2637 7.33594 20.877 7.71763Z"
                        fill="#FF4A3F"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[18px] leading-[26px] outfit-bold mb-2">
                      Tokenisation-as-a-service
                    </span>
                    <span className="block text-[16px] leading-[24px] text-[#565656] outfit-regular mt-1 max-w-[500px]">
                      Empower homeowners and real estate agents to list and
                      tokenise properties for sale, boosting property volume and
                      offering consumers the chance to invest in fractional
                      ownership.
                    </span>
                  </div>
                </li>
                <li className="flex flex-row  gap-x-[18px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.4063 3.59375L14.5399 4.46278L13.0092 4.57449C11.615 4.65865 10.2763 5.23482 9.29368 6.22051C8.25643 7.26096 7.68447 8.65609 7.63206 10.1324L7.52843 13.8506C7.47628 15.491 8.84521 16.8011 10.4853 16.6892C11.9341 16.605 13.0806 15.455 13.1057 14.0061L13.1848 12.1196L17.3129 12.1406C17.8597 12.1397 18.2704 12.5492 18.2438 13.0686C18.2719 13.5334 17.917 13.8893 17.5071 13.9719C17.1518 14.0545 16.8788 14.2736 16.7699 14.6019C16.6337 14.9028 16.7163 15.2581 16.9627 15.5037C17.1271 15.7222 17.2368 15.9954 17.2373 16.2688C17.2383 16.9249 16.7469 17.4177 16.0908 17.4188L15.5168 17.447C15.1887 17.4475 14.9156 17.6119 14.7246 17.8583C14.561 18.1319 14.5615 18.46 14.6986 18.7605C14.7261 18.8424 14.7536 18.9244 14.7263 19.0065C14.7542 19.3618 14.4813 19.6356 14.0985 19.6362L12.6223 19.6385L12.2395 19.6391L10.3259 19.642C9.63536 19.6431 9.00333 19.8572 8.47863 20.2354L9.84615 21.5946C9.98782 21.534 10.1501 21.5013 10.3287 21.501L12.2697 21.4707L12.6524 21.4701L14.1014 21.4952C15.4136 21.4932 16.451 20.5074 16.5858 19.277C18.0069 19.0014 19.1259 17.7695 19.0963 16.2659C19.0957 15.9379 19.0679 15.6372 18.9308 15.3367C19.6681 14.8161 20.1043 13.9953 20.1028 13.0658C20.1297 12.765 20.0745 12.437 19.9648 12.1638L21.9875 10.1348L20.6713 8.82662L18.8143 10.6893C18.4038 10.4439 17.8568 10.2807 17.3101 10.2816L13.264 10.2878L13.2639 10.2331C13.2632 9.74104 12.8797 9.30422 12.3603 9.27768C11.8408 9.25114 11.4314 9.66184 11.4048 10.1813L11.2466 13.9542C11.2474 14.4463 10.8652 14.8297 10.3731 14.8304C9.82644 14.8859 9.38836 14.4492 9.38752 13.9024L9.49115 10.1843C9.51693 9.1727 9.89823 8.24261 10.6079 7.53072C11.263 6.87359 12.1646 6.46213 13.1214 6.43332L15.0075 6.29373C15.2262 6.29339 15.4447 6.1837 15.6085 6.01942L16.7225 4.90197L15.4063 3.59375ZM3.625 15.4114L4.94125 16.7196L5.20868 16.4513C5.59083 16.068 5.80877 15.5756 5.86261 15.0287L5.94256 13.689C5.96893 13.0602 6.13204 12.4585 6.45925 11.9112L6.45496 9.12274C6.38292 9.195 6.31085 9.25203 6.2428 9.30588C6.18194 9.35405 6.12428 9.39967 6.07273 9.45138L5.77247 9.75257C4.76252 10.7656 4.16318 12.1335 4.08339 13.5825L4.00344 14.9222C4.00361 15.0316 3.94902 15.0863 3.89442 15.1411L3.625 15.4114Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.7264 1.09196C18.413 0.7805 17.9065 0.782049 17.595 1.09542L15.4004 3.30358C15.3225 3.38192 15.3229 3.50855 15.4012 3.58642L21.8738 10.0195C22.1872 10.331 22.6937 10.3294 23.0052 10.0161L24.7769 8.23346C25.0883 7.92009 25.0868 7.41356 24.7734 7.10209L18.7264 1.09196ZM3.6398 15.4235C3.56146 15.3457 3.43483 15.3461 3.35696 15.4244L1.16227 17.6326C0.850812 17.9459 0.852362 18.4525 1.16574 18.7639L7.21275 24.7741C7.52612 25.0855 8.03265 25.084 8.34411 24.7706L10.1158 22.988C10.4273 22.6746 10.4257 22.1681 10.1124 21.8566L3.6398 15.4235Z"
                        fill="#FF4A3F"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[18px] leading-[26px] outfit-bold mb-2">
                      Ecosystem partnerships
                    </span>
                    <span className="block text-[16px] leading-[24px] text-[#565656] outfit-regular mt-1 max-w-[500px]">
                      Enjoy seamless access to a wide range of services from top
                      RWA partners, providing a comprehensive, efficient, and
                      scalable investment platform.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:col-span-6 col-span-12">
              <img alt="" src={unlockFeature} className="md:w-[100%] mx-auto" />
            </div>
          </div>
        </div>
      </div>
      {/*  Invest in $TRLX1 section */}
      <div>
        <div className="max-w-7xl mx-auto md:py-[120px] px-3 py-20">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="relative flex items-center justify-center">
                <span className="hidden sm:flex flex-wrap cursor-pointer text-center orange-text3 lg:text-[96px] md:text-[60px] text-[50px] absolute outfit-bold dek-teat-orange items-center gap-6 invest-hover-ct">
                  Invest in $TRLX1{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    className="hover-svg lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8"
                  >
                    <path
                      d="M63.5427 6.76478V49.1912C63.6753 52.5057 60.891 55.29 57.5765 55.1574C54.2619 55.29 51.4777 52.5057 51.6103 49.1912V21.3489L11.04 61.9191C8.65353 64.3056 4.80864 64.173 2.55474 61.9191C0.168254 59.5326 0.168254 55.8203 2.55474 53.4338L43.125 12.8636L15.1501 12.731C11.8355 12.8636 9.05128 10.0793 9.18386 6.76478C9.05128 3.45021 11.8355 0.66598 15.1501 0.798562H57.5765C60.891 0.66598 63.6753 3.45021 63.5427 6.76478Z"
                      fill="url(#paint0_linear_3160_37124)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3160_37124"
                        x1="68"
                        y1="14.5"
                        x2="-4.76197"
                        y2="26.8679"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF4A3F" className="stop-svg" />
                        <stop
                          offset="1"
                          stop-color="#088AB5"
                          className="stop-svg"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="block sm:hidden cursor-pointer text-center orange-text3 text-5xl absolute outfit-bold ">
                  <span className="flex items-center gap-3 mb-2">
                    Invest in{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M33.3385 3.19353L33.3385 25.4293C33.408 27.1665 31.9488 28.6257 30.2116 28.5562C28.4745 28.6257 27.0152 27.1665 27.0847 25.4293L27.0847 10.8371L5.82178 32.1C4.57102 33.3508 2.5559 33.2813 1.37463 32.1C0.123866 30.8493 0.123866 28.9036 1.37463 27.6529L22.6376 6.38992L7.97587 6.32043C6.2387 6.38992 4.77948 4.9307 4.84896 3.19353C4.77948 1.45636 6.2387 -0.00286339 7.97587 0.0666235L30.2116 0.0666247C31.9488 -0.00286193 33.408 1.45636 33.3385 3.19353Z"
                        fill="url(#paint0_linear_3148_32076)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3148_32076"
                          x1="35.6746"
                          y1="7.24757"
                          x2="-2.46007"
                          y2="13.7296"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF4A3F" />
                          <stop offset="1" stop-color="#088AB5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  $TRLX1
                </span>
                <img
                  alt=""
                  className="max-w-[100%] mx-auto sm:block hidden"
                  src={bgInvestIn}
                />
                <img
                  alt=""
                  className="max-w-[100%] mx-auto block sm:hidden"
                  src={mobilebgInvestIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Proudly featured in section */}
      <div className=" swiper pb-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="md:flex hidden items-center justify-center gap-[38px] flex-wrap">
              <span className="text-[#565656] md:text-[16px] text-[22px] outfit-regular md:inline">
                Proudly featured in
              </span>
              <ul className="flex md:flex-row flex-col items-center justify-center gap-14">
                <li>
                  <Link
                    target="_blank"
                    to={`https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850`}
                    className="block w-fit"
                  >
                    <img
                      alt=""
                      src={proudlyFeaturedLogo1}
                      className="h-[50px] w-auto object-contain"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
                    className="block w-fit"
                  >
                    <img
                      alt=""
                      src={proudlyFeaturedLogo2}
                      className="h-5 w-auto object-contain"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to={`https://www.odaily.news/newsflash/384821`}
                    className="block w-fit"
                  >
                    <img
                      alt=""
                      src={proudlyFeaturedLogo3}
                      className="h-6 w-auto object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:hidden block">
              <span className="text-[#565656] text-[16px] block outfit-regular md:inline mb-4 text-center">
                Proudly featured in
              </span>
              <div>
                {/* Scroll */}
                <div className="w-full overflow-hidden h-[60px]">
                  <div class="wrapper">
                    <div class="marquee">
                      <p className="">
                        <div className="flex items-center">
                          <span className="mr-8 w-[180px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo1}
                                className="w-full"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[140px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo2}
                                className=" object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[120px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.odaily.news/newsflash/384821`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo3}
                                className="w-full object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[180px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo1}
                                className="w-full"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[140px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo2}
                                className=" object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[120px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.odaily.news/newsflash/384821`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo3}
                                className="w-full object-contain"
                              />
                            </Link>
                          </span>
                        </div>
                      </p>
                      <p className="">
                        <div className="flex items-center">
                          <span className="mr-8 w-[180px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo1}
                                className="w-full"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[140px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo2}
                                className=" object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[120px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.odaily.news/newsflash/384821`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo3}
                                className="w-full object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[180px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo1}
                                className="w-full"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[140px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo2}
                                className=" object-contain"
                              />
                            </Link>
                          </span>
                          <span className="mr-8 w-[120px] flex item-center justify-center">
                            <Link
                              target="_blank"
                              to={`https://www.odaily.news/newsflash/384821`}
                              className="block w-fit"
                            >
                              <img
                                alt=""
                                src={proudlyFeaturedLogo3}
                                className="w-full object-contain"
                              />
                            </Link>
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Scroll */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
