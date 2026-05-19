import React from "react";
import { meetTheTeams } from "../../../../data";

const MeetTheTeam = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-[30px] font-[700] ">Meet The Team</h1>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="w-[574px]">
          <p className="text-[16px] text-[#56615F]">
            {" "}
            A collective of designers, sociologists, and community organizers
            dedicated to rebuilding the social fabric.
          </p>
        </div>
        <div>
          <button className="w-[208px] h-[48px] text-[16px] font-[700] bg-[#D9E5E2] cursor-pointer rounded-[30px]">
            Join the Collective
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        {meetTheTeams.map((team, index) => {
          return (
            <div
              key={index}
              className="w-[268px] h-[340px] rounded-[12px] flex flex-col justify-between"
            >
              <div>
                <img src={team.image} alt="" className="rounded-[12px]" />
              </div>

              <div>
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
