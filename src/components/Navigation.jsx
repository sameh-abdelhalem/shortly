import { useState } from "react";
import logo from "../assets/logo.svg";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="relative container mx-auto p-6 ">
      {/* Flex container for all items */}
      <div className="flex items-center justify-between">
        {/* Flex Container For Logo/Menu */}
        <div className="flex items-center space-x-20">
          {/*logo  */}
          <img src={logo} alt="" />
          {/* Left Menu */}
          <div className="hidden lg:flex space-x-8 font-bold">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>
        {/* Right Button Menus */}
        <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
          <div className="hover:text-veryDarkViolet cursor-pointer">Login</div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>
        {/* @todo Hamburger Menu */}
        <div className={`lg:hidden `}>
          <button
            id="menu-btn"
            type="button"
            className={`block hamburger lg:hidden focus:outline-none z-40 ${
              isOpen && "open"
            }`}
            onClick={openMenuHandler}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* @todo Mobile Menu */}
      <div
        id="menu"
        className={`absolute ${
          isOpen ? "flex" : "hidden"
        } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="pt-6 border-t border-gray-400 w-full text-center"
          >
            Login
          </a>
          <a href="#" className="py-3 rounded-full bg-cyan w-full text-center">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
