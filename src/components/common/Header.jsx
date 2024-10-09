import React from "react";
import logo from "../../headerLogo/logo.png";
import Rotatebutton from "./curvetext";

export default function Header() {
  return (
    <>
      <div className="relative z-10 text-white pl-12 pr-7 flex justify-between items-center pt-12 font-sans">
        <ul className="flex items-center gap-12 font-sans text-[12px]">
          <li className="cursor-pointer relative group">
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            HOME
          </li>
          <li className="cursor-pointer relative group">
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            MENU
          </li>
          <li className="cursor-pointer relative group">
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            PAGES
          </li>
          <li className="cursor-pointer relative group">
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            SHOP
          </li>
          <li className="cursor-pointer relative group">
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            LANDING
          </li>
        </ul>

        <div className="w-auto pr-36">
          <div className="w-44 h-auto mr-16">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <button className="border text-[12px] p-4 px-14 border-yellow-600 relative">
          BOOK A TABLE
          <span className="absolute inset-0 border border-yellow-600 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </button>
      </div>
      <p className="relative z-10 text-white text-center top-60 text-5xl tracking-widest font-light">
        GOOD TIMES GREATE TASTES
      </p>
      <p className="relative z-10 text-white top-80 left-12 pb-2">/ FIND US</p>
      <p className="relative z-10 text-white top-80 left-12">
        71 Madison Ave, New York,
      </p>
      <p className="relative z-10 text-white top-80 left-12">
        NY 10016, 44 05678966
      </p>

      <div className="relative right-10 ml-auto top-44 flex items-center justify-center w-52 h-52">
        <div className="relative flex items-center  justify-center w-52 h-52 rounded-full backdrop-blur-md border border-yellow-600">
          <div className="absolute inset-0  flex items-center justify-center rounded-full  animate-spin-reverse-slow">
            <div>
              <Rotatebutton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
