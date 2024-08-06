import React from 'react';
import img1 from '../img/WhatsApp Image 2024-02-28 at 22.35.37_e82063ca.jpg';
import { Link } from 'react-router-dom'; // assuming you're using react-router

const AboutMe = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex flex-col lg:justify-evenly lg:flex-row">
        <div className="flex justify-center">
          <div className="mt-[5rem]">
            <h1 className="text-2xl font-serif flex justify-center">Hello,</h1>
            <h1 className="text-2xl font-bold font-serif flex justify-center">I'm Mayowa</h1>
            <p className="text-xl sm:text-2xl font-serif flex justify-center">A Full-Stack Website Developer</p>
            <img src={img1} alt="Mayowa" className="rounded-3xl h-[30rem] mt-[1rem]" />
          </div>
        </div>
        <div className="lg:w-[50rem] ml-8 mr-8">
          <div>
            <h1 className="text-2xl font-bold font-serif flex justify-center mt-[8rem]">About Me</h1>
            <p className="mt-4 text-[18px]">
              I am Ekundayo Mayowa Timileyin, a developer with a fervent 
              enthusiasm for crafting elegant solutions to complex problems in the 
              digital world. Here's a glimpse into my journey and what drives me:
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">Background:</h1>
            <p className="text-[16px]">
              I am a dedicated, disciplined, and hardworking Full-stack Developer
              with designing and implementing website, and Communication
              specialist with effective use of Social media. 
              My Journey as a website developer began with my curiosity and my desire to create. 
              From tinkering with code snippets to diving deep into programming languages and frameworks, 
              I've crossed a path fueled by a relentless pursuit of knowledge and a starvation for innovation.  
              I have a solid foundation and certification in website development and a voracious appetite for learning. 
              I've honed my skills through hands-on experience, tackling diverse projects and embracing new technologies along the way.
              Each challenge has been an opportunity for growth, pushing me to expand my horizons and refine my craft.
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">Passion:</h1>
            <p>
              As a developer, I’m driven by the thrill of problem-solving and the joy of creation. 
              Whether it's architecting scalable systems, optimizing performance, or crafting intuitive user interfaces, 
              I thrive on the intricacies of the development process and the satisfaction of seeing ideas come to life in 
              the form of functional, elegant solutions.
              Beyond the lines of code, I'm deeply passionate about leveraging technology to make a positive impact on the world around us. 
              Whether it's building tools that streamline business operations, creating applications that enhance user experiences, 
              or contributing to open-source projects that empower communities, I believe in the transformative power of technology to drive meaningful change.
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">Approach:</h1>
            <p>
              As a developer, I bring a blend of creativity, critical thinking, and attention to detail to every project I undertake.
              I believe in the importance of collaboration and communication, working closely with stakeholders 
              to understand their needs and translate them into effective technical solutions.
              I'm a firm believer in lifelong learning, continually seeking out new challenges and opportunities to expand my skill set. 
              Whether it's mastering a new programming language, experimenting with cutting-edge technologies, 
              or staying abreast of industry trends, I'm committed to staying at the forefront of innovation in an ever-evolving landscape.
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">Let's Connect:</h1>
            <p>
              If you're passionate about technology and innovation and are looking for a dedicated developer to bring your ideas to life, I'd love to connect. 
              Whether you're a fellow enthusiast, a prospective collaborator, or someone with a project in mind, feel free to reach out. 
              Let's embark on a journey of creativity, collaboration, and code!
            </p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">Education:</h1>
            <p>B.A. Bachelor of Arts.</p>
            <p>English Language studies, Education at University Of Nigeria (Nsukka).</p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">HiiT Plc (IT training Institute)</h1>
            <p>Python Programming</p>
          </div>
          <br />
          <div>
            <h1 className="font-semibold">APTECH (Computer Education)</h1>
            <p>Full-Stack Website Development</p>
          </div>
          <br />
          <div>
            <p className="text-lg font-semibold font-serif">
              Thank you for taking the time to learn a bit about me. 
              I look forward to the opportunity to work together and create something extraordinary.
            </p>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
