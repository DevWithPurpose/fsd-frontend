import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import contactUs from "../../../assets/contactUs.png";



const Contact = () => {
  return (
    <section className="mt-10 lg:mt-30">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-[576px] lg:h-[953px] p-2 lg:p-0">
          <div>
            <div className="lg:w-[450px]">
              <h1 className="text-[25px] font-[700] lg:text-[50px] text-[#1D6A63]">
                Let's find your place in our story
              </h1>
            </div>
            <div className="lg:w-[448px] mt-5">
              <p className="text-[18px] text-[#56615F]">
                Whether you're looking for support, have a question about
                membership, or just want to say hello, our door is always open.
                At The Commons, community starts with a conversation.
              </p>
            </div>
          </div>

          {/* Email, Address and socials */}
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#CCE8E3]">
                <RxEnvelopeClosed size={20} color="#1D6A63" />
              </span>
              <div>
                <h1 className="text-[14px] lg:text-[16px] font-[700]">
                  Email Us
                </h1>
                <a href="" className="text-[12px] lg:text-[16px]">
                  hello@thecommons.org
                </a>
              </div>
            </div>

            <div className="my-3 flex items-center gap-5">
              <span className="flex justify-center items-center w-[48px] h-[48px] rounded-full  bg-[#CCE8E3]">
                <CiLocationOn size={25} color="#1D6A63" />
              </span>
              <div className="w-[177px]">
                <h1 className="text-[14px] lg:text-[16px] font-[700]">
                  Visit the Library
                </h1>
                <p className="text-[12px] lg:text-[16px]">
                  42nd Archive Street, South District, SD 1024
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center w-[48px] h-[48px] rounded-full  bg-[#CCE8E3]">
                <CiShare2 size={25} color="#1D6A63" />
              </span>
              <div>
                <h1 className="text-[14px] lg:text-[16px] font-[700]">
                  Follow the commons
                </h1>
                <div className="flex gap-3 text-[12px] lg:text-[16px]">
                  <a href="" className="text-[#1D6A63] font-[700]">
                    Instagram
                  </a>
                  <a href="" className="text-[#1D6A63] font-[500]">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-15">
            <img src={contactUs} alt="" />
          </div>
        </div>

        <div className="lg:w-[576px] lg:h-[953px] mt-10 lg:mt-0">
          <div className="h-[805px] bg-[#EEF5F3] rounded-[12px] p-4 lg:p-10">
            <form>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-[#56615F] text-[14px] font-[700]"
                  >
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className=" bg-[#FFFFFF] rounded-[4px] h-[56px] p-3 mt-3"
                  />
                </div>

                <div className="flex flex-col my-5">
                  <label
                    htmlFor="name"
                    className="text-[#56615F] text-[14px] font-[700]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className=" bg-[#FFFFFF] rounded-[4px] h-[56px] p-3 mt-3"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-[#56615F] text-[14px] font-[700]"
                  >
                    SUBJECT
                  </label>

                  <input
                    type="subject"
                    placeholder="Jane Doe"
                    className=" bg-[#FFFFFF] rounded-[4px] h-[56px] p-3 mt-3"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[#56615F] text-[14px] font-[700]"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    name=""
                    id=""
                    placeholder="How can we help you today?"
                    className="h-[152px] bg-[#FFFFFF] mt-3 p-3"
                  ></textarea>
                </div>

                <button className="bg-[#1D6A63] h-[60px] mt-3 rounded-[10px] text-[#E2FFFA] text-[18px] cursor-pointer font-[700]">
                  Send Message
                </button>
                <div className="flex mx-auto lg:w-[434px]">
                  <p className="lg:text-[12px] text-[#727D7B]">
                    By submitting this form, you agree to our Privacy Policy and
                    understand how we{" "}
                    <span className="lg:ml-30">
                      protect your personal sanctuary.
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
