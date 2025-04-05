import React from 'react';

function InfoProd() {
  const infoCards = [
    {
      title: "Our Heritage",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, architecto.",
      img: "/images/heroimg1.webp",
     
    },
    {
      title: "Our Heritage",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, architecto.",
      img: "/images/heroimg2.webp",
    
    },
    {
      title: "Our Heritage",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, architecto.",
      img: "/images/heroimg3.webp",
    
    },
  ];

  return (
    <div className="w-full min-h-screen p-10 bg-zinc-900 flex flex-col md:flex-row gap-6">
      {infoCards.map((card, index) => (
        <div
          key={index}
          className="hover:bg-[#b6a479] transition-all ease-in-out text-[#ddc79f] hover:text-zinc-900  hover:-translate-y-2 hover:scale-100 duration-250 rounded-xl h-fit md:h-full md:w-1/3 w-full p-5 md:px-4 md:py-10 lg:p-8 flex flex-col items-center"
        >
          <div className="w-full h-[50vw] md:h-[25vw] p-2">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={card.img}
              alt={card.title}
            />
          </div>
          <div className="w-full flex flex-col items-center mt-6">
            <h1 className="text-xl md:text-3xl font-semibold text-center">{card.title}</h1>
            <div className="w-full md:w-2/3 text-center mt-4 px-2">
              <p className="leading-7 text-base md:text-lg">{card.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoProd;
