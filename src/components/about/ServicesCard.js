import React from "react";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
      <span className="text-4xl firstClr mb-2">{icons}</span>
      <h2 className="font-titleFont secClr text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
