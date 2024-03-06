import logo from "../assets/logo.svg";
const Navigation = () => {
  return (
    <nav className="relative container mx-auto p-6">
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
      </div>
      {/* @todo Mobile Menu */}
    </nav>
  );
};

export default Navigation;
