import React from "react";
import { meetTheTeams } from "../../../../data";

const MeetTheTeam = () => {
  return (
    <div className="mt-20">
      <div className="text-center lg:text-start">
        <h1 className="text-[30px] font-[700] ">Meet The Team</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-5">
        <div className="lg:w-[574px]">
          <p className="text-[16px] text-center lg:text-start text-[#56615F] px-4 lg:px-0">
            {" "}
            A collective of designers, sociologists, and community organizers
            dedicated to rebuilding the social fabric.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <button className="w-[208px] h-[48px] text-[16px] font-[700] bg-[#D9E5E2] cursor-pointer rounded-[30px]">
            Join the Collective
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between mt-20 lg:mt-10">
        {meetTheTeams.map((team, index) => {
          return (
            <div
              key={index}
              className="w-[268px] h-[340px] rounded-[12px] flex flex-col justify-between mt-5 lg:mt-0"
            >
              <div>
                <img src={team.image} alt="" className="rounded-[12px]" />
              </div>

              <div className="text-center  mb-3 lg:mb-0">
                <h1 className="text-[18px]">{team.name}</h1>
                <p className="text-[#56615F] text-[14px]">{team.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetTheTeam;
