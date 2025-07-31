import React, { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      const response = await fetch(
        "https://ouragent.com.ng/my_portfolio/email_handle.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("Message sent successfully!");
        // Clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }

    setTimeout(() => setStatus(""), 4000); // Optional auto-clear
  };

  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] p-10 ">
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
          <button
            type="submit"
            className="border-2 border-none rounded-xl w-full px-3 py-2 bg-sky-500 text-gray-50 flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-[#0f172a]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-45"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending...
              </>
            ) : status ? (
              <span>{status}</span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
