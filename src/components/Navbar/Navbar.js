import React from "react";
import { images } from "../../assets/assets";
import Theme from "../Theme/Theme";
const Navbar = ({theme,toggleTheme }) => {
  return (
    <div className="bg-black h-[70px] w-full px-6 flex justify-between items-center">
      <div>
        <img src={images.logo} alt="logo" className="w-[150px] h-[45px] " />
      </div>
      <div>
        <ul className="list-none flex gap-x-10">
        <li>
          <Theme theme={theme}toggleTheme={toggleTheme} />
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
