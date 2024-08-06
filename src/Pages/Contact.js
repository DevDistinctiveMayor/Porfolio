import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";


const ContactMe = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff6f] to-slate-400 h-[100vh]">
      <div>
        <div className="flex justify-center">
          <div className="border-2 border-[#033a66] rounded-xl mt-[10rem] text-[#033a66] p-8">
            <div className="ml-">
              <h1 className="text-lg font-semibold mb-3">Contact Information</h1>
              <p className="text-black font-medium">I'am open for any suggestion and <br /> collaboration</p>
              <div>
                <div className="flex gap-4 mt-5">
                <CiLocationOn className='text-[23px]'/>
                  <p className="text- font-semibold">Address: <span className="font-medium">Kano, Nigeria</span></p>
                </div>
                <div className="flex gap-4 mt-5">
                  <MdPhoneInTalk className='text-[23px]'/>
                  <p className="text- font-semibold">Phone: <span className=" font-medium"><a href="tel:+2347034325810">+2347034325810</a></span></p>
                </div>
                <div className="flex gap-4 mt-5">
                  <CiLocationOn className='text-[23px]'/>
                  <p className="text- font-semibold">Email: <span className=" font-medium"><a href="mailto:ekundayomayor@gmail.com">ekundayomayor@gmail.com</a></span></p>
                </div>
                <div className="flex gap-4 mt-5">
                  <FaLinkedin className='text-[23px]'/>
                  <p className="text- font-semibold">LinkedIn: <span className=" font-medium"><a href="https://www.linkedin.com/in/ekundayo-mayowa-5804761a4">Ekundayo Mayowa</a></span></p>
                </div>
                <div className="flex gap-4 mt-5">
                  <FaGithub className='text-[23px]'/>
                  <p className="text- font-semibold">GitHub: <span className=" font-medium"><a href="https://github.com/DevDistinctiveMayor">DevDistinctiveMayor</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
