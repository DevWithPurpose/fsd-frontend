import React from "react";

const Rediscover = () => {
  return (
    <div className="mt-20">
      <div className="">
        <div className="flex flex-col gap-7 justify-center items-center bg-[#1D6A63] rounded-[24px]  h-[440px]">
          <h1 className="text-[48px] font-[800] text-[#E2FFFA]">
            Ready to rediscover your community?
          </h1>

          <div className="w-[680px] text-[667px] text-[#E2FFFACC]">
            <p className="text-[18px]">
              Join thousands of neighbors who are already building a more
              resilient, connected{" "}
              <span className="ml-55">world right where they live.</span>
            </p>
          </div>

          <div className="text-[#E2FFFA] font-[700] text-[18px]  flex gap-5">
            <button className="w-[228px] h-[64px] border border-[#E2FFFA4D] rounded-[30px]  hover:bg-white hover:text-[#1D6A63] hover:border-white cursor-pointer">
              Start Exploration
            </button>
            <button className="w-[228px] h-[64px] border border-[#E2FFFA4D] rounded-[30px]  hover:bg-white hover:text-[#1D6A63] hover:border-white cursor-pointer">
              View Help Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rediscover;
