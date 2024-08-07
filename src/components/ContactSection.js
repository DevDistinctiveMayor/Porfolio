import React, { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const result = await response.text();
    if (response.ok) {
      setStatus('Message sent successfully');
    } else {
      setStatus('Failed to send message');
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#033a66] to-slate-400 p-10 ">
      <div className="text-center font-semibold font-mono text-[20px] text-white">
        <p>Let's Get In Touch</p>
      </div>
      <div className="text-center text-3xl mt-5 font-medium font-sans text-white">
        <h1>Contact Me</h1>
      </div>
      <div className="flex justify-center">
        <form className="flex-col mt-20 w-80 md:w-96" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-black rounded-xl w-full px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-black rounded-xl w-full px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="border-2 border-black rounded-xl w-full px-3 py-2 h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="border-2 border-black rounded-xl w-full px-3 py-2 bg-[#033a66] text-gray-50">
            Send
          </button>
          <div className="text-center mt-4 text-white">{status}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
