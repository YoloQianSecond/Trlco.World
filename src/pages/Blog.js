import React, { useEffect, useMemo, useState } from "react";
import { client } from "../sanityClient";
import iconPrev from "../assets/images/icon-previous.png";
import iconNext from "../assets/images/icon-next.png";
import filtericon from "../assets/images/filtericon.svg";
import closeIcon from "../assets/images/close-icon.svg";
import downArrow from "../assets/images/downArrow.svg";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { extractPlainText } from "../utils/portableTextUtils";
import blogBreadcrumb from "../assets/images/blog-img-2.png";
import HeroSection from "../components/HeroSection";
import { months } from "../utils/helper";

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(0);
  const [isFilter, setIsFilter] = useState(false);

  const postsPerPage = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post" ${category ? `&& "${category}" in categories[]._ref` : ""
          } ${year ? `&& publishedAt match "${year}-"` : ""} ${month ? `&& publishedAt match "-${month}-"` : ""
          }] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage {
            asset->{
              _id,
              url
            },
            alt
          },
          categories[]->{
            _id,
            title
          },
          body,
          publishedAt
        }`;

        // console.log("Query:", query); // Debug query

        const postsData = await client.fetch(query);
        const filteredPosts = postsData.filter((post) => {
          const postDate = post.publishedAt;
          const isYearMatch = year ? postDate.startsWith(`${year}-`) : true;
          const isMonthMatch = month ? postDate.includes(`-${month}-`) : true;
          return isYearMatch && isMonthMatch;
        });
        // console.log("Posts Data:", postsData); // Debug fetched data

        setTotalPosts(filteredPosts.length);
        const paginatedPosts = filteredPosts.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
        );
        setPosts(paginatedPosts);
      } catch (err) {
        setError(err);
      }
    };

    fetchPosts();
  }, [category, year, month, currentPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(
          `*[_type == "category"] { _id, title }`
        );
        // console.log("Categories Data:", categoriesData); // Debug categories
        setCategories(categoriesData);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentPage(1); // Reset to first page
  };

  // Handle year selection
  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    setCurrentPage(1); // Reset to first page
  };

  // Handle month selection
  const handleMonthChange = (selectedMonth) => {
    setMonth(selectedMonth);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const plainText = extractPlainText(text); // Convert Portable Text to plain text
    const words = plainText.split(/\s+/); // Split by whitespace
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(" ") + "..."; // Add ellipsis
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const handleAccordin = (item) =>
    setActive((prev) => (item === prev ? 0 : item));
  const handleOnClick = () => setIsFilter(!isFilter);

  useEffect(() => {
    if (isFilter) document.body.classList.add("body-overflow");
    if (!isFilter) document.body.classList.remove("body-overflow");
  }, [isFilter]);

  const handleClearFilters = () => {
    setCategory("");
    setYear("");
    setMonth("");
    setCurrentPage(1);
  };

  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  }, []);

  const categoryLabel = useMemo(() => {
    if (category && categories.length > 0) {
      const selectedCat = categories.find(c => c._id === category);
      return selectedCat ? selectedCat.title : "Category";
    }
    return "Category";
  }, [category, categories]);

  const monthLabel = useMemo(() => {
    if (month) {
      const selectedMonthOption = months.find(m => m.value === month);
      return selectedMonthOption ? selectedMonthOption.name : "Month";
    }
    return "Month";
  }, [month]);
  return (
    <div>
      <div
        className={
          isFilter
            ? "body-show transition-all duration-500"
            : "transition-all duration-500"
        }
      >
        <Topbar />
        <Header />

        <div className="w-full">
          <HeroSection
            breadCrumUrl={blogBreadcrumb}
            title={"Blog"}
            description={` Find company news, announcements, and press resources.`}
          />
        </div>

        <div className="md:pt-16 md:pb-24 py-10  px-3">
          <div className="max-w-7xl mx-auto">
            <div className="">
              <div className="flex items-center gap-3 justify-between w-full mb-10">
                <div className="md:block hidden ">
                  <div className="media-filters flex flex-wrap gap-[10px] items-center">
                    <div className="lg:w-[240px] w-[200px] [&_.divide-y]:max-h-[185px] [&_.divide-y]:overflow-auto">
                      <Dropdown label={categoryLabel} inline >
                        {categories.length > 0 ? (
                          categories.map((category) => (
                            <Dropdown.Item
                              key={category._id}
                              onClick={() => handleCategoryChange(category._id)}
                            >
                              {category.title}
                            </Dropdown.Item>
                          ))
                        ) : (
                          <Dropdown.Item>No categories available</Dropdown.Item>
                        )}
                      </Dropdown>
                    </div>
                    <div className="lg:w-[180px] w-[150px] [&_.divide-y]:max-h-[185px] [&_.divide-y]:overflow-auto">
                      <Dropdown label={year || "Year"} inline>
                        {yearOptions.map((yearOption) => (
                          <Dropdown.Item key={yearOption} onClick={() => handleYearChange(yearOption)}>
                            {yearOption}
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </div>
                    <div className="lg:w-[180px] w-[150px] lg:mr-[10px] [&_.divide-y]:!z-50 [&_.divide-y]:max-h-[185px] [&_.divide-y]:overflow-auto" >
                      <Dropdown label={monthLabel} inline >
                        {months.map((monthOption) => (
                          <Dropdown.Item key={monthOption.value} onClick={() => handleMonthChange(monthOption.value)} style={{ zIndex: 50 }}>
                            {monthOption.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </div>
                    <div>
                      <Link
                        to="#"
                        onClick={handleClearFilters}
                        className="text-[#FF4A3F] text-base font-bold font-outfit line-text-hover w-fit"
                      >
                        Clear filters
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <span className="text-base text-[#8A8A8A]">
                    Showing {(currentPage - 1) * postsPerPage + 1} to{" "}
                    {Math.min(currentPage * postsPerPage, totalPosts)} of{" "}
                    {totalPosts} results
                  </span>
                </div>
                <div className="md:hidden" onClick={handleOnClick}>
                  <button className="border-[#ff4a3f] text-base border px-6 py-2 rounded-full text-[#ff4a3f] outfit-bold gap-2 flex ">
                    Filter <img src={filtericon} alt="" />
                  </button>
                </div>
              </div>

              <div className="col-span-12">
                {posts.length === 0 && (
                  <div className="text-center text-[16px] text-[#8A8A8A]">
                    No results found for the selected filters.
                  </div>
                )}
                <div className="grid grid-cols-12 gap-5 ">
                  {posts.map((post) => (
                    <Link
                      key={post._id}
                      className="md:col-span-4 col-span-12 block"
                      to={`/media-details/${post._id}`}
                    >
                      <div className="cs-boxshadow rounded-[15px] h-full flex flex-col justify-between">
                        <div>
                          <div className="relative">
                            {post.mainImage && (
                              <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full max-h-[236px] object-cover rounded-tl-2xl rounded-tr-3xl"
                              />
                            )}

                            {post.categories.length > 0 && (
                              <span className="s-block bg-white p-1 px-2 rounded-3xl text-[#565656] text-sm font-medium absolute top-3 left-3">
                                {post.categories[0].title}
                              </span>
                            )}

                            {post.categories.length > 1 && (
                              <span className="s-block bg-white p-1 px-2 rounded-3xl text-[#565656] text-sm font-medium absolute top-12 left-3">
                                {post.categories[1].title}
                              </span>
                            )}

                          </div>
                          <div className="p-5">
                            <div>
                              <span className="block text-sm font-medium text-[#8A8A8A] mb-2">
                                {new Date(
                                  post.publishedAt
                                ).toLocaleDateString()}
                              </span>
                              <span className="block text-lg text-[#17271F] outfit-medium mb-2">
                                {post.title}
                              </span>
                              <div className="block text-base font-normal text-[#565656]">
                                {truncateText(post.body, 15)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 pb-5">
                          <Link
                            to={`/media-details/${post._id}`}
                            className="block text-base text-[#FF4A3F] outfit-semibold line-text-hover w-fit"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {totalPages > 1 && (
                <div className="col-span-12 lg:mt-10 mt-5">
                  <ul className="flex flex-row items-center justify-center gap-x-3">
                    {currentPage > 1 && (
                      <li className="flex">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          <img
                            src={iconPrev}
                            className="max-w-[32px]"
                            alt="Previous"
                          />
                        </button>
                      </li>
                    )}
                    {[...Array(totalPages).keys()].map((page) => (
                      <li key={page} className="flex">
                        <button
                          onClick={() => handlePageChange(page + 1)}
                          className={`text-[#8A8A8A] border border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 w-8 h-8 flex items-center justify-center rounded-[8px] text-center  ${currentPage === page + 1
                            ? "bg-[#fff] border-[#FF4A3F]  text-[#FF4A3F]"
                            : ""
                            }`}
                        >
                          {page + 1}
                        </button>
                      </li>
                    ))}
                    {currentPage < totalPages && (
                      <li className="flex">
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          <img
                            src={iconNext}
                            className="max-w-[36px]"
                            alt="Next"
                          />
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div
        className={`fixed md:hidden block w-full z-[999999] top-0 left-0 h-screen bg-white transition-all duration-500 translate-x-full ${isFilter ? "is-show-filter" : ""
          }`}
      >
        <div className="flex justify-center border-b border-[#E0E0E0] p-4 relative">
          <h2 className="text-lg outfit-bold text-[#17271F]">Filter</h2>
          <img
            alt=""
            src={closeIcon}
            className="absolute right-5"
            onClick={handleOnClick}
          />
        </div>
        <div className="px-5 flex flex-col justify-between w-full  h-[90dvh] overflow-auto">
          <div>
            <div
              className={`flex justify-between items-center py-5 border-b text-[#17271F] text-base outfit-semibold border-[#CECECE] ${active === 1 ? "fliter-active" : ""
                }`}
              onClick={() => handleAccordin(1)}
            >
              Category
              <img src={downArrow} alt="" />
            </div>
            {active === 1 && (
              <div className="px-3">
                {categories.length > 0 ? (
                  categories.map((c) => (
                    <div
                      key={c._id}
                      className={`flex justify-between items-center py-3 ${c._id === category
                        ? "!text-[#ff4a3f]"
                        : "!text-[#17271F]"
                        } text-base outfit-semibold cursor-pointer`}
                      onClick={() => handleCategoryChange(c._id)}
                    >
                      {c.title}
                    </div>
                  ))
                ) : (
                  <div className="flex justify-between items-center py-3 text-[#17271F] text-base outfit-semibold">
                    No categories available
                  </div>
                )}
              </div>
            )}
            <div
              className={`flex justify-between items-center py-5 border-b text-[#17271F] text-base outfit-semibold border-[#CECECE] ${active === 2 ? "fliter-active" : ""
                }`}
              onClick={() => handleAccordin(2)}
            >
              Year
              <img src={downArrow} alt="" />
            </div>
            {active === 2 && (
              <div className="px-3">
                {yearOptions.map((yearOption) => (
                  <div
                    className={`flex justify-between items-center py-3 ${yearOption === year
                      ? "!text-[#ff4a3f]"
                      : "!text-[#17271F]"
                      } text-base outfit-semibold  cursor-pointer`}
                    onClick={() => handleYearChange(yearOption)}
                  >
                    {yearOption}
                  </div>
                ))}
              </div>
            )}
            <div
              className={`flex justify-between items-center py-5 border-b text-[#17271F] text-base outfit-semibold border-[#CECECE] ${active === 3 ? "fliter-active" : ""
                }`}
              onClick={() => handleAccordin(3)}
            >
              Month
              <img src={downArrow} alt="" />
            </div>
            {active === 3 && (
              <div className="px-3">
                {months.map((monthOption) => (
                  <div
                    className={`flex justify-between items-center py-3 ${monthOption.value === month ? "!text-[#ff4a3f]" : "!text-[#17271F]"
                      } text-base outfit-semibold  cursor-pointer`}
                    onClick={() => handleMonthChange(monthOption.value)}
                  >
                    {monthOption.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 ">
            <button onClick={handleClearFilters} className=" py-2 px-10 border border-[#FF4A3F] text-[#FF4A3F] hover:bg-[#FF4A3F] hover:text-white font-semibold rounded-full w-1/2">
              Clear
            </button>
            <button onClick={handleOnClick} className="ct-button py-2 px-10 w-1/2">Apply filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
