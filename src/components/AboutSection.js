import React from "react";
import { FaBook } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
//import img1 from '../img/WhatsApp Image 2024-02-28 at 22.35.37_e82063ca.jpg'

const AboutSection = () => {
  return (
   <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] pb-10">
  <div className="text-center font-semibold font-mono flex justify-center">
    <div className="w-[19rem] sm:w-[34rem] mt-4">
      <p className="text-sky-400 text-[22px]">Get To Know More</p>
      {/* <img src={img1} alt="Mayor" className="rounded-3xl" /> */}
      <p className="text-slate-200 mt-2 leading-relaxed">
        I am a developer with a fervent enthusiasm for crafting elegant solutions to complex problems in the digital world. Here's a glimpse into my journey and what drives me:
      </p>
    </div>
  </div>

  <div className="flex justify-center text-slate-100">
  <div className="flex justify-center gap-10 mt-10 flex-col sm:flex-row font-mono">

    {/* Experience Card */}
    <div className="border border-sky-500 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl w-[17rem] sm:w-60 h-[9rem] shadow-md hover:shadow-sky-500 transition">
      <div className="grid place-items-center mt-4 text-center">
        <FaBook className="text-[22px] text-sky-400" />
        <p className="text-xl font-bold mt-1">Experience</p>
        <span className="text-sm">3+ Years</span>
        <p className="text-sm">Full-Stack Web Developer</p>
      </div>
    </div>

    {/* Education & Certifications Card */}
    <div className="border border-sky-500 bg-[#1e293b]/50 backdrop-blur-sm rounded-xl w-[17rem] sm:w-60 h-[9rem] shadow-md hover:shadow-sky-500 transition">
      <div className="grid place-items-center mt-4 text-center">
        <FaRegLightbulb className="text-[22px] text-sky-400" />
        <p className="text-xl font-bold mt-1">Education</p>
        <span className="text-sm">B.A. English (Education)</span>
        <span className="text-sm">Full-Stack Dev – Aptech</span>
        <span className="text-sm">Cert: Python, Soft Skills</span>
      </div>
    </div>

  </div>
</div>

  </div>


  );
};

export default AboutSection;
