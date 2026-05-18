import React from "react";
import Navbar from "../components/Navbar/Navbar";
import OurNarrative from "../components/OurNarrative";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="mt-50">
          <OurNarrative />
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
