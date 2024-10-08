import React from "react";
import Slider from "react-slick";
import img from "../img/ERP_web.png";
import img1 from "../img/onfleekq (2).png";
import img2 from "../img/Screenshot 2024-08-04 011440.png";
import img3 from "../img/Screenshot 2024-08-04 011716.png";
import img4 from '../img/Screenshot 2024-08-20 065524.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slider.css"; // Import custom CSS

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 508, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-slate-100 md:p-[5rem] p-[2rem]">
      <div className="text-center font-semibold font-mono text-[20px]">
        <p>Discover My</p>
      </div>
      <div className="text-center text-3xl mt-3 font-medium font-sans">
        <h1>Projects</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl mt-10 ">
          <Slider {...settings} className="">
            <div className="borde shadow-inner  shadow-[#033a66] rounded-3xl p-3 ">
              <div className="text-center">
                <h1 className="text-2xl mt-2 font-bold">Project One</h1>
                <div className="flex justify-center mt-3">
                  <img src={img} className="w-[16rem] rounded-lg" alt="img" />
                </div>
                <div className="flex justify-center gap-5 mt-5">
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://github.com/DevDistinctiveMayor/Erp_web">
                        Github
                      </a>
                    </p>
                  </div>
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://erp-website-omega.vercel.app/">
                        Live Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border- shadow-inner shadow-[#033a66] rounded-3xl sm:p-3 p-2">
              <div className="text-center">
                <h1 className="text-2xl mt-5 font-bold">Project Two</h1>
                <div className="flex justify-center mt-3">
                  <img src={img2} className="w-[16rem] rounded-lg" alt="img" />
                </div>
                <div className="flex justify-center gap-5 mt-4">
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://github.com/DevDistinctiveMayor/Dialy_pay_bank_web">
                        Github
                      </a>
                    </p>
                  </div>
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://www.linkedin.com/posts/ekundayo-mayowa-5804761a4_codejourney-activity-7161861546187370496-KzRY?utm_source=share&utm_medium=member_desktop">
                        Live Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border- shadow-inner shadow-[#033a66] rounded-3xl p-3">
              <div className="text-center">
                <h1 className="text-2xl mt-5 font-bold">Project Three</h1>
                <div className="flex justify-center mt-3">
                  <img src={img3} className="w-[16rem] rounded-lg" alt="img" />
                </div>
                <div className="flex justify-center gap-5 mt-4">
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://github.com/DevDistinctiveMayor/Mira_Lux">
                        Github
                      </a>
                    </p>
                  </div>
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://mira-lux.vercel.app/">
                        Live Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border- shadow-inner shadow-[#033a66] rounded-3xl p-3">
              <div className="text-center">
                <h1 className="text-2xl mt-5 font-bold">Project Four</h1>
                <div className="flex justify-center mt-3">
                  <img src={img4} className="w-[16rem] rounded-lg" alt="img" />
                </div>
                <div className="flex justify-center gap-5 mt-4">
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://github.com/DevDistinctiveMayor/Pinnacle-Forex">
                        Github
                      </a>
                    </p>
                  </div>
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://pinnforex-git-main-distictivemayor.vercel.app/">
                        Live Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border- shadow-inner shadow-[#033a66] rounded-3xl p-3 ">
              <div className="text-center">
                <h1 className="text-2xl mt-5 font-bold">Project Five</h1>
                <div className="flex justify-center mt-3">
                  <img src={img1} className="w-[16rem] h-[7rem] rounded-lg" alt="img" />
                </div>
                <div className="flex justify-center gap-5 mt-4">
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://github.com/DevDistinctiveMayor/onfleekq.git">
                        Github
                      </a>
                    </p>
                  </div>
                  <div className="border-2 border-[#033a66] p-2 text-center bg-[#033a66] rounded-xl">
                    <p className="font-medium text-white">
                      <a href="https://onfleekq-nine.vercel.app/">
                        Live Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
