import React from 'react'

const SidenavTitle = ({title,subTitle}) => {
  return (
    <h1 className="font-titleFont text-xl font-semibold secClr tracking-wide relative pb-4 mt-6 border-b-[1px] border-b-zinc-500">
      <span className="firstClr">{title}</span>{subTitle}
      <span className="w-8 h-8 bg-gradient-to-t from-designClr to-gray-600 inline-block rounded-full absolute -left-3 top-0 opacity-10 -z-10"></span>
    </h1>
  );
}

export default SidenavTitle