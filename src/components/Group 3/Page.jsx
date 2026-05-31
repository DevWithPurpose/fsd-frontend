import React from "react";
import { useState } from "react";
import closeIcon from "../../assets/close-icon.svg";
import requestIcon from "../../assets/request-icon.svg";
import offerIcon from "../../assets/offer-icon.svg";
import location from "../../assets/location.svg";
import checked from "../../assets/checked.svg";
import communityHelp from "../../assets/community-help.png";
import secureIcon from "../../assets/secure-icon.svg";

function Guidelines({text}) {
  return (
    <div className="flex items-start md:gap-3 gap-2 md:text-sm text-xs leading-[17.5px]">
      <img src={checked} alt="Checked" className="md:w- w-4 md:h- h-4" />
      <p>{text}</p>
    </div>
  );
}

const Page = () => {
  const [desc, setDesc] = useState("");
  const [selectedOption, setSelectedOption] = useState("request");
  return (
    <div className="bg-[#F6FAF8] h-full pb-32.5">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center md:gap-5 gap-3">
          <img src={closeIcon} alt="A close icon" className="md:w-3.5 w-3 md:h-3.5 h-3" />
          <h2 className="text-[#1D6A63] md:text-2xl text-xl font-bold sm:leading-8 leading-5">
            The Commons
          </h2>
        </div>

        <button className="bg-[#EEF5F3] text-sm py-1 px-3 text-center rounded-full text-[#56615F] leading-5">
          Step 1 of 1
        </button>
      </header>

      <section className="mt-8 md:mx-auto mx-5 max-w-212">
        <h1 className="md:text-[56px] sm:text-[40px] text-[35px] md:leading-15 md:tracking-[-2.6px] text-[#2A3433]">
          Share with your{" "}
          <span className="text-[#1D6A63] md:leading-20 tracking-normal sm:block">
            {" "}
            community.
          </span>
        </h1>
        <p className="mt-4 text-[#56615F] text-lg max-w-142">
          Whether you're offering a hand or seeking support, your contribution
          strengthens the digital commons. Keep it clear, keep it kind.
        </p>

        <div className="mt-12 text-[#56615F] flex lg:flex-nowrap flex-wrap items-center gap-12">
          <div>
            <form
              method="post"
              id="post-form"
              className="text-sm"
            >
              <h5 className="text-sm">POST INTENT</h5>
              <div className="flex items-center mt-4.25 gap-4">
                <button
                  className={`border rounded-xl p-5 lg:w-[266.67px] md:w-50 text-left transition-transform ease-in-out hover:scale-95 ${selectedOption === "request" ? "bg-[#A8F0E7] border-[#1D6A63]" : "bg-transparent border-[#A9B4B24D]"}`}
                  onClick={() => setSelectedOption("request")}
                >
                  <img src={requestIcon} alt="Request" />
                  <p className="text-[#2A3433] text-base mt-2 leading-6">
                    Request
                  </p>
                  <p className="md:text-[12px] leading-4">I need some help</p>
                </button>

                <button
                  className={`border rounded-xl p-5 lg:w-[266.67px] md:w-50 text-left transition-transform ease-in-out hover:scale-95 ${selectedOption === "offer" ? "bg-[#A8F0E7] border-[#1D6A63]" : "bg-transparent border-[#A9B4B24D]"}`}
                  onClick={() => setSelectedOption("offer")}
                  >
                  <img src={offerIcon} alt="Offer" />
                  <p className="text-[#2A3433] text-base mt-2 leading-6">Offer</p>
                  <p className="text-[12px] leading-4">I'm lending a hand</p>
                </button>
              </div>

              {/* {selectedOption === "request" && (
                <div>
                </div>
              )}
              {selectedOption === "offer" && (
                <div></div>
              )} */}
              
              <div className="flex flex-col md:gap-10 gap-5 mt-10">
                <div>
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What's happening?"
                    className="border border-[#A9B4B233] bg-[#EEF5F3] p-4 placeholder:text-[#A9B4B299] w-full rounded-t-lg outline-[#A9B4B233] text-base mt-2"
                    required
                    maxLength={75}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <label htmlFor="category">CATEGORY</label>
                    <select
                      name="category"
                      id="category"
                      className="bg-[#EEF5F3] rounded-t-lg border border-[#A9B4B233] w-full p-4 outline-[#A9B4B233] text-base mt-2"
                      required
                    >
                      <option value="household help">Household Help</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="location">LOCATION</label>
                    <div className="relative mt-2">
                      <img
                        src={location}
                        alt="Location"
                        className="absolute top-1/2 left-5 -translate-y-1/2"
                      />
                      <input
                        type="search"
                        name="location"
                        id="location"
                        placeholder="e.g. North Brooklyn"
                        className="w-full bg-[#EEF5F3] border border-[#A9B4B233] rounded-t-lg py-4 pl-12.25 outline-[#A9B4B233] text-base"
                        required
                        minLength={5}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="description">DESCRIPTION</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Provide more details for your neighbors..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="border border-[#A9B4B233] bg-[#EEF5F3] p-4 placeholder:text-[#A9B4B299] w-full rounded-t-lg outline-[#A9B4B233] text-base mt-2 h-[209.25px] resize-none scroll"
                    required
                    maxLength={500}
                  ></textarea>
                  <p
                    className={`text-xs text-right ${desc.length >= 450 ? "text-red-500" : "text-gray-500"}`}
                  >
                    {500 - desc.length} characters remaining
                  </p>
                </div>
              </div>

              <button
                type="submit"
                form="post-form"
                className="text-[#E2FFFA] font-bold md:text-lg text-base md:mt-16 mt-8 bg-linear-[#1D6A63] md:w-[202.59px] w-42.5 py-5 rounded-full cursor-pointer shadow-[0_4_6_-4_#1D6A631A,0_10_15_-3_#1D6A631A] transition-transform ease-in-out hover:scale-95"
              >
                Submit Post
              </button>
            </form>
          </div>

          <div>
            <div className="bg-[#FFFFFF] md:p-8 p-5 rounded-xl flex flex-col md:gap-4 gap-2">
              <h4 className="text-[#2A3433] md:text-xl">Community Guidelines</h4>
              <Guidelines text="Keep descriptions clear and honest." />
              <Guidelines text="Protect your privacy: don't share street addresses publicly." />
              <Guidelines text="Be responsive to those who reply to your post." />
            </div>

            <div className="md:mt-8 mt-5">
              <img src={communityHelp} alt="Community help" />
            </div>

            <div className="bg-[#B4E4FC4D] rounded-xl p-6 md:mt-8 mt-5">
              <div className="flex items-center gap-3">
                <img src={secureIcon} alt="A badge icon" />
                <h4 className="text-[#356579] font-bold tracking-[0.6px] text-[12px] leading-4">
                  SECURE COMMUNITY
                </h4>
              </div>
              <p className="text-[#225468] text-sm mt-1.75 leading-[22.75px]">
                Your post will be visible to verified members of The Commons in
                your local area only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );};

export default Page;
