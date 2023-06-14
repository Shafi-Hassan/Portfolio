"use client";
import React from "react";

export const Resume = (props: any) => {
  let data = props?.items;
  let resume: any = {};
  for (let i = 0; i < data?.length; i++) {
    if (data[i]?.fields?.title === "Resume") {
      resume = data[i]?.fields;
    }
  }
  let src = resume ? resume?.file?.url + "" : "";
  return (
    <div className="p-8">
      <embed
        src={src}
        type="application/pdf"
        className="sm:hidden"
        width="100%"
        height="500px"
      />
      <embed
        src={src}
        type="application/pdf"
        className="hidden sm:block md:hidden"
        width="100%"
        height="700px"
      />
      <embed
        src={src}
        type="application/pdf"
        className="hidden md:block"
        width="100%"
        height="1100px"
      />
    </div>
  );
};

export default Resume;
