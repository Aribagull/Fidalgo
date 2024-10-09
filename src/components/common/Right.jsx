import React from "react";
import Bton from "./Btn";
import MovingTextOnScroll2 from "./Wordmove2";

export default function Right() {
  return (
    <>
      <div className="absolute  right-[-73%] ">
        <div className="">
          <MovingTextOnScroll2 />
        </div>
        <p className="text-white font-light text-4xl tracking-widest w-[15%] ml-8">
          OUR GOALS & HISTORY
        </p>
        <p className="text-white w-[17%] ml-8 mt-4 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad
          mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea.
        </p>
        <Bton />
      </div>
    </>
  );
}
//
