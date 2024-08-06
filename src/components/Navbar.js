import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    <div className="text-black p-4 fixed w-full bg-slate-100 shadow-2xl shadow-[#033a66] z-20">
      <nav className="flex justify-evenly sm:justify-around">
        <div>
          <h1 className="text-[15px] sm:w-fit font-bold lg:text-2xl">
            <Link to="/">Ekundayo Mayowa TIMILEYIN</Link>
          </h1>
        </div>
        <div className="flex justify-evenly">
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-6">
              <li className="cursor-pointer" onClick={() => handleNavigation("/")}>Home</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/aboutus")}>About</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/experience")}>Experience</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/project")}>Projects</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/contact")}>Contact</li>
            </ul>
          </div>

          <label
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
