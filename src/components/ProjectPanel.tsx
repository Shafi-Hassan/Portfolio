import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectPanel = (props: any) => {
  let project = [];
  for (let i = 0; i < Object.keys(props).length; i++) {
    project[i] = props[i];
  }
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {project.map((project: any, index: any) => {
            let data = project?.fields;
            let image = data?.image?.fields;
            let src = "https:" + image?.file?.url;
            let alt = image?.description;
            let title = data?.title;
            let url = data?.projectUrl;
            let sub = data?.text;
            let but = data?.buttonText;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center h-auto aspect-[3/2] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
              >
                <Image
                  className="rounded-xl group-hover:opacity-10"
                  src={src}
                  alt={alt}
                  fill={true}
                  sizes="100vW"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="text-2xl text-white tracking-wider text-center">
                    {title}
                  </h3>
                  <p className="pb-4 pt-2 text-white text-center">{sub}</p>
                  <Link href={url}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                      {but}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
