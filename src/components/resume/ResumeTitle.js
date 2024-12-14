import React from "react";

const ResumeTitle = ({ icon, title }) => {
  return (
    <h1 className="text-lg secClr uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
      <span className="firstClr text-2xl">{icon}</span>
      {title}
    </h1>
  );
};

export default ResumeTitle;
