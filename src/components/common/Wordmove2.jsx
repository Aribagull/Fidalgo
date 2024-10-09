import React, { useEffect, useRef, useState } from "react";

const MovingTextOnScroll2 = () => {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <p
      ref={textRef}
      className="text-7xl uppercase text-white opacity-10 tracking-widest font-baskervville"
    >
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[1s]" : ""
        }`}
      >
        C
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[3s]" : ""
        }`}
      >
        u
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[5s]" : ""
        }`}
      >
        i
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[7s]" : ""
        }`}
      >
        s
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[9s]" : ""
        }`}
      >
        i
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[11s]" : ""
        }`}
      >
        n
      </span>
      <span
        className={`inline-block ${
          isInView ? "animate-word-move-right delay-[13s]" : ""
        }`}
      >
        e
      </span>
    </p>
  );
};

export default MovingTextOnScroll2;
