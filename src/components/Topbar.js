import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="py-3 bg-[#F6F6F2] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center flex items-center justify-center">
            <span className="md:text-base text-sm text-[#565656] ct-text-ellipsis ">
              Malaysia Launches First Real Estate RWA Project, TRL, to Tokenize
              $23 Million in Properties.
            </span>
            <Link
              to={`https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties`}
              target="_blank"
              className="text-[#FF4A3F] ml-1 inline-block font-bold line-text-hover md:before:block before:hidden"
            >
              <span className="sm:block hidden">Read&nbsp;More</span>
              <span className="sm:hidden block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.4232 7.40326C12.7478 7.74277 12.7478 8.25203 12.4232 8.55758L5.49705 15.0761C5.13632 15.4156 4.59521 15.4156 4.27055 15.0761C3.90982 14.7705 3.90982 14.2613 4.27055 13.9557L10.5834 8.01437L4.27055 2.03906C3.90982 1.73351 3.90982 1.22425 4.27055 0.918692C4.59521 0.579186 5.13632 0.579186 5.46098 0.918692L12.4232 7.40326Z"
                    fill="#FF4A3F"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
