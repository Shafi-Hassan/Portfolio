import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";
import Image from "next/image";

export const TextPanel = (props: any) => {
  const data = props?.fields;
  const overline = data?.overline;
  const title = data?.displayTitle;
  const text = data?.text;
  const align = data?.textAlignCenter;
  const textAlign = align ? "text-center" : "text-left pl-10";
  const textMargin = align ? "m-auto" : "mr-auto";
  const link = data?.link?.fields;
  const image = data?.image?.fields;
  const imageUrl = image ? "http:" + image?.file?.url : "";
  const imageAlt = image ? image?.description : "";
  const href = link ? link?.linkUrl : null;
  const linkText = link ? link.linkText : null;
  return (
    <div className={clsx("w-full pt-20", textAlign)}>
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row p-2 justify-center items-center">
        <div className="w-full md:w-2/3">
          <p className="uppercase text-xl tracking-widest text-gray-600">
            {overline}
          </p>

          <h2 className="py-4 text-gray-700">{title}</h2>

          <div className={clsx("py-4 text-gray-600 max-w-[70%]", textMargin)}>
            {parse(text)}
          </div>

          {link ? (
            <a href={href} className="text-md text-gray underline">
              {linkText}
            </a>
          ) : null}
        </div>
        {image ? (
          <div className="relative w-full md:w-1/2 mx-5 h-auto aspect-video md:aspect-square shadow-xl mt-5 shadow-gray-400 hover:scale-105 ease-in duration-300 rounded-xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill={true}
              sizes={"100vw"}
              className="object-cover rounded-xl"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextPanel;
