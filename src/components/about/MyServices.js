import React from "react";
// import { FaAppStoreIos } from "react-icons/fa";
// import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Web development refers to the process of creating, building, and maintaining websites and web applications that run on the internet. It involves a combination of technologies, programming languages, and frameworks to deliver interactive and functional user experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Web design is the process of planning, conceptualizing, and creating the visual elements and layout of a website. It focuses on delivering an engaging, user-friendly, and aesthetically pleasing experience while ensuring functionality and responsiveness across devices."
      />
      {/* <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      /> */}
    </div>
  );
};

export default MyServices;
