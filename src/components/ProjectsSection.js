import React from "react";
import img from "../img/ERP_web.png";
import img1 from "../img/onfleekq (2).png";
import img2 from "../img/Screenshot 2024-08-04 011440.png";
import img3 from "../img/Screenshot 2024-08-04 011716.png"

const ProjectsSection = () => {
  return (
    <div class="bg-slate-100 p-[5rem]">
      <div className="text-center font-semibold font-mono text-[20px]">
        <p>Discover My</p>
      </div>
      <div className="text-center text-3xl mt-5 font-medium font-sans">
        <h1>Projects</h1>
      </div>

      <div className="flex justify-center">

        <div className=" place-content-center gap-8 mt-10 flex">
          <div className="border-2 border-[#033a66] rounded-3xl p-2">
            <div className="text-center">
              <h1 className="text-2xl mt-2 font-bold">Project One</h1>
              <div class="flex justify-center mt-3">
                <img src={img} className="w-[16rem] rounded-lg" alt="img" />
              </div>

              <div class="flex justify-center gap-5 mt-5">
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66]  rounded-xl">
                  <p class=" font-medium text-white">
                    <a href="https://github.com/DevDistinctiveMayor/Erp_web">
                      Github
                    </a>
                  </p>
                </div>
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                  <p class="font-medium text-white">
                    <a href="https://erp-website-omega.vercel.app/">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#033a66] rounded-3xl p-3">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Project Two</h1>
              <div class="flex justify-center mt-3">
                <img src={img2} className="w-[16rem] rounded-lg" alt="img" />
              </div>

              <div class="flex justify-center gap-5 mt-4">
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66]  rounded-xl">
                  <p class=" font-medium text-white">
                    <a href="https://github.com/DevDistinctiveMayor/Dialy_pay_bank_web">
                      Github
                    </a>
                  </p>
                </div>
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                  <p class="font-medium text-white">
                    <a href="https://www.linkedin.com/posts/ekundayo-mayowa-5804761a4_codejourney-activity-7161861546187370496-KzRY?utm_source=share&utm_medium=member_desktop">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="border-2 border-[#033a66] rounded-3xl p-3">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Project Two</h1>
              <div class="flex justify-center mt-3">
                <img src={img3} className="w-[16rem] rounded-lg" alt="img"/>
              </div>

              <div class="flex justify-center gap-5 mt-4">
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66]  rounded-xl">
                  <p class=" font-medium text-white">
                    <a href="https://github.com/DevDistinctiveMayor/Mira_Lux">
                      Github
                    </a>
                  </p>
                </div>
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                  <p class="font-medium text-white">
                    <a href="https://mira-lux.vercel.app/">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#033a66] rounded-3xl p-3">
            <div className="text-center">
              <h1 className="text-2xl mt-5 font-bold">Project Two</h1>
              <div class="flex justify-center mt-3">
                <img src={img1} className="w-[16rem] h-[7rem] rounded-lg" alt="img"/>
              </div>

              <div class="flex justify-center gap-5 mt-4">
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66]  rounded-xl">
                  <p class=" font-medium text-white">
                    <a href="https://github.com/DevDistinctiveMayor/onfleekq.git">
                      Github
                    </a>
                  </p>
                </div>
                <div class="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                  <p class="font-medium text-white">
                    <a href="https://onfleekq-nine.vercel.app/">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
