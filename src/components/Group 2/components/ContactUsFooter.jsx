import React from 'react'

const ContactUsFooter = () => {
  return (
    <div className="mt-10 lg:mt-20 ">
      <div className="flex flex-col gap-8 lg:gap-20 p-5">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h1 className="lg:text-[24px] text-[#1D6A63] font-[800]">The Commons</h1>

            <div className="lg:w-[384px] ">
              <p className="text-[14px] text-[#56615F] mt-2 lg:mt-7">
                Built for community, by community.
              </p>
            </div>
          </div>

          <div className='mt-8 lg:mt-0'>
            <h1 className="text-[16px] text-[#2A3433] font-[700] ">Explore</h1>
            <div className="flex flex-col mt-2 lg:mt-7 text-[14px] text-[#56615F]">
              <a href="">Journal</a>
              <a href="" className="my-1 lg:my-3">
                Event
              </a>
            </div>
          </div>

          <div className='mt-8 lg:mt-0'>
            <h1 h1 className="text-[16px] text-[#2A3433] font-[700]">
              Support
            </h1>

            <div className="flex flex-col mt-2  lg:mt-7 text-[14px] text-[#56615F]">
              <a href="">FAQ</a>
              <a href="" className="my-1 lg:my-3">
                Guidelines
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-5 text-[14px] text-[#56615F]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <h4 className="text-[12px] text-[#56615F] mt-2 lg:mt-0">
            © 2024 The Commons Community Interest Corp. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactUsFooter
