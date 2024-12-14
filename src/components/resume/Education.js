import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-12">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Powerweave Software Services Pvt. Ltd."
          des="As a Web Developer at Powerweave Software Services Pvt. Ltd, I developed and maintained web
applications using HTML, CSS, JavaScript, and ReactJS. I delivered high-quality products on time while
collaborating with back-end developers to optimize code and resolve customer queries. I contributed to
website design, ensured projects met quality standards, and identified areas for system improvement.
Additionally, I provided technical support during system integration and worked closely with various teams
for successful project delivery.
"
        />
        <ResumeCard
          badge="Feb 2020 - Oct 2021"
          title="Ul Developer"
          subTitle="Digital Solution Media"
          des="Worked As a UI Developer at Digital Solution Media, I spent 10 months creating and maintaining user
interfaces for web applications. My responsibilities included developing user-facing features, building
reusable code, and optimizing components for performance. I also troubleshot interface issues, collaborated
with team members, adhered to coding standards, and maintained a clean and organized codebase"
        />
      </div>
      {/* <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div> */}
      <div className="col-span-12">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="hide"
          title="University of Mumbai"
          subTitle="Mumbai, India"
          des="Bachelor of Science in Information Technology, CGPI: 6.10/10"
        />
        <ResumeCard
          badge="hide"
          title="Vidya Varidhi Vidyalaya & Junior College"
          subTitle="Mumbai, India"
          des="Higher Secondary Certificate (HSC) (Science), Score: 61.38%"
        />
        <ResumeCard
          badge="hide"
          title="Purushottam Schoo"
          subTitle="Mumbai, India"
          des="Secondary School Certificate (SSC), Score: 68.80%"
        />
      </div>
    </div>
  );
};

export default Education;
