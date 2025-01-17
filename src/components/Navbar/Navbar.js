import React, { useState } from "react";
import { images } from "../../assets/assets";
import Theme from "../Theme/Theme";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Search } from "lucide-react";
import DropdownSearch from "../DropdownSearch/DropdownSearch";
import { data } from "../../utils/data";
import { debounce } from "../../utils/helper";
const Navbar = ({ theme, toggleTheme }) => {
  const [searchText, setSearchText] = useState("");
  const [ searchData,setSearchData] = useState(data)
  const [openModel,setOpenModel] = useState(false)
  const { isInitialized, logout } = useAuth();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const getDelayedResult = (searchText) => {
    const updatedResult = data.filter(item => item.email.toLowerCase().includes(searchText.toLowerCase()))
    setSearchData(updatedResult)
  }
  const debouncedResult = debounce(getDelayedResult,500)
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchText(value);
    debouncedResult(value)
  };
  console.log(searchData)
  return (
    <div className="bg-black h-[70px] w-full px-6 flex justify-between items-center">
      <div>
        <img src={images.logo} alt="logo" className="w-[150px] h-[45px] " />
      </div>
      <div className="relative p-1 rounded w-[400px] flex items-center justify-between bg-white text-black">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className="p-1 outline-none"
        />
        <Search className="mr-2" />
        {searchText.length > 0 && <div className="absolute top-14 left-1">
          <DropdownSearch data={searchData} />
        </div>}
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
