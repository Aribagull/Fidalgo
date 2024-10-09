
const CardDesign = ({ image, title, paragraph1, paragraph2, index}) => {
  return (
    <div className="w-[30%] bg-cyan-600 ">
      
      <img src={image} alt={title} className="w-[80%] h-[60%] object-cover" />
      <div className="p-4 text-center mr-14 ">
        <h2 className="text-xl text-white uppercase tracking-widest text-wrap font-light mb-2">{title}</h2>
        <p className="text-white mb-2 font-light opacity-[70%] ">{paragraph1}</p>
        <p className="text-white mr-16 ml-4 font-light w-[90%] opacity-[70%]">{paragraph2}</p>
      </div>
    </div>
  );
};

export default CardDesign;
