import React from "react";
import img1 from "../img/1.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const ProfileSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#033a66] to-slate-400 p-10">
      <div className="grid mt-[7rem] place-items-center md:grid-flow-col justify-center gap-10">
      <div>
        <img src={img1} alt="MAYOR" className="h-72 mx-auto object-fill rounded-full" />
      </div>
      <div className="ml-8 text-center mt-10 font-mono md:-mt-10">
        <h1 className="text-lg">Hi, I'm</h1>
        <h2 className="text-3xl font-serif font-medium mt-2 text-white">Mayowa</h2>
        <h3 className="text-xl mt-2">Full Stack Web Developer</h3>
        <div className="flex justify-center mt-3">
          <a href="/Cv folder/EKUNDAYO MAYOWA TIMILEYIN UPDATED.pdf" className="border-2 border-[#033a66] rounded-xl w-6/12 text-white" target="_blank" rel="noopener noreferrer">View CV</a>
          <a href="/Cv folder/Mayowa-coverletter.pdf" className="ml-4 rounded-xl w-6/12 bg-[#033a66] text-gray-50" target="_blank" rel="noopener noreferrer">Cover Letter</a>
        </div>
        <div className="flex justify-center gap-4 mt-3 ">
          <a href="https://www.linkedin.com/in/ekundayo-mayowa-5804761a4">
            <FaLinkedin className="text-[25px] text-[#033a66]" />
          </a>
          <a href="https://github.com/DevDistinctiveMayor">
            <FaGithub className="text-[25px] text-white" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileSection;
