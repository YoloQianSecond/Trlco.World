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
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
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
const Header = () => {
  const [selected, setSelected] = useState(people[0]);
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const redirectToWhitePaper = () => {
    window.open("https://whitepaper.trlco.world/trl", "_blank");
  };
  const handleShow = () => setShow(!show);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div
      className={`transition-all duration-500 lg:px-0 px-3 md:py-4 py-[16px]  z-50 sticky top-0 bg-white [&.header-active2]:border-b [&.header-active2]:border-solid [&.header-active2]:border-b-[#e0e0e0] ${
        scroll ? "bg-white top-0 header-active2" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:block hidden">
            <div className="flex items-center gap-2">
              <div className="">
                <Link
                  to={`/`}
                  className="hover:text-[#000]/50 transition-all duration-300 ease-in-out"
                >
                  <img alt="" className="inline lg:w-[60px] w-12" src={Logo2} />
                </Link>
              </div>
              <div className="flex items-center xl:gap-8 gap-3 lg:ml-16 relative">
                {/* Investments */}
                <div
                  className="[&_button]:text-[#17271F] [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px]
                  [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#8A8A8A]"
                >
                  <MegaMenu.Dropdown
                    toggle={<>Investments</>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-0 translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff] shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
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
                                    <span className="bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[38px] text-[11px]">
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
                                      Kuala Lumpur
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
                <div
                  className="[&_button]:text-[#17271F] [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px]
                  [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#8A8A8A]"
                >
                  <MegaMenu.Dropdown
                    toggle={<> Token Ecosystem</>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-0 translate-y-[33px]"
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
                <div className="[&_button]:text-[#17271F] [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#8A8A8A]">
                  <MegaMenu.Dropdown
                    toggle={<> Learn </>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-[100px] translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff] shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 p-6">
                          <div className="col-span-12">
                            <div className="relative group ">
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
                <div className="[&_button]:text-[#17271F] [&_button]:font-medium [&_button_svg]:ml-2 [&_button_svg]:mt-[2px] [&_button_svg]:w-[14px] [&_button[aria-expanded='true']_svg]:scale-y-[-1] active-bt [&_button]:transitiom-all [&_button]:duration-300 [&_button:hover]:text-[#8A8A8A]">
                  <MegaMenu.Dropdown
                    toggle={<> Company </>}
                    className="w-fit shadow-none border-none bg-transparent [&_ul.py-1]:!py-0 !translate-x-[200px] translate-y-[33px]"
                  >
                    <div className="relative group inline">
                      <div className="rounded-3xl relative z-50  bg-[#fff] shadow-[0px_2px_10px_rgba(23,39,31,0.12)]">
                        <div className="grid grid-cols-12 p-6">
                          <div className="col-span-12">
                            <div className="relative group 3">
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

                <Link className="px-1" to={`/contact`}>
                  <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#8A8A8A] ease-in-out duration-300 lg:text-[16px] text-[14px]">
                    Contact
                  </span>
                </Link>
              </div>

              <div className="ml-auto text-right flex items-center  ">
                {/* Language dropdown */}
                <div className="xl:mr-8 lg:mr-4 mt-2 hidden">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <ListboxButton className="relative [&[aria-expanded='true']_.scall-y-w]:scale-y-[-1] cursor-pointer">
                        <span className="flex items-center gap-1">
                          <BsGlobe2 className="text-2xl text-[#17271F] mr-1" />
                          <span className="block truncate text-base font-medium">
                            {}
                            {selected?.name}
                          </span>
                          <div className="scall-y-w">
                            <RiArrowDownSFill className="text-lg " />
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
                  onClick={() =>
                    window.open("https://trl.world", "_blank", "noopener,noreferrer")
                  }
                  className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] transition-all duration-300 hover:bg-[#cc3b33] hover:text-[#fff] hover:border-transparent"
                >
                  Enter Presale
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="col-span-12 lg:hidden block">
            <div className="flex items-center justify-between w-full">
              <Link to={`/`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3144_23287)">
                    <path
                      d="M21.6429 38.9148C19.8531 39.5119 17.5746 40 15.6762 40C8.3532 40 5.5329 37.1789 5.5329 30.0183V20.2883H0V19.5857L14.6997 0V11.7173H21.6429V20.2883H14.6997V28.1741C14.6997 30.778 15.8931 31.8088 17.7915 31.8088C19.1475 31.8088 20.3409 31.4833 21.6429 30.6696V38.9148Z"
                      fill="url(#paint0_radial_3144_23287)"
                    />
                    <path
                      d="M48.5512 12.5287L45.2425 23.1615C43.2898 21.4256 41.3911 20.6116 38.9506 20.6116C36.1297 20.6116 34.3939 22.5104 34.3939 26.0366V39.4553H24.793V11.7154H34.3402V25.4398C34.6111 20.8831 35.3164 17.4113 36.5638 14.9703C37.8118 12.529 40.09 11.2812 43.3447 11.2812C45.2971 11.2812 47.1952 11.8237 48.5512 12.5287Z"
                      fill="url(#paint1_radial_3144_23287)"
                    />
                    <path
                      d="M55.7988 33.3953C55.6125 33.3236 55.3878 33.2812 55.1208 33.2812C54.5886 33.2837 54.2313 33.4505 53.9883 33.7058C53.7465 33.9623 53.61 34.331 53.6094 34.7811C53.6094 35.1309 53.6844 35.4252 53.8191 35.6517C53.955 35.8782 54.1461 36.0459 54.4269 36.1545C54.6144 36.2263 54.8439 36.2689 55.1208 36.2689C55.3998 36.2689 55.6299 36.2251 55.8174 36.1522C56.0052 36.0789 56.1516 35.9775 56.2692 35.8518C56.5026 35.6019 56.631 35.2368 56.6316 34.7811C56.6316 34.4294 56.553 34.1333 56.4141 33.9041C56.2746 33.6743 56.0778 33.5042 55.7988 33.3953Z"
                      fill="url(#paint2_radial_3144_23287)"
                    />
                    <path
                      d="M50.2383 0V39.4576H60.0024V0H50.2383ZM52.3593 24.2501C53.0235 23.5613 53.9949 23.1334 55.167 23.1352C56.1399 23.1343 56.9556 23.4049 57.5739 23.879C58.1847 24.3458 58.5939 25.0035 58.7991 25.7472L56.4585 26.22C56.3778 25.9698 56.2536 25.776 56.0787 25.6374C55.8744 25.4775 55.5882 25.3734 55.1673 25.3722C54.9162 25.3722 54.7035 25.4106 54.5247 25.4811C54.3456 25.5519 54.1983 25.6533 54.0693 25.7952C53.8116 26.0853 53.682 26.4175 53.6793 26.8717C53.6802 27.3337 53.8191 27.6982 54.0573 27.9488C54.2967 28.1984 54.6465 28.3574 55.1556 28.3595C55.5687 28.3586 55.8558 28.2542 56.0649 28.0943C56.1819 28.0037 56.2764 27.8894 56.3532 27.7558L58.728 28.2356C58.509 28.8815 58.1241 29.4585 57.5613 29.8779C56.9499 30.3348 56.1396 30.5976 55.1559 30.5967C53.9547 30.5988 52.9824 30.1854 52.3266 29.4999C51.6699 28.8155 51.3369 27.8783 51.3375 26.8714C51.3369 25.8756 51.6939 24.938 52.3593 24.2501ZM57.9891 37.4015C57.3318 38.0907 56.3499 38.5095 55.1205 38.5074C53.9031 38.5095 52.9224 38.0973 52.2615 37.4114C51.5997 36.7271 51.2664 35.7889 51.2673 34.782C51.2667 33.7887 51.6105 32.8502 52.2741 32.1605C52.9368 31.4695 53.9163 31.0432 55.1205 31.045C56.322 31.0432 57.3012 31.4557 57.9657 32.1419C58.6314 32.8265 58.9746 33.7674 58.9737 34.7817C58.9743 35.7766 58.6476 36.7136 57.9891 37.4015Z"
                      fill="url(#paint3_radial_3144_23287)"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_3144_23287"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(37.5509 38.5672) scale(72.9207 72.9258)"
                    >
                      <stop stop-color="#F36C24" />
                      <stop offset="0.0185" stop-color="#E96E2A" />
                      <stop offset="0.0493" stop-color="#D67536" />
                      <stop offset="0.0885" stop-color="#B67C4A" />
                      <stop offset="0.1347" stop-color="#868463" />
                      <stop offset="0.1863" stop-color="#288B7F" />
                      <stop offset="0.1912" stop-color="#088B82" />
                      <stop offset="0.2813" stop-color="#088AB5" />
                      <stop offset="0.3043" stop-color="#3189AF" />
                      <stop offset="0.3424" stop-color="#5D879F" />
                      <stop offset="0.3911" stop-color="#898384" />
                      <stop offset="0.4484" stop-color="#B97C60" />
                      <stop offset="0.5123" stop-color="#EF6D28" />
                      <stop offset="0.5151" stop-color="#F36C24" />
                      <stop offset="0.7699" stop-color="#EF3F36" />
                      <stop offset="0.9944" stop-color="#088B82" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_3144_23287"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(20.3365 12.7827) scale(54.3243 54.3281)"
                    >
                      <stop offset="0.005618" stop-color="#088B82" />
                      <stop offset="0.4196" stop-color="#F36C24" />
                      <stop offset="0.5272" stop-color="#F15B2D" />
                      <stop offset="0.6514" stop-color="#F04C32" />
                      <stop offset="0.7949" stop-color="#EF4235" />
                      <stop offset="1" stop-color="#EF3F36" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_3144_23287"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(36.3022 47.5136) scale(66.0996 66.1043)"
                    >
                      <stop stop-color="#088AB5" />
                      <stop offset="0.0556" stop-color="#3189AF" />
                      <stop offset="0.1482" stop-color="#5D879F" />
                      <stop offset="0.2663" stop-color="#898384" />
                      <stop offset="0.4053" stop-color="#B97C60" />
                      <stop offset="0.5604" stop-color="#EF6D28" />
                      <stop offset="0.5674" stop-color="#F36C24" />
                      <stop offset="0.8652" stop-color="#EF3F36" />
                      <stop offset="0.9944" stop-color="#088B82" />
                    </radialGradient>
                    <radialGradient
                      id="paint3_radial_3144_23287"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(36.3019 47.5149) scale(66.0996 66.1043)"
                    >
                      <stop stop-color="#088AB5" />
                      <stop offset="0.0556" stop-color="#3189AF" />
                      <stop offset="0.1482" stop-color="#5D879F" />
                      <stop offset="0.2663" stop-color="#898384" />
                      <stop offset="0.4053" stop-color="#B97C60" />
                      <stop offset="0.5604" stop-color="#EF6D28" />
                      <stop offset="0.5674" stop-color="#F36C24" />
                      <stop offset="0.8652" stop-color="#EF3F36" />
                      <stop offset="0.9944" stop-color="#088B82" />
                    </radialGradient>
                    <clipPath id="clip0_3144_23287">
                      <rect width="60" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div>
                <HiOutlineMenu
                  className="text-3xl"
                  onClick={handleShow}
                  color="#17271F"
                />
              </div>
            </div>
            <div
              className={`${
                show ? "show-mobile-header" : ""
              } mobile-header h-dvh overflow-auto bg-white fixed top-0 left-0 bottom-0 right-0 z-[999999] transition-all duration-500 translate-x-[-100%] [&.show-mobile-header]:!translate-x-0`}
            >
              <div className="flex items-center justify-between w-full py-[18px] px-4 border-b border-solid border-[#E0E0E0] sticky top-0 z-30 bg-white">
                <Link to={`/`}>
                  <img src={Logo2} className="w-14 h-auto" alt="Logo" />
                </Link>
                <div>
                  <IoClose
                    className="text-4xl"
                    onClick={handleShow}
                    color="#17271F"
                  />
                </div>
              </div>
              <div className="px-5 pt-5 flex flex-col gap-8 w-full pb-5">
                <div className="w-full">
                  <span className="block text-[#8A8A8A] text-xs font-medium leading-[18px] mb-3">
                    Investment
                  </span>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/`}
                        className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      >
                        Bali
                      </Link>
                      <span className="bg-[#088AB5] text-white text-[10px] leading-4 font-medium p-1 min-h-5 rounded-[4px]">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/`}
                        className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      >
                        Smashbros
                      </Link>
                      <span className="bg-[#088AB5] text-white text-[10px] leading-4 font-medium p-1 min-h-5 rounded-[4px]">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to={``}
                        className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A] "
                      >
                        Johor Bahru
                      </Link>
                        <span className="bg-[#088AB5] text-white text-[10px] leading-4 font-medium p-1 min-h-5 rounded-[4px]">
                          Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/`}
                        className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A] opacity-30 pointer-events-none"
                      >
                        Kuala Lumpur
                      </Link>
                      <span className="bg-[#088AB5] text-white text-[10px] leading-4 font-medium p-1 min-h-5 rounded-[4px]">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/`}
                        className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A] opacity-30 pointer-events-none"
                      >
                        UAE
                      </Link>
                      <span className="bg-[#088AB5] text-white text-[10px] leading-4 font-medium p-1 min-h-5 rounded-[4px]">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <span className="block text-[#8A8A8A] text-xs font-medium leading-[18px] mb-3">
                    Token Ecosystem
                  </span>
                  <div className="w-full flex flex-col gap-4">
                    <Link
                      to={`/roadmap`}
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                    >
                      Roadmap
                    </Link>
                    <Link
                      to={`/ecosystem`}
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                    >
                      TRL Ecosystem
                    </Link>
                    <Link
                      className="cursor-pointer text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A] flex flex-row items-center gap-x-2"
                      onClick={redirectToWhitePaper}
                    >
                      Whitepaper{" "}
                      <img className="w-[16px] h-auto" src={whitePaperIcon} alt="" aria-hidden="true"/>
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <span className="block text-[#8A8A8A] text-xs font-medium leading-[18px] mb-3">
                    Learn
                  </span>
                  <div className="w-full flex flex-col gap-4">
                    <Link
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      to={`/blog`}
                    >
                      Blog
                    </Link>
                    <Link
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      to={`/how-to-buy`}
                    >
                      How to buy
                    </Link>
                    <Link
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      to={`/faq`}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <span className="block text-[#8A8A8A] text-xs font-medium leading-[18px] mb-3">
                    Company
                  </span>
                  <div className="w-full flex flex-col gap-4">
                    <Link
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      to={`/about`}
                    >
                      About
                    </Link>
                    <Link
                      className="text-base font-medium leading-6 text-[#17271F] transition-all duration-300 hover:text-[#8A8A8A]"
                      to={`/media`}
                    >
                      Media Release
                    </Link>
                  </div>
                </div>
                <div className="border-t border-solid border-[#E0E0E0] py-8 flex items-center justify-between w-full hidden">
                  <div className="flex items-center gap-2">
                    <IoGlobeOutline className="text-[#565656] text-xl" />
                    <span className="block text-base font-normal leading-6 text-[#565656]">
                      Language
                    </span>
                  </div>
                  {/* Language dropdown */}
                  <div className="">
                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative">
                        <ListboxButton className="relative cursor-default ">
                          <span className="flex items-center gap-1">
                            <span className="block truncate text-base font-medium text-[#17271F]">
                              {}
                              {selected?.name}
                            </span>
                            <RiArrowDownSFill className="text-lg text-[#17271F]" />
                          </span>
                        </ListboxButton>

                        <ListboxOptions
                          transition
                          className="absolute z-10 mt-3 max-h-56 overflow-auto rounded-3xl bg-white p-5 flex flex-col gap-5 shadow-[0px_4px_10px_0px_rgba(23,39,31,0.08)] w-[150px] right-0 bottom-0"
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
                </div>
              </div>
              {/*  */}
              <div className="flex items-center justify-between gap-4 border-t border-solid border-[#E0E0E0] p-5 sticky bottom-0 bg-white">
                <button
                  type="button"
                  onClick={() => window.open("https://trl.world", "_blank")}
                  className="text-[#fff] bg-[#FF4A3F] border border-[#FF4A3F] text-base outfit-semibold rounded-[25px] w-full px-6 py-[10px] transition-all duration-300 hover:bg-[#cc3b33]"
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

export default Header;
