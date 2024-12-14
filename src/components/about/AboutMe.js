import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Rilesh Sharma</h2>
          <p className="text-base leading-6 ">
            I am a Web Developer from Mumbai, India, with extensive experience in website design and development. I am passionate about creating unique and engaging websites. I would love to discuss how we can collaborate on your next project.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 border-b-[1px] border-b-zinc-800">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            25
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            India
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Mumbai, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
