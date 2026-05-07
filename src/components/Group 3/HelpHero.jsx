import React from "react";
import { IoIosSearch } from "react-icons/io";
import {
  gettingStarted,
  accountSet,
  commGuidelines,
  safety,
} from "../../utils/accountPageData";

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
            <button className="absolute top-6 left-5 cursor-pointer">
              <IoIosSearch className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>
      </div>
      {/* middle hero section */}
      <div className="mt-20 max-w-304 flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
          {gettingStarted.map((g, i) => {
            return (
              <div
                key={i}
                className="w-full lg:-w-[802.67px] min-h-80 bg-[#FFFFFF] flex flex-col justify-between p-8 border border-[#A9B4B21A]/10 rounded-xl"
              >
                <div className="bg-[#A8F0E7] w-12 h-12 rounded-lg flex justify-center items-center">
                  <g.icon color="#045C55" className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-normal text-[30px] leading-9 tracking-[-0.75px]">
                    {g.heading}
                  </p>
                  <p className="max-w-md mt-3 font-normal text-[16px] text-[#56615F] leading-6.5 tracking-0">
                    {g.para}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#1D6A63]">
                  <p className="text-[16px] font-bold leading-6 tracking-0">
                    {g.text}
                  </p>
                  <g.icon2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}

          {safety.map((s, i) => {
            return (
              <div
                key={i}
                className="w-full md:w-[389.33px] h-65.5 p-8 bg-[#B4E4FC] rounded-xl flex flex-col justify-between"
              >
                <div className="bg-[#FFFFFF4D]/30 w-12 h-12 rounded-lg flex justify-center items-center">
                  <s.icon className="w-4 h-5" color="#225468" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-[24px] text-[#225468] leading-8 tracking-[-0.6px]">
                    {s.heading}
                  </p>
                  <p className="font-normal text-[#2D5E72] text-[16px] leading-5.5">
                    {s.para}
                  </p>
                </div>
                <div className="flex justify-end">
                  <s.icon2 className="w-4 h-5" color="#225468" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 w-full flex flex-col md:flex-row justify-between gap-8">
          {accountSet.map((a, i) => {
            return (
              <div
                key={i}
                className="bg-[#E1EAE8] w-full  md:w-[389.33px] h-79.75 rounded-xl p-8 flex flex-col"
              >
                <div className="bg-[#FFFFFF] w-12 h-12 rounded-lg flex justify-center items-center">
                  <a.icon className="w-5 h-4.25" color="#1D6A63" />
                </div>

                <div className="flex flex-col items-start mt-8">
                  <p className="text-[24px] font-normal text-[#2a3433] leading-8 tracking-[-0.6px]">
                    {a.headings}
                  </p>
                  <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
                    {a.para.map((item, index) => (
                      <li
                        key={index}
                        className="text-[14px] text-[#56615F] font-[500] leading-5 tracking-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          {commGuidelines.map((c, i) => {
            return (
              <div
                key={i}
                className="relative w-full h-80 lg:w-[802.67px]  bg-cover bg-center bg-no-repeat rounded-xl flex flex-col justify-center items-start"
                style={{ backgroundImage: `url(${c.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000]/40 to-[#000000]/0 z-0 rounded-xl" />
                <div className="relative z-10 flex flex-col gap-8 mt-15 ml-5">
                  <div className="w-[110.58px] h-5.75 rounded-sm bg-[#1D6A63] px-3 py-1 ">
                    <p className="text-[10px] text-[#ffffff] leading-3.75 font-bold tracking-[1px]">
                      {c.reltext}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <p className="text-[30px] text-[#ffffff] font-normal leading-4 tracking-[-0.75px]">
                      {c.heading}
                    </p>
                    <p className="max-w-[503.51px] font-normal text-[16px] text-[#e1eae8]">
                      {c.para}
                    </p>
                  </div>

                  <button className="w-[158px] h-[36px] bg-[#ffffff] text-[#2A3433] text-[14px] font-bold leading-5 text-center px-6 py-2 rounded-[9999px]">
                    {c.btnText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpHero;
