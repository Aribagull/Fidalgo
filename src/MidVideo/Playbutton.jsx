import React from "react";

const Playbutton = (onClick) => {
  const createPath = (radius, centerX, centerY) => {
    let d = "";

    for (let i = 0; i <= 12; i++) {
      let angle = i * 30;
      let radian = (angle * Math.PI) / 180;

      let x = radius * Math.cos(radian) + centerX;
      let y = radius * Math.sin(radian) + centerY;

      if (i === 0) {
        d += `M${x} ${y} `;
      } else {
        d += `L${x} ${y} `;
      }
    }

    d += "Z";

    return d;
  };
  return (
    <div
      className="absolute top-[40%] left-[46%] w-28 h-28 cursor-pointer"
      onClick={onClick}
    >
      <div className=" relative group cursor-pointer">
        <svg
          version="1.1"
          stroke="white"
          width={150}
          height={150}
          viewBox="0 0 150 150"
          className=""
        >
          <path
            d={createPath(45, 75, 75)}
            stroke="white"
            fill="none"
            className=" "
          />
        </svg>

        <svg
          version="1.1"
          stroke="white"
          viewBox="0 0 120 120"
          width={70}
          height={70}
          className="absolute top-[32%] left-[40%] pointer-events-none"
        >
          <polygon
            points="40,30 70,50 40,70"
            fill="none"
            stroke="white"
            className="pointer-events-none"
          />
        </svg>

        <div className="absolute top-[-17%] left-[-22%] max-w-0 cursor-pointer overflow-hidden group-hover:max-w-[200px] transition-all duration-[1800ms] ease-in-out">
          <svg
            version="1.1"
            stroke="white"
            viewBox="0 0 200 200"
            width={200}
            height={200}
            className="animated-svg rotate-12 group-hover:animate-spin-clockwise "
          >
            <path d={createPath(50, 100, 100)} stroke="white" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Playbutton;
