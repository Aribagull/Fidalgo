import midimage1 from "../MidImages/Images/Midimage1.jpg";
import midimage2 from "../MidImages/Images/Midimage2.jpg";
import midimage3 from "../MidImages/Images/Midimage3.jpg";

const Midimageslider = () => {
  const images = [midimage1, midimage2, midimage3];

  return (
    <div className="overflow-hidden w-full mt-32">
      <div className="slider flex animate-slide">
        {images.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0  relative">
            <img src={slide} alt="" className="w-full h-[60%] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Midimageslider;
