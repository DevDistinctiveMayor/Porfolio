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
    <div className="bg-slate-100 p-10">
      <div className="text-center mt-[2rem] font-semibold font-mono text-lg">
        <p>Explore My</p>
      </div>
      <div className="text-center text-3xl mt-5 font-medium font-sans">
        <h1>Experiences</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-col lg:flex justify-center lg:flex-row gap-8 mt-20">
          <div className="sm:w-[20rem] border-2 border-black rounded-3xl md:w-[20rem] h-56">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Frontend Development</h1>
              <div className="mt-3">
                <div className="flex justify-center gap-14">
                  <div>
                    <div className="flex gap-1">
                      <FaHtml5 class="text-[20px] text-orange-500" />
                      <p className="font-bold text-[14px]">HTML</p>
                    </div>
                    <span className="text-[14px] ml-2">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiTailwindcss class="text-[20px] text-blue-500" />
                      <p className="font-bold text-[14px]">CSS/Tailwind</p>
                    </div>
                    <span className="text-[14px] ml-3">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-center gap-14 mt-10">
                  <div>
                    <div className="flex gap-2">
                      <RiJavascriptLine class="text-[23px] text-yellow-400" />
                      <p className="font-bold text-[14px]">JavaScript</p>
                    </div>
                    <span className="text-[14px] ml-3">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-2">
                      <FaReact class="text-[20px] text-blue-500" />
                      <p className="font-bold text-[14px]">React</p>
                    </div>
                    <span className="text-[14px] ml-3">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="sm:w-[20rem] border-2 border-black rounded-3xl md:w-[20rem] h-56">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Backend Development</h1>
              <div className="mt-3">
                <div className="flex justify-center gap-14">
                  <div>
                    <div className="flex gap-1">
                      <FaNode class="text-[23px] text-green-500" />
                      <p className="font-bold text-[14px]">Node</p>
                    </div>
                    <span className="text-[14px] ml-2">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiMysql class="text-[23px] text-blue-900" />
                      <p className="font-bold text-[14px]">MySQL</p>
                    </div>
                    <span className="text-[14px] ml-3">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-center gap-14 mt-10">
                  <div>
                    <div className="flex gap-3">
                      <SiPhp class="text-[20px] text-purple-600" />
                      <p className="font-bold text-[14px]">PHP</p>
                    </div>
                    <span className="text-[14px] ml-3">Intermediate</span>
                  </div>
                  <div className="">
                    <div className="flex gap-3">
                      <AiOutlinePython class="text-[20px] text-yellow-500" />
                      <p className="font-bold text-[14px]">Python</p>
                    </div>
                    <span className="text-[14px] ml-3">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-[20rem] border-2 border-black rounded-3xl md:w-[20rem] h-56">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Others</h1>
              <div className="mt-3">
                <div className="flex justify-center gap-14">
                  <div>
                    <div className="flex gap-1">
                      <FaGithub class="text-[20px] text-" />
                      <p className="font-bold text-[14px]">Github</p>
                    </div>
                    <span className="text-[14px] ml-2">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiPostman class="text-[20px] text-orange-500"  />
                      <p className="font-bold text-[14px]">Postman</p>
                    </div>
                    <span className="text-[14px] ml-3">Experienced</span>
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
