import React from "react";
import img1 from "../img/1.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] p-10">
      <div className="grid mt-[7rem] place-items-center md:grid-flow-col justify-center gap-10">
        <div>
          <img
            src={img1}
            alt="MAYOR"
            className="h-72 mx-auto object-fill rounded-full border-4 border-slate-300"
          />
        </div>

        <div className="text-center mt-10 font-mono md:-mt-10">
          <h1 className="text-slate-300 text-lg">Hello, I’m</h1>
          <h2 className="text-2xl font-serif font-semibold mt-2 text-white">
            Mayowa Ekundayo
          </h2>
          <h3 className="text-lg mt-2 text-slate-300">
            Full-Stack Developer | Passionate Problem Solver
          </h3>

          <div className="flex justify-center mt-3 gap-4">
            <a
              href="/Cv folder/Ekundayo_mayowa_T.pdf"
              className="border-2 border-sky-500 rounded-xl px-4 py-1 text-sky-500 hover:bg-sky-500 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            <a
              href="/Cv folder/Cover_Letter.pdf"
              className="rounded-xl px-4 py-1 bg-sky-500 text-white hover:bg-sky-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cover Letter
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/ekundayo-mayowa-5804761a4">
              <FaLinkedin className="text-[25px] text-sky-400 hover:text-sky-300 transition" />
            </a>
            <a href="https://github.com/DevDistinctiveMayor">
              <FaGithub className="text-[25px] text-slate-200 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
