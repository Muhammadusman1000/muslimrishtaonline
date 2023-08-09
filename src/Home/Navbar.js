import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full absolute py-16 flex justify-center h-[80px] items-center">
      <div className="w-[95%] absolute z-[2] mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="rishta-logo.png" alt="" className="w-auto h-16" />
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link to="/login">
            <button className="bg-[#8c0b86] text-white font-poppins font-semibold px-4 py-2 rounded hover:bg-[#8c0b86] hover:text-white">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#D91285] text-white font-poppins font-semibold px-4 py-2 rounded hover:bg-[#D91285] hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
