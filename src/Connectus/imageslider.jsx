import React, { useEffect, useState } from "react";
import imgslider1 from "../Connectus/images/imageslider1.jpg";
import imgslider2 from "../Connectus/images/imageslider2.jpg";
import imgslider3 from "../Connectus/images/imageslider3.jpg";
import imgslider4 from "../Connectus/images/imageslider4.jpg";
import imgslider5 from "../Connectus/images/imageslider5.jpg";

const images = [imgslider1, imgslider2, imgslider3, imgslider4, imgslider5];

export default function ImageSlider() {
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        const firstImage = newImages.shift();
        newImages.push(firstImage);
        return newImages;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-14 mb-7 mr-14">
      <div className="absoulte z-10 flex items-center justify-center transition-all duration-1000">
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slider-image-${index}`}
            className={`w-[230px] pl-12 ${
              index === 0 ? "rounded-tr-[100px] rounded-tl-[140px]" : ""
            } ${index === 2 ? "rounded-br-[120px]" : ""}`}
            style={{ transition: "transform 0.5s ease-in-out" }}
          />
        ))}
      </div>
    </div>
  );
}

// export default function ImageSlider() {
//   return (
//     <div className='mt-14 mb-7 mr-14' >
//       <div className='flex items-center justify-center   '>
//       <img src={imgslider3} alt="" className='w-[230px] pl-12 rounded-tr-[100px] rounded-tl-[140px]'/>
//       <img src={imgslider1} alt="" className='w-[230px] pl-12'/>
//       <img src={imgslider2} alt="" className='w-[230px] pl-12 rounded-br-[120px]'/>
//       <img src={imgslider5} alt="" className='w-[230px] pl-12 rounded-tr-[100px] rounded-tl-[140px]'/>
//       <img src={imgslider4} alt="" className='w-[230px] pl-12 '/>
//       </div>
//     </div>
//   )
// }
