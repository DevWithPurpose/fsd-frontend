import React from "react";

const Rediscover = () => {
  return (
    <div className="mt-20">
      <div className="">
        <div className="flex flex-col gap-7 justify-center items-center bg-[#1D6A63] rounded-[24px]  lg:h-[440px] py-10 lg:py-0">
          <h1 className="text-[25px] text-center lg:text-start lg:text-[48px] font-[800] text-[#E2FFFA]">
            Ready to rediscover your community?
          </h1>

          <div className="w-full lg:w-[680px] text-[667px] text-[#E2FFFACC]">
            <p className="text-[18px] px-6 lg:px-0">
              Join thousands of neighbors who are already building a more
              resilient, connected{" "}
              <span className="lg:ml-55">world right where they live.</span>
            </p>
          </div>

          <div className="text-[#E2FFFA] font-[700] text-[14px] lg:text-[18px]  flex gap-2 lg:gap-5">
            <button className="lg:w-[228px] p-3 lg:p-0 lg:h-[64px] border border-[#E2FFFA4D] rounded-[30px]  hover:bg-white hover:text-[#1D6A63] hover:border-white cursor-pointer">
              Start Exploration
            </button>
            <button className="w-[150px] lg:w-[228px] lg:h-[64px] border border-[#E2FFFA4D] rounded-[30px]  hover:bg-white hover:text-[#1D6A63] hover:border-white cursor-pointer">
              View Help Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rediscover;
