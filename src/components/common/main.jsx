import React from "react";
import h1icon from "../../common/h1icon.png";
import ScrollImage from "./Scrollimg";
import Left from "./Left";
import ScrollImage2 from "./Scrollimg2";
import Booktable from "./Booktable";
import Cards from "../../headerLogo/Card/Cards";
import ConnectUs from "../../Connectus/Connect";
import Midvideo from "../../MidVideo/Midvideo";
import Entire from "../../EntireMenu/Entire";
import ScrollToTopButton from "./TopButton";
import Midimageslider from "../../MidImages/Midimage";

export default function Main() {
  return (
    <div className="overflow-x-hidden ">
      <div className="mx-auto pt-40 pb-10 w-36">
        <img src={h1icon} alt="" />
      </div>
      <p className="text-center text-white uppercase text-3xl tracking-widest font-light ">
        Fidalgo is for everyone who
      </p>
      <p className="text-center text-white uppercase text-3xl tracking-widest font-light">
        collects beautiful moments
      </p>
      <p className="font-satisfy text-center text-yellow-500 text-4xl pt-5 pb-16 font-light">
        For the best memories
      </p>
      <div className="">
        <ScrollToTopButton />
        <Left />
        <ScrollImage />
        <ScrollImage2 />
        <Midimageslider />
        <Entire />
        <Booktable />
        <Midvideo />
        <Cards />
        <ConnectUs />
      </div>
    </div>
  );
}
