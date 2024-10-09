import { useEffect, useState, useRef } from "react";
import tableimg from "../../common/TableBookimg.jpg";
import Inputselect from "./Inputselect";

export default function Booktable() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <>
      <div className="relative flex justify-between items-center bg-[#1F3634]">
        <div className="ml-36">
          <p className="tracking-widest text-[70px] uppercase text-white opacity-[10%] font-baskervville">
            <span className="inline-block animate-word-move-right delay-[0s]">
              r
            </span>
            <span className="inline-block animate-word-move-right delay-[0.2s]">
              e
            </span>
            <span className="inline-block animate-word-move-right delay-[0.4s]">
              s
            </span>
            <span className="inline-block animate-word-move-right delay-[0.6s]">
              e
            </span>
            <span className="inline-block animate-word-move-right delay-[0.8s]">
              r
            </span>
            <span className="inline-block animate-word-move-right delay-[1s]">
              v
            </span>
            <span className="inline-block animate-word-move-right delay-[1s]">
              e
            </span>
          </p>
          <p className="uppercase text-white text-3xl ml-5 font-light tracking-widest">
            book a table
          </p>
          <p className="text-white opacity-[50%] mt-4 ml-4">
            *reservations recommended
          </p>
          <Inputselect />
          <button className="border uppercase text-white ml-4 mt-5 py-4 text-[12px] px-14 border-yellow-600 relative">
            Book now
            <span className="absolute inset-0 border border-yellow-600 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </button>
          <p className="mt-5 text-white opacity-[50%] ml-3 ">
            *Powered by OpenTable
          </p>
        </div>

        <div className="w-[37%] mt-36 mr-40 mb-28 relative">
          <img
            src={tableimg}
            alt="tableimg"
            className="w-full rounded-tl-[50%] transition-transform duration-500"
          />
          <div
            className={`absolute bottom-7 font-satisfy text-yellow-500 text-4xl italic font-light transform -translate-x-[10%] rotate-[-6deg] transition-transform duration-500 ${
              scrollDirection === "up"
                ? "translate-y-[-25px]"
                : scrollDirection === "down"
                ? "translate-y-[20px]"
                : ""
            }`}
          >
            Book private dining
            <br /> & banquet rooms
          </div>
        </div>
      </div>
    </>
  );
}
