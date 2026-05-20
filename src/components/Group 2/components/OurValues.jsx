import React from "react";
import { ourValues } from "../../../../data";

const OurValues = () => {
  return (
    <section className="mt-20">
      <div className="text-center lg:text-start">
        <h1 className="text-[30px] font-[700]">Our Values</h1>
      </div>

      <div className="mt-5 flex flex-col items-center lg:items-start lg:flex-row gap-5 ">
        {ourValues.map((value, index) => {
          return (
            <div
              key={index}
              className="w-[389px] h-[242px] rounded-[12px] p-5 bg-[#EEF5F3]"
            >
              <div className="flex justify-center items-center rounded-[8px] h-[48px] w-[48px] border  ">
                <img
                  src={value.image}
                  alt="icons"
                  className="w-[20px] h-[20px] object-fit"
                />
              </div>

              <h1 className="text-[20px] font-[700] mt-5">{value.heading}</h1>
              <p className="text-[#56615F] text-[14px] mt-4">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurValues;
