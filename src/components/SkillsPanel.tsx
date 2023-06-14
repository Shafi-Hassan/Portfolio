import Image from "next/image";
import React from "react";

export const SkillsPanel = (data: any) => {
  let skills = data?.fields?.skills;
  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 w-full max-w-[1240px] mx-auto gap-8">
      {skills?.map((skill: any, index: any) => {
        let title = skill?.fields?.title;
        let src = "https:" + skill?.fields?.file?.url;
        let alt = skill?.fields?.description;
        return (
          <div
            key={index}
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="w-16 h-16 aspect-square relative">
                <Image
                  src={src}
                  alt={alt}
                  fill={true}
                  sizes="64px"
                  className=" object-fill"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsPanel;
