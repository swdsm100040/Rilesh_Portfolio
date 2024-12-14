import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-6">
        <div className="px-6">
          <ProjectsCard
            title="Denkali"
            link="https://www.denkali.com/"
            category="Website"
            image={workImgOne}
          />
          <ProjectsCard
            title="Sprightly"
            link="https://sprightlyfood.ewizsaas.com/"
            category="Website"
            image={workImgTwo}
          />
         
        </div>
        <div className="px-6">
           <ProjectsCard
            title="Sureviz"
            link="https://www.surevizsafety.com/"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="TerryTown"
            link="https://www.terrytown.com/"
            category="Website"
            image={workImgFour}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
