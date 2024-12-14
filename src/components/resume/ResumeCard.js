import React from "react";

const ResumeCard = ({ badge, title, subTitle, des }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      <h2 className="text-lg secClr text-gray-200 font-medium">
        {title}
      </h2>
      {badge === "hide" ? (
        <h6 className="w-4/12 text-center text-sm py-[1px] secClr border-[1px] border-zinc-600 rounded-md mb-2 hidden">
          hide
        </h6>
      ) : badge === "" ? (
        <h6 className="w-4/12 text-center text-sm py-[1px] text-white border-[1px] border-firstClr bg-firstClr rounded-md mb-2">
          Oct 2021 - Present
        </h6>
      ) : (
        <h6 className="w-4/12 text-center text-sm py-[1px] secClr border-[1px] border-zinc-600 rounded-md mb-2">
          {badge}
        </h6>
      )}
      <p className="text-base text-[#999] -mt-2  font-medium">{subTitle}</p>
      <p className="text-sm text-[#999] font-normal">{des}</p>
    </div>
  );
};

export default ResumeCard;
