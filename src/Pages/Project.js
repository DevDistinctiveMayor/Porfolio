import React from 'react';

const projects = [
  {
    title: "Daily_Pay (Bank website)",
    description: "This project is essentially a banking website that includes a landing page, signup page, login page, and an account dashboard.",
    functionality: [
      "It includes some cool animations to make it dynamic and visually appealing. It's designed to be responsive.",
      "It's important to fill out the entire form with accurate information, as incomplete or incorrect entries will prevent you from proceeding to the next page. To ensure a valid login, avoid using duplicate email addresses or phone numbers. Make sure to fill out the form accordingly.",
      "I also incorporate the use of Regular Expressions (Reg_Exp) to validate passwords and sanitize all input before inserting it into the database. This helps ensure data integrity and security.",
      "To access your dashboard, you'll need to use the email/username and password that you provided during signup. Using incorrect information will result in an error.",
      "The dashboard is where you can check your balance and perform basic transactions. I'll be working on enabling those activities soon."
    ],
    challenges: "Difficulty in avoiding duplicate entries in the database but after making online consultation I got it done.",
    technologies: "Html, css, JavaScript, jQuery, MySQL database, and PHP",
    liveDemo: "https://www.linkedin.com/posts/ekundayo-mayowa-5804761a4_codejourney-activity-7161861546187370496-KzRY?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "TheVaultIQ ERP Web Application (Entacrest)",
    description: "This is an ERP Web application which has the Purchase, Supplier, Payment and many other features",
    functionality: [
      "It has the sign-up form which is mandatory for every user and the OTP authenticator.",
      "It's important to fill out the entire form with accurate information.",
      "I also incorporate the use of Regular Expressions (Reg_Exp) to validate passwords and sanitize all input. This helps ensure data integrity and security.",
      "To access the dashboard in case of purchase or supplier, you'll need to use the email/username and password that you provided during signup. Using incorrect information will result in an error."
    ],
    challenges: "Difficulty in working with the API.",
    technologies: "Html, css/Tailwind, JavaScript, React, Node and Express",
    liveDemo: "https://erp-website-omega.vercel.app"
  },
  {
    title: "Mira_Lux Boutique Website",
    
    discription: [
      "It has the catalog for Women, Men, Accessories.",
      "It includes some cool animations to make it dynamic and visually appealing. It's designed to be responsive."
    ],
    challenges: "Difficulty in working with the API.",
    technologies: "Html, css/Tailwind, JavaScript, React, Node and Express",
    liveDemo: "https://mira-lux.vercel.app/"
  },
  {
    title: "OnfleekQ recruiting exercise",
    description: [
      "Utilizing Google Graph for presenting statistics",
      "Implementing a hamburger icon to display the menu when toggled, visible only on smaller screens.",
      "Enabling navigation to different pages via button clicks on smaller screens.",
      "Integrating Circular Progress Bars to dynamically display specific numbers according to the UI",
      "Leveraging Chart.js to dynamically represent time spent on the site in relation to the design."
    ],
    technologies: "Html, css/Tailwind, JavaScript, React.",
    liveDemo: "https://onfleekq-nine.vercel.app/"
  },
  {
    title: "Blackjack Game",
    description: [
      "It's basically a game",
      "It take a very simple interface which users can simply relate with."
    ],
    functionality: [
      " it has two buttons which one is to get new card and the other one to start game.",
      " The Blackjack number is (21) anything greater will result to 'You are out of the game 😔' while less will result to 'Do your want to draw a new card?😊' but when you get (21) your output will be 'You've got Blackjack'",
        ],
    // challenges: "Difficulty in working with the API.",
    technologies: "Html, css, React, and JavaScript",
    liveDemo: "https://www.linkedin.com/posts/ekundayo-mayowa-5804761a4_hey-wednessday-it-has-been-a-year-in-tech-activity-7171112667972132864-aBRo?utm_source=share&utm_medium=member_desktop"
  },
  
  // Add other projects similarly...
];

const ProjectCard = ({ project }) => (
  <div className="">
    <div className="text-lg">
      <h1 className="text-xl font-semibold mt-5 flex justify-center mb-[1rem]">{project.title}</h1>
      <h2 className="text-[18px] text-slate-600 font-semibold underline">Brief Description:</h2>
      {Array.isArray(project.description) ? (
        project.description.map((item, index) => <p className="mb-2" key={index}>{item}</p>)
      ) : (
        <p className="mb-2">{project.description}</p>
      )}
      {project.functionality && (
        <>
          <h2 className="text-[18px] text-slate-600 font-semibold mt-5 underline">Functionality:</h2>
          {project.functionality.map((item, index) => (
            <p className="mb-2" key={index}>{item}</p>
          ))}
        </>
      )}
      {/* <h2 className="text-[18px] text-slate-600 font-semibold mt-5 underline">Challenges and Solution:</h2>
      <p className="mb-2">{project.challenges}</p> */}
      <h2 className="text-[18px] text-slate-600 font-semibold mt-5 underline">Technology Used:</h2>
      <p className="mb-2">{project.technologies}</p>
      <div className="flex gap-3">
        <h2 className="text-[18px] text-slate-600 font-semibold underline">Code Link:</h2>
        <p className="">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#033a66] text-[15px] hover:bg-[#033a66] hover:text-white p-1 hover:rounded-lg">Live Demo</a>
        </p>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="bg-gradient-to-r from-[#ffffff6f] to-slate-400 pb-[5rem]">
    <div className="flex justify-center">
      <div className="w-[60rem] mt-[4rem] ml-[1rem] md:ml-0">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
