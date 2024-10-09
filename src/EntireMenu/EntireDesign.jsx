import React from "react";

const EntireDesign = ({ title, image, description }) => {
  return (
    <div className="text-white w-[270px] text-center ">
      <div className="uppercase mt-5 tracking-widest">{title}</div>
      <img src={image} className="w-[7px] m-auto mb-4" />
      <div className="font-extralight opacity-70 leading-[30px] ">
        {description}
      </div>
    </div>
  );
};

export default EntireDesign;
