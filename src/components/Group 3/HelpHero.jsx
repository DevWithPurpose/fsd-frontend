import React from "react";
import { IoIosSearch } from "react-icons/io";

const HelpHero = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
        {/* Top hero section */}
      <div className="max-w-304">
        <div className="w-full">
          <h1 className="font-normal text-[48px] md:text-[50px] lg:text-[72px] text-[#2A3433] leading-18 tracking-[-2.6px]">
            How can we <br />{" "}
            <span className="text-[#1D6A63]">support you </span>
            today?
          </h1>
        </div>
        <div className="mt-10">
          <form className="relative max-w-2xl h-16">
            <input
              type="text"
              className="w-full pl-11 h-full bg-[#EEF5F3] placeholder:text-[#6B7280] placeholder:font-normal  placeholder:leading-[100%] placeholder:text-[12.5px] md:placeholder:text-[16px] focus:outline-none"
              placeholder="Search for FAQs, guides, and safety tips..."
            />
            <button  className="absolute top-6 left-5 cursor-pointer">
              <IoIosSearch className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>
      </div>
      {/* middle hero section */}
    </div>
  );
};

export default HelpHero;
