import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#033a66] to-slate-400 p-10 text-white">
      <div className="text-center  font-semibold font-mono text-[20px]">
        <p>Let's Get In Touch</p>
      </div>
      <div className="text-center text-3xl mt-5 font-medium font-sans">
        <h1>Contact Me</h1>
      </div>
      <div className="flex justify-center">
        <form className="flex-col mt-20 w-80 md:w-96">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="border-2 border-black rounded-xl w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="border-2 border-black rounded-xl w-full px-3 py-2" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="border-2 border-black rounded-xl w-full px-3 py-2 h-32"></textarea>
          </div>
          <button type="submit" className="border-2 border-black rounded-xl w-full px-3 py-2 bg-[#033a66] text-gray-50">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
