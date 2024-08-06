import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const ExperienceSection = () => {
  return (
    <div className="bg-slate-100 md:p-10">
      <div className="text-center mt-[2rem] font-semibold font-mono text-lg">
        <p>Explore My</p>
      </div>
      <div className="text-center text-3xl mt-2 font-medium font-sans">
        <h1>Experiences</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-col lg:flex justify-center lg:flex-row gap-8 mt-8">
          <div className="sm:w-[20rem] p-5 border-2 border-black rounded-3xl md:w-[20rem] h-56">
            <div className="text-center">
              <h1 className="md:text-2xl mt-5 font-bold">Frontend Development</h1>
              <div className="mt-3">
                <div className="flex justify-center md:gap-14 gap-10">
                  <div>
                    <div className="flex gap-1">
                      <FaHtml5 class="md:text-[20px] text-orange-500" />
                      <p className="font-bold md:text-[14px] text-[11px]">HTML</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiTailwindcss class="md:text-[20px] text-blue-500" />
                      <p className="font-bold md:text-[14px] text-[11px]">CSS/Tailwind</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-center md:gap-14 gap-10 mt-10">
                  <div>
                    <div className="flex gap-2">
                      <RiJavascriptLine class="md:text-[23px] text-yellow-400" />
                      <p className="font-bold md:text-[14px] text-[11px]">JavaScript</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-2">
                      <FaReact class="md:text-[20px] text-blue-500" />
                      <p className="font-bold md:text-[14px] text-[11px]">React</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="sm:w-[20rem] border-2 border-black rounded-3xl md:w-[20rem] h-56 md:mt-0 mt-7">
            <div className="text-center">
              <h1 className="md:text-2xl mt-5 font-bold">Backend Development</h1>
              <div className="mt-3">
                <div className="flex justify-center md:gap-14 gap-10">
                  <div>
                    <div className="flex gap-1">
                      <FaNode class="md:text-[23px] text-green-500" />
                      <p className="font-bold md:text-[14px] text-[11px]">Node</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiMysql class="md:text-[23px] text-blue-900" />
                      <p className="font-bold md:text-[14px] text-[11px]">MySQL</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-center md:gap-14 gap-10 mt-10">
                  <div>
                    <div className="flex md:gap-3 gap-1">
                      <SiPhp class="md:text-[20px] text-purple-600" />
                      <p className="font-bold md:text-[14px] text-[11px]">PHP</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Intermediate</span>
                  </div>
                  <div className="">
                    <div className="flex md:gap-3 gap-1">
                      <AiOutlinePython class="md:text-[20px] text-yellow-500" />
                      <p className="font-bold md:text-[14px] text-[11px]">Python</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-[20rem] border-2 border-black rounded-3xl md:w-[20rem] md:h-56 h-[8rem] md:mt-0 mt-7">
            <div className="text-center">
              <h1 className="md:text-2xl mt-5 font-bold">Others</h1>
              <div className="mt-3">
                <div className="flex justify-center md:gap-14 gap-8">
                  <div>
                    <div className="flex gap-1">
                      <FaGithub class="md:text-[20px] text-" />
                      <p className="font-bold md:text-[14px] text-[11px]">Github</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiPostman class="md:text-[20px] text-orange-500"  />
                      <p className="font-bold md:text-[14px] text-[11px]">Postman</p>
                    </div>
                    <span className="md:text-[14px] text-[12px] md:ml-2 ml-[1rem]">Experienced</span>
                  </div>
                </div>
                {/* <div className="flex justify-center gap-14 mt-10">
                  <div>
                    <div className="flex gap-3">
                      <SiPhp class="text-[20px]" />
                      <p className="font-bold text-[14px]">PHP</p>
                    </div>
                    <span className="text-[14px] ml-3">Intermediate</span>
                  </div>
                  <div className="">
                    <div className="flex gap-3">
                      <AiOutlinePython class="text-[20px]" />
                      <p className="font-bold text-[14px]">Python</p>
                    </div>
                    <span className="text-[14px] ml-3">Basic</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
