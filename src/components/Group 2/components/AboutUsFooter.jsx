import React from "react";

const AboutUsFooter = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-20 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[24px] text-[#1D6A63]">The Commons</h1>

            <div className="w-[384px] ">
              <p className="text-[14px] text-[#56615F] mt-7">
                A digital infrastructure for the physical world. Restoring the
                beauty of neighborhood interdependence.
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-[16px] text-[#2A3433] font-[400]">Platform</h1>
            <div className="flex flex-col mt-7 text-[14px] text-[#56615F]">
              <a href="">How it Works</a>
              <a href="" className="my-3">
                Trust & Safety
              </a>
              <a href="">Guidelines</a>
            </div>
          </div>

          <div>
            <h1 h1 className="text-[16px] text-[#2A3433] font-[400]">
              Connect
            </h1>

            <div className="flex flex-col mt-7 text-[14px] text-[#56615F]">
              <a href="">Instagram</a>
              <a href="" className="my-3">
                News teller
              </a>
              <a href="">Contact Support</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h4 className="text-[12px] text-[#56615F]">
            © 2024 The Commons Community Interest Corp. All rights reserved.
          </h4>

          <div className="flex gap-5 text-[14px] text-[#56615F]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFooter;
