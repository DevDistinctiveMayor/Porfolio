import React from "react";
import { FaBook } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import img1 from '../img/WhatsApp Image 2024-02-28 at 22.35.37_e82063ca.jpg'

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#033a66] to-slate-400 text-slate-100 pb-10">
      <div className="text-center font-semibold font-mono flex justify-center">

        <div className="w-[34rem]">
                  <p>Get To Know More</p>
            {/* <img src={img1} alt="Mayor" className="rounded-3xl" /> */}
            <p className="md:w-[34rem] mt-5">
              I am a Developer with a fervent enthusiasm for crafting elegant solutions to complex problems in the digital world. Here's a glimpse into my journey and what drives me:
            </p>
          </div>
      </div>
      
  
      <div className="justify-center">
        <div className="flex justify-center gap-10 mt-8">
          
          <div className="border-2 border-white rounded-[10px] w-60 h-32">
            <div className="grid place-items-center mt-4">
              <FaBook class="text-[20px]"/>
              <p className="text-xl font-bold">Experience</p>
              <span>3+Years</span>
              <p>Full-Stack Developer</p>
            </div>
          </div>

          <div className="border-2 border-white rounded-[10px] w-60 h-32">
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
