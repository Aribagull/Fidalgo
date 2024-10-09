import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-9 z-10 right-9 cursor-pointer border-yellow-600 border text-white h-10 w-10"
          aria-label="Scroll to top"
        >
          <span className=" cursor-pointer  text-xs tracking-wider ">TOP</span>
          <span className="absolute inset-0 border border-yellow-600 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
