import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;
