import React, { useEffect, useState } from 'react';
import food from '../../common/food-2.png';
import personImg from '../../common/person-2.jpg';
import Right from './Right';

const ScrollImage2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      const imageSection = document.getElementById('scroll-image-section-2');
      const sectionTop = imageSection?.offsetTop || 0;
      const sectionHeight = imageSection?.offsetHeight || 0;

      if (scrollPosition >= sectionTop - window.innerHeight && scrollPosition <= sectionTop + sectionHeight) {
       
        const scrollWithinSection = scrollPosition - (sectionTop - window.innerHeight);
        const maxScrollDistance = window.innerHeight;

       
        const newImagePosition = Math.min(scrollWithinSection / maxScrollDistance * 200, 200);
        setImagePosition(newImagePosition);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scroll-image-section-2" className="relative flex items-center justify-start pt-32">
      <div className="w-[39%] h-4/5 ml-40">
        <img
          src={personImg}
          alt="Background"
          className="w-full h-full"
        />
      </div>

      <img
        src={food}
        alt="Foreground"
        className="absolute w-1/6 transition-transform duration-500 ease-out"
        style={{
          transform: `translateY(${200 - imagePosition}px)`,  
          left: '40%',
          top: '40%',
          transformOrigin: 'center',
        }}
      />

      <Right />
    </div>
  );
};

export default ScrollImage2;
