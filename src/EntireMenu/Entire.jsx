import React, { useEffect, useRef, useState } from "react";
import EntireDesign from "./EntireDesign";
import EnData from "./EntireData";
import Entirebtn from "./Entirebtn";
import entire1 from "../EntireMenu/Images/entireimg1.jpg";
import entire2 from "../EntireMenu/Images/entireimg2.jpg";
import entire3 from "../EntireMenu/Images/entireimg3.jpg";

export default function Entire() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mt-36 mb-24 grid grid-cols-3" ref={ref}>
        <div className="ml-12">
          <img
            src={entire1}
            alt=""
            className={`w-[70%] rounded-t-full m-auto p-5 h-[45%] transition-transform duration-[3000ms] ease-out ${
              isVisible ? "scale-125" : "scale-100"
            }`}
          />
          <img
            src={entire2}
            alt=""
            className={`w-[60%] rounded-t-full rounded-b-full p-5 mt-20 m-auto transition-transform duration-[3000ms] ease-out ${
              isVisible ? "scale-125" : "scale-100"
            }`}
          />
        </div>

        <div className="flex justify-center items-center flex-col">
          {EnData.map((data, index) => (
            <EntireDesign
              key={index}
              title={data.title}
              image={data.image}
              description={data.description}
            />
          ))}
          <Entirebtn />
        </div>
        <img
          src={entire3}
          alt=""
          className={`w-[80%] h-[55%] rounded-tl-[50%] p-12 rounded-br-[50%] mt-36 transition-transform duration-[2000ms] ease-out ${
            isVisible ? "scale-125" : "scale-100"
          }`}
        />
      </div>
    </>
  );
}
