import React from "react";
import { images } from "../../assets/assets";
import Theme from "../Theme/Theme";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Navbar = ({ theme, toggleTheme }) => {
  const { isInitialized, logout } = useAuth();
  console.log(isInitialized)
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="bg-black h-[70px] w-full px-6 flex justify-between items-center">
      <div>
        <img src={images.logo} alt="logo" className="w-[150px] h-[45px] " />
      </div>
      <div>
        <ul className="list-none flex gap-x-10">
          <li>
            <Theme theme={theme} toggleTheme={toggleTheme} />
          </li>
          <li>
            {isInitialized ? (
              <p
                className="text-white hover:text-gray-400 cursor-pointer"
                onClick={handleLogout}>
                Logout
              </p>
            ) : (
              <p className="text-white hover:text-gray-400 cursor-pointer">
                Login
              </p>
            )}
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="text-white hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
