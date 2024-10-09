import React, { useEffect, useState } from 'react';
import food from '../../common/food.jpg';
import personImage from '../../common/person.jpg';

const ScrollImage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      const imageSection = document.getElementById('scroll-image-section');
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
    <div id="scroll-image-section" className="relative flex items-center justify-end pt-16">
      <div className='w-[39%] h-4/5 mr-40'>
        <img
          src={food}
          alt="Background"
          className="w-full h-full"
        />
      </div>

      <img
        src={personImage}
        alt="Foreground"
        className="absolute w-1/6 transition-transform duration-500 ease-out"
        style={{
          transform: `translateY(${200 - imagePosition}px)`, 
          left: '40%',
          top: '40%',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
};

export default ScrollImage;
