import React from "react";
import gardenCrops from "../../../assets/gardenCrops.png";
import { FaArrowRight } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between">


        <div className="mt-10 lg:mt-0 lg:w-[576px] lg:h-[720px] ">
          <img
            src={gardenCrops}
            alt="Crops for display"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>


        <div className="lg:w-[576px]  lg:pt-40 lg:ml-10">
          <h1 className="text-[30px] font-[700]">Our Story</h1>
          <div className="text-[18px] text-[#56615F] mt-8">
            <p>
              Founded in the quiet corners of local libraries and neighborhood
              parks, The Commons began with a simple question: How can we make
              asking for help feel as natural as offering it?
            </p>
            <p className="mt-2 lg:mt-8">
              We saw a world where digital connections were getting louder but
              community ties were growing thinner. We set out to build a
              platform that didn't demand your attention, but rather rewarded
              your presence.
            </p>
          </div>
          <div className="flex gap-3 items-center cursor-pointer  font-[700] text-[#1D6A63] mt-8">
            <h3 className="text-[18px]">Learn about our methodology</h3>
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>



      </div>
    </section>
  );
};

export default OurStory;
