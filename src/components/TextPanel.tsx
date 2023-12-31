import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";
import Image from "next/image";

export const TextPanel = (props: any) => {
  const data = props?.fields;
  const overline = data?.overline ?? "";
  const title = data?.displayTitle ?? "";
  const text = data?.text ?? "";
  const align = data?.textAlignCenter;
  const textAlign = align ? "text-center" : "text-left px-4 sm:px-10";
  const textMargin = align ? "m-auto" : "mr-auto";
  const link = data?.link?.fields;
  const image = data?.image?.fields;
  const imageUrl = image ? "http:" + image?.file?.url : "";
  const imageAlt = image ? image?.description : "";
  const href = link ? link?.linkUrl : null;
  const linkText = link ? link.linkText : null;
  let width = image ? "md:w-2/3" : "";
  let layout = data?.rightTextLayout;
  let layoutClasses = layout
    ? "flex-col-reverse md:flex-row-reverse"
    : "flex-col md:flex-row";
  return (
    <div className={clsx("w-full pt-20", textAlign)}>
      <div
        className={clsx(
          "max-w-[1280px] w-full mx-auto flex p-2 justify-center items-center gap-x-16",
          layoutClasses
        )}
      >
        <div className={clsx("w-full", width)}>
          <p className="uppercase text-xl tracking-widest text-gray-600">
            {overline}
          </p>

          <h2 className="py-4 text-gray-700">{title}</h2>

          <div className={clsx("py-4 text-gray-600", textMargin)}>
            {parse(text)}
          </div>

          {link ? (
            <a href={href} className="text-md text-gray underline">
              {linkText}
            </a>
          ) : null}
        </div>
        {image ? (
          <div className="relative w-full md:w-1/2 mx-5 h-auto aspect-video md:aspect-square shadow-xl my-8 shadow-gray-400 hover:scale-105 ease-in duration-300 rounded-xl">
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
