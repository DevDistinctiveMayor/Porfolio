import React from "react";
import { FaHtml5, FaReact, FaNode, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiPostman,
  SiReact, // For React Native icon
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";

const ExperienceSection = () => {
  return (
    <div className="bg-slate-100 p-10">
      <div className="text-center font-semibold font-mono text-lg">
        <p>Explore My</p>
      </div>
      <div className="text-center mt-2 font-semibold font-mono text-sky-400 text-[22px]">
        <h1>Experiences</h1>
      </div>
      <div className="flex justify-center">
<div className="flex flex-col justify-center mt-8 gap-y-6 lg:flex-row lg:gap-8">

          <div className="border-2 border-black rounded-3xl w-[23rem] h-56">
            <div className="text-center">
              <h1 className="text-[20px] mt-5 mb-4 font-bold">
                Frontend Development
              </h1>
              <div className="mt-3">
                <div className="flex justify-evenly md:gap-14 gap-10">
                  <div>
                    <div className="flex gap-1">
                      <FaHtml5 class="text-[20px] text-orange-500" />
                      <p className="font-bold text-[14px]">HTML</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiTailwindcss class="text-[20px] text-blue-500" />
                      <p className="font-bold text-[14px]">CSS/Tailwind</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-evenly md:gap-14 gap-10 mt-10">
                  <div>
                    <div className="flex gap-2">
                      <RiJavascriptLine class="text-[20px] text-yellow-400" />
                      <p className="font-bold text-[14px]">JavaScript</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-2">
                      <FaReact class="text-[20px] text-blue-500" />
                      <p className="font-bold text-[14px]">React/Next</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black rounded-3xl w-[23rem] h-56">
            <div className="text-center">
              <h1 className="text-[20px] mt-5 mb-4 font-bold">
                Backend Development
              </h1>

              <div className="mt-3">
                <div className="flex justify-evenly md:gap-14 gap-10">
                  <div>
                    <div className="flex gap-1">
                      <FaNode class="text-[23px] text-green-500" />
                      <p className="font-bold text-[14px]">Node</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiMysql class="text-[23px] text-blue-900" />
                      <p className="font-bold text-[14px]">MySQL</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                </div>
                <div className="flex justify-evenly md:gap-14 gap-10 mt-10">
                  <div>
                    <div className="flex md:gap-3 gap-1">
                      <SiPhp class="text-[23px] text-purple-600" />
                      <p className="font-bold text-[14px]">PHP</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex md:gap-3 gap-1">
                      <AiOutlinePython class="text-[23px] text-yellow-500" />
                      <p className="font-bold text-[14px]">Python</p>
                    </div>
                    <span className="text-[13px]">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black rounded-3xl w-[23rem] h-56">
            <div className="text-center">
              <h1 className="text-[20px] mt-5 mb-4 font-bold">
                App Dev / Others
              </h1>
              <div className="mt-3">
                <div className="flex justify-evenly md:gap-14 gap-10">
                  <div>
                    <div className="flex md:gap-3 gap-1">
                      <SiReact class="text-[23px] text-purple-600" />
                      <p className="font-bold text-[14px]">ReactNative</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                </div>

                <div className="flex justify-evenly md:gap-14 gap-8 mt-10">
                  <div>
                    <div className="flex gap-1">
                      <FaGithub class="text-[23px] text-black" />
                      <p className="font-bold text-[14px]">Github</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
                  </div>
                  <div className="">
                    <div className="flex gap-1">
                      <SiPostman class="text-[23px] text-orange-500" />
                      <p className="font-bold text-[13px]">Postman</p>
                    </div>
                    <span className="text-[13px]">Experienced</span>
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
