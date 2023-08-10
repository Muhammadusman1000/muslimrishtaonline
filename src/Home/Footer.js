import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandWhatsapp } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#d9128667] py-10">
      <div className="w-full">
        <img src="rishta-logo.png" alt="" className=" w-16 mx-auto" />
      </div>
      <div className="flex justify-between w-32 mx-auto mt-5">
        <Link to="https://www.facebook.com/onlyforeignrishtay/">
          <div className="w-9 h-9 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-blue-800 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <RiFacebookFill size={25} />
          </div>
        </Link>
        <Link to="https://www.instagram.com/muslimrishtaonline/">
          <div className="w-9 h-8 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-rose-600 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <RxInstagramLogo size={25} />
          </div>
        </Link>
        <Link>
          <div className="w-9 h-8 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-green-800 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <TbBrandWhatsapp size={25} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
