import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu
  };

  return (
   <div className="fixed w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-slate-50 p-4 shadow-lg shadow-sky-[#334155] z-20">
  <nav className="flex justify-between items-center px-4 sm:px-10">
    <div>
      <h1 className="text-base sm:text-lg lg:text-2xl font-bold cursor-pointer" onClick={() => handleNavigation("/")}>
    Mayowa Ekundayo
      </h1>
    </div>

    <div className="flex items-center">
      {/* Desktop/Menu List */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {/* <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/")}>Home</li> */}
          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/aboutus")}>About</li>
          {/* <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/experience")}>Experience</li>
          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/project")}>Projects</li> */}
          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <label
        className={`menu-toggle md:hidden ml-4 cursor-pointer ${menuOpen ? "open" : ""}`}
        onClick={onToggleMenu}
      >
        <span className="block w-6 h-[2px] bg-white mb-1 transition-all duration-300"></span>
        <span className="block w-6 h-[2px] bg-white mb-1 transition-all duration-300"></span>
        <span className="block w-6 h-[2px] bg-white transition-all duration-300"></span>
      </label>
    </div>
  </nav>

  {/* Mobile Nav List */}
  {menuOpen && (
    <ul className="flex flex-col items-center gap-4 mt-4 md:hidden">
      {/* <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/")}>Home</li> */}
      <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/aboutus")}>About</li>
      {/* <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/experience")}>Experience</li>
      <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/project")}>Projects</li> */}
      <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => handleNavigation("/contact")}>Contact</li>
    </ul>
  )}
</div>

  );
};

export default Navbar;
