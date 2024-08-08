import React from "react";
import { FaBook } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import img1 from '../img/WhatsApp Image 2024-02-28 at 22.35.37_e82063ca.jpg'

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#033a66] to-slate-400 p-10 pb-[10rem] text-slate-100">
      <div className="text-center mt-[2rem] font-semibold font-mono">
        <p>Get To Know More</p>
      </div>
      <div className="text-center text-3xl mt-5 font-medium font-sans">
        <h1>About Me</h1>
      </div>
      <div className="relative flex justify-center">
        <div className="mt-20 place-content-center flex flex-col gap-9 md:flex-row md:justify-center">
          <div className="w-64">
            <img src={img1} alt="Mayor" className="rounded-3xl" />
            <p className="mt-4 md:w-[34rem] md:ml-72 md:-mt-40">
              I am Ekundayo Mayowa Timileyin, a developer with a fervent enthusiasm for crafting elegant solutions to complex problems in the digital world. Here's a glimpse into my journey and what drives me:
            </p>
          </div>
          <div className="border-2 border-white rounded-3xl w-60 h-32">
            <div className="grid place-items-center mt-4">
              <FaBook class="text-[20px]"/>
              <p className="text-xl font-bold">Experience</p>
              <span>3+Years</span>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <div className="border-2 border-white rounded-3xl w-60 h-32">
            <div className="grid place-items-center mt-4">
              <FaRegLightbulb class="text-[20px]"/>
              <p className="text-xl font-bold">Education</p>
              <span>B.A. Bachelor of Arts.</span>
              <span>Full-Stack Dev Aptech.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
