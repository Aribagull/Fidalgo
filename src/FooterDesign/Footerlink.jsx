import React from "react";
import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <footer className=" text-white flex justify-between items-center mx-[120px] ">
      <div className=" flex justify-between items-center space-x-6 mb-5">
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white hover:text-gray-400 transition duration-300"
        >
          <FaPinterest size={13} />
          <span className="absolute left-0 bottom-0 w-0 h-[2px] text-center bg-white transition-all duration-300"></span>
        </a>
        <p className="opacity-[70%] text-[13px] cursor-pointer hover:text-gray-400 transition duration-300">
          Pinterest
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white hover:text-gray-400 transition duration-300 "
        >
          <FaInstagram size={13} />
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 "></span>
        </a>
        <p className="opacity-[70%] text-[13px] hover:text-gray-400 transition duration-300 cursor-pointer">
          Instagram
        </p>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white hover:text-gray-400 transition duration-300"
        >
          <FaFacebook size={13} />
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300"></span>
        </a>
        <p className="opacity-[70%] text-[13px] cursor-pointer hover:text-gray-400 transition duration-300">
          Facebook
        </p>
      </div>

      <p className=" text-[11px] tracking-widest mt-4 mb-5">
        © 2024 QODE INTERACTIVE, ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default FooterLinks;
