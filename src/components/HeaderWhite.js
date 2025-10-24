import React, { useEffect, useState } from "react";
import Logo2 from "../assets/images/logo.svg";
import whitePaperIcon from "../assets/images/whitepaper-icon.png";
import navCompany from "../assets/images/nav-company.png";
import navLearn from "../assets/images/nav-learn.png";
import navEcosystem from "../assets/images/nav-ecosystem.png";
import navInvestment1 from "../assets/images/nav-investment-1.png";
import navInvestment2 from "../assets/images/nav-investment-2.png";
import navInvestment3 from "../assets/images/nav-investment-3.png";
import navInvestment4 from "../assets/images/nav-investment-4.png";
import navInvestment5 from "../assets/images/nav-investment-5.png";

import { MegaMenu } from "flowbite-react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
const people = [
  {
    id: 1,
    name: "EN",
  },
  {
    id: 2,
    name: "中文",
  },
  {
    id: 3,
    name: "العربيّة",
  },
];

const HeaderWhite = () => {
  const [selected, setSelected] = useState(people[0]);
  const [scroll, setScroll] = useState(false);
  console.log("selected ====>", selected);
  const redirectToWhitePaper = () => {
    window.open("https://whitepaper.trlco.world/trl", "_blank");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div
      className={`p-4 w-full z-[999]  right-0 left-0 min-h-[75px] fixed transition-all duration-500 [&_.active-link_span]:duration-500 [&_.active-link_span]:transition-all [&.header-active_.active-link_span]:!text-[#17271F] [&.header-active_.active-link_svg]:!fill-[#17271F] [&.header-active_.active-la]:!text-[#17271F] [&.header-active_.active-svg-la_svg]:!fill-[#17271F] [&.header-active_.active-svg-la_svg]:transition-all [&.header-active_.active-svg-la_svg]:duration-500 [&.header-active_.active-la_svg]:transition-all [&.header-active_.active-la_svg]:duration-500 [&.header-active_.hide-header]:!hidden [&.header-active_.show-header]:!block [&.header-active]:border-b [&.header-active]:border-solid [&.header-active]:border-b-[#e0e0e0]  [&.header-active_.active-bt_button]:!text-[#17271F] ${
        scroll ? "bg-white top-0 header-active" : "top-[76px]"
      }`}
    >
      <div className="max-w-[1366px] mx-auto xl:px-[50px] px-5 relative">
        <div className="col-span-12 z-50 ">
          <div className="lg:block hidden">
            <div className="flex items-center gap-2">
              <div className="">
                <Link
                  to={`/`}
                  className="hover:text-[#000]/50 transition-all duration-300 ease-in-out hide-header"
                >
                  {/* <img alt="" className="inline lg:w-[60px] w-12" src={Logo} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3144_22511)">
                      <path
                        d="M21.5546 38.9148C19.7721 39.5119 17.5029 40 15.6122 40C8.3191 40 5.51032 37.1789 5.51032 30.0183V20.2883H0V19.5857L14.6397 0V11.7173H21.5546V20.2883H14.6397V28.1741C14.6397 30.778 15.8282 31.8088 17.7189 31.8088C19.0693 31.8088 20.2579 31.4833 21.5546 30.6696V38.9148Z"
                        fill="white"
                      />
                      <path
                        d="M48.3526 12.5287L45.0574 23.1615C43.1127 21.4256 41.2218 20.6116 38.7912 20.6116C35.9818 20.6116 34.2531 22.5104 34.2531 26.0366V39.4553H24.6914V11.7154H34.1996V25.4398C34.4694 20.8831 35.1719 17.4113 36.4142 14.9703C37.6571 12.529 39.926 11.2812 43.1674 11.2812C45.1118 11.2812 47.0022 11.8237 48.3526 12.5287Z"
                        fill="white"
                      />
                      <path
                        d="M55.5711 33.3953C55.3855 33.3236 55.1618 33.2812 54.8959 33.2812C54.3658 33.2837 54.01 33.4505 53.768 33.7058C53.5272 33.9623 53.3912 34.331 53.3906 34.7811C53.3906 35.1309 53.4653 35.4252 53.5995 35.6517C53.7348 35.8782 53.9251 36.0459 54.2048 36.1545C54.3915 36.2263 54.6201 36.2689 54.8959 36.2689C55.1737 36.2689 55.4029 36.2251 55.5896 36.1522C55.7766 36.0789 55.9225 35.9775 56.0396 35.8518C56.272 35.6019 56.3999 35.2368 56.4005 34.7811C56.4005 34.4294 56.3222 34.1333 56.1839 33.9041C56.0449 33.6743 55.849 33.5042 55.5711 33.3953Z"
                        fill="white"
                      />
                      <path
                        d="M50.0312 0V39.4576H59.7555V0H50.0312ZM52.1436 24.2501C52.8051 23.5613 53.7725 23.1334 54.9398 23.1352C55.9088 23.1343 56.7211 23.4049 57.3369 23.879C57.9452 24.3458 58.3527 25.0035 58.5571 25.7472L56.2261 26.22C56.1457 25.9698 56.022 25.776 55.8478 25.6374C55.6443 25.4775 55.3593 25.3734 54.9401 25.3722C54.6901 25.3722 54.4782 25.4106 54.3002 25.4811C54.1218 25.5519 53.9751 25.6533 53.8466 25.7952C53.59 26.0853 53.4609 26.4175 53.4582 26.8717C53.4591 27.3337 53.5974 27.6982 53.8347 27.9488C54.0731 28.1984 54.4215 28.3574 54.9285 28.3595C55.3399 28.3586 55.6258 28.2542 55.8341 28.0943C55.9506 28.0037 56.0447 27.8894 56.1212 27.7558L58.4863 28.2356C58.2682 28.8815 57.8849 29.4585 57.3244 29.8779C56.7155 30.3348 55.9085 30.5976 54.9288 30.5967C53.7325 30.5988 52.7641 30.1854 52.111 29.4999C51.457 28.8155 51.1254 27.8783 51.126 26.8714C51.1254 25.8756 51.4809 24.938 52.1436 24.2501ZM57.7504 37.4015C57.0958 38.0907 56.1179 38.5095 54.8935 38.5074C53.6811 38.5095 52.7044 38.0973 52.0462 37.4114C51.3871 36.7271 51.0552 35.7889 51.056 34.782C51.0555 33.7887 51.3978 32.8502 52.0587 32.1605C52.7187 31.4695 53.6942 31.0432 54.8935 31.045C56.0901 31.0432 57.0653 31.4557 57.7271 32.1419C58.3901 32.8265 58.7319 33.7674 58.731 34.7817C58.7316 35.7766 58.4062 36.7136 57.7504 37.4015Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3144_22511">
                        <rect width="59.7551" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  to={`/`}
                  className="hover:text-[#000]/50 transition-all duration-300 ease-in-out show-header hidden"
                >
                  <img alt="" className="inline lg:w-[60px] w-12" src={Logo2} />
                </Link>
              </div>
              <div className="flex items-center xl:gap-8 gap-3 xl:ml-8 lg:ml-3 relative">
                {/* Investments */}
                <div className="[&_button]:text-white [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#fff]/60">
                  <MegaMenu.Dropdown
                    toggle={<>Investments</>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-0 translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff]  shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 py-3 px-2 ">
                          <div className="col-span-12">
                            <div className="relative group md:py-3 md:px-4">
                              <div className="flex items-center gap-x-4">
                                <div className="w-[185px]">
                                  <Link
                                    to={``}
                                    className=""
                                  >
                                    <div className="relative cursor-pointer">
                                      <span className="absolute left-[10px] top-[10px] text-[14px] outfit-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium">
                                        Bali
                                      </span>
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px] ">
                                      Available
                                    </span>
                                      <img
                                        alt=""
                                        src={navInvestment1}
                                        className="w-[185px] h-[136px] object-cover rounded-xl"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="w-[185px]">
                                  <Link
                                    to={``}
                                    className=""
                                  >
                                    <div className="relative cursor-pointer">
                                      <span className="absolute left-[10px] top-[10px] text-[14px] outfit-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium">
                                        Smashbros
                                      </span>
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px] ">
                                      Available
                                    </span>
                                      <img
                                        alt=""
                                        src={navInvestment2}
                                        className="w-[185px] h-[136px] object-cover rounded-xl"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="w-[185px]">
                                  <Link
                                    to={``}
                                    className=""
                                  >
                                    <div className="relative cursor-pointer">
                                      <span className="absolute left-[10px] top-[10px] text-[14px] outfit-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium">
                                        Johor Bahru
                                      </span>
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px] ">
                                      Completed
                                    </span>
                                      <img
                                        alt=""
                                        src={navInvestment3}
                                        className="w-[185px] h-[136px] object-cover rounded-xl"
                                      />
                                    </div>
                                  </Link>
                                </div>
                                <div className="w-[185px]">
                                  <div className="relative cursor-pointer">
                                    <span className="absolute left-[10px] top-[10px] text-[14px] outfit-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium">
                                      KL
                                    </span>
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px]">
                                      Coming Soon
                                    </span>
                                    <img
                                      alt=""
                                      src={navInvestment4}
                                      className="w-[185px] h-[136px] object-cover rounded-xl"
                                    />
                                  </div>
                                </div>
                                <div className="w-[185px]">
                                  <div className="relative cursor-pointer">
                                    <span className="absolute left-[10px] top-[10px] text-[14px] outfit-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium ">
                                      UAE
                                    </span>
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px] ">
                                      Coming Soon
                                    </span>
                                    <img
                                      alt=""
                                      src={navInvestment5}
                                      className="w-[185px] h-[136px] object-cover rounded-xl"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MegaMenu.Dropdown>
                </div>
                {/*  Token Ecosystem */}
                <div className="[&_button]:text-white [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#fff]/60">
                  <MegaMenu.Dropdown
                    toggle={<> Token Ecosystem</>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-0 translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50 bg-[#fff]  shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 p-6">
                          <div className="col-span-12">
                            <div className="relative group">
                              <div className="grid grid-cols-12 items-center">
                                <div className="lg:col-span-6 col-span-12">
                                  <ul className="flex flex-col gap-6 p-2">
                                    <li>
                                      <Link
                                        className="ease-in-out text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium"
                                        to={`/roadmap`}
                                      >
                                        Roadmap
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="ease-in-out text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium"
                                        to={`/ecosystem`}
                                      >
                                        TRL Ecosystem
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="ease-in-out cursor-pointer flex flex-row items-center gap-x-4 text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300 text-base font-medium"
                                        onClick={redirectToWhitePaper}
                                      >
                                        Whitepaper{" "}
                                        <img
                                          alt=""
                                          className="w-[14px] h-[14px]"
                                          src={whitePaperIcon}
                                        />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="lg:col-span-6 col-span-12">
                                  <img
                                    alt=""
                                    src={navEcosystem}
                                    className="w-[210px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MegaMenu.Dropdown>
                </div>
                {/*  Learn */}
                <div className="[&_button]:text-white [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#fff]/60">
                  <MegaMenu.Dropdown
                    toggle={<> Learn </>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-[100px] translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff] shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 p-6">
                          <div className="col-span-12">
                            <div className="relative group">
                              <div className="grid grid-cols-12 items-center">
                                <div className="lg:col-span-6 col-span-12">
                                  <ul className="flex flex-col gap-6 p-2">
                                    <li>
                                      <Link
                                        className="text-base font-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300"
                                        to={`/blog`}
                                      >
                                        Blog
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <Link
                                        className="text-base font-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300"
                                        to={`/how-to-buy`}
                                      >
                                        How to buy
                                      </Link>
                                    </li> */}
                                    <li>
                                      <Link
                                        className="text-base font-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300"
                                        to={`/faq`}
                                      >
                                        FAQ
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="lg:col-span-6 col-span-12">
                                  <img
                                    alt=""
                                    src={navLearn}
                                    className="w-[210px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MegaMenu.Dropdown>
                </div>

                {/*  Company */}
                <div className="[&_button]:text-white [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#fff]/60 ">
                  <MegaMenu.Dropdown
                    toggle={<> Company </>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-[200px] translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff] shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 p-6">
                          <div className="col-span-12">
                            <div className="relative group">
                              <div className="grid grid-cols-12 items-start">
                                <div className="lg:col-span-6 col-span-12">
                                  <ul className="flex flex-col gap-6 p-2">
                                    <li>
                                      <Link
                                        className="text-base font-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300"
                                        to={`/about`}
                                      >
                                        About
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="text-base font-medium text-[#17271F] hover:text-[#8A8A8A] transition-all duration-300"
                                        to={`/media`}
                                      >
                                        Media Release
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="lg:col-span-6 col-span-12">
                                  <img
                                    alt=""
                                    src={navCompany}
                                    className="w-[210px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MegaMenu.Dropdown>
                </div>

                <Link className="px-1 active-link" to={`/contact`}>
                  <span className="outfit-medium text-[#FFFFFF] hover:text-[#fff]/60 transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px] ">
                    Contact
                  </span>
                </Link>
              </div>
              <div className="ml-auto text-right flex items-center ">
                {/* Language dropdown */}
                <div className="xl:mr-8 lg:mr-4 mt-2 hidden">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <ListboxButton className="relative cursor-pointer [&[aria-expanded='true']_.scall-y-w]:scale-y-[-1] active-svg-la">
                        <span className="flex items-center gap-1">
                          <BsGlobe2 className="text-2xl text-[#fff] mr-1 " />
                          <span className="block truncate text-base font-medium text-white active-la">
                            {}
                            {selected?.name}
                          </span>
                          <div className="scall-y-w">
                            <RiArrowDownSFill className="text-lg text-white" />
                          </div>
                        </span>
                      </ListboxButton>

                      <ListboxOptions
                        transition
                        className="absolute z-10 mt-3 max-h-56 overflow-auto rounded-3xl bg-white p-5 flex flex-col gap-5 shadow-[0px_4px_10px_0px_rgba(23,39,31,0.08)] w-[150px]"
                      >
                        {people.map((person) => (
                          <ListboxOption
                            key={person.id}
                            value={person}
                            className="group relative cursor-default select-none text-base font-medium data-[focus]:text-[#ff4a3f]"
                          >
                            <div className="flex items-center">
                              <span className=" block truncate font-normal group-data-[selected]:font-semibold group-data-[selected]:text-[#ff4a3f]">
                                {person.name}
                              </span>
                            </div>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>
                <button
                  type="button"
                  onClick={() => (window.location.href = "https://presale.trl.world/")}
                  className="text-[#FF4A3F] bg-[#fff] border border-[#fff] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] transition-all duration-300 hover:bg-[#ffcdcb] hover:border-transparent header-borderSignUp"
                >
                  Enter Presale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWhite;
