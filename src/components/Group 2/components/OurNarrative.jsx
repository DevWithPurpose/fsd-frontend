import React from "react";

const OurNarrative = () => {
  return (
    <div className="mt-5 lg:mt-10">
      <h3 className="lg:text-[12px] text-[#1D6A63]">OUR NARRATIVE</h3>



      <div className=" flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[800px] text-[45px] mt-5 lg:text-[72px] lg:mt-0">
          <h1>
            The quiet art of{" "}
            <span className="text-[#1D6A63]">neighborly care. </span>
          </h1>
        </div>

        <div className="w-[384px] ">
          <p className="text-[18px] text-[#56615F] pt-10 lg:pt-25">
            We believe that a community is more than a geographic coordinate; it
            is a shared sanctuary built on the dependability of those who live
            within it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurNarrative;
