import React, { useState, useEffect } from "react";

function FullWidthTextSlider() {
  const texts = ["Menu", "Wine List", "Cocktail"];
  const [textIndex, settextIndex] = useState(0);

  function showNextText() {
    settextIndex((index) => {
      if (index === texts.length - 1) return 0;
      return index + 1;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      showNextText();
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="absolute z-10  w-full flex justify-center items-center h-28 overflow-hidden">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`w-full px-[20%] flex justify-center items-center transition-opacity duration-500 ${
            textIndex === index ? "opacity-100" : "opacity-40"
          }`}
          style={{
            transform: `translateX(${(index - textIndex) * 100}%)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          <div className="h-0.5 w-1/4 bg-gray-300"></div>

          <div className="text-center text-5xl font-bold  text-white">
            {text}
          </div>

          <div className="h-0.5 w-1/4 bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
}

export default FullWidthTextSlider;
