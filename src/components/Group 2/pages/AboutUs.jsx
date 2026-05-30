import React from "react";
import Navbar from "../components/Navbar/Navbar";
import OurNarrative from "../components/OurNarrative";
import OurStory from "../components/OurStory";
import OurValues from "../components/OurValues";
import MeetTheTeam from "../components/MeetTheTeam";
import Rediscover from "../components/Rediscover";
import AboutUsFooter from "../components/AboutUsFooter";

const AboutUs = () => {
  return (
    <div >
      <Navbar />
      <main>
        <section className="p-[15px]">
          <OurNarrative />
          <OurStory />
          <OurValues/>
          <MeetTheTeam/>
          <Rediscover/>
          <AboutUsFooter/>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
