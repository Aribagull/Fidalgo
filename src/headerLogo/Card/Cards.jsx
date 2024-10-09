import cardData from "./CardData";
import CardDesign from "./CardDesign";

const Cards = () => {

  return (
    <div className="mt-32 ">
      <p className="text-white text-center tracking-widest uppercase text-3xl ">upcoming events</p>
      <div className="text-white text-center ml-[30%] w-[40%] font-light mb-10 mt-5 flext justify-center opacity-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud</div>
    <div className="flex items-center justify-center ml-20 p-4">
      {cardData.map((data, index) => (

        <CardDesign
          key={index}
          image={data.image}
          title={data.title}
          paragraph1={data.paragraph1}
          paragraph2={data.paragraph2}
          index={index}
         
        />
      ))}
    </div>
    </div>
  );
};

export default Cards;
