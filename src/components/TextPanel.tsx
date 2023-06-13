import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";

export const TextPanel = (props: any) => {
  const data = props?.fields;
  const overline = data?.overline;
  const title = data?.displayTitle;
  const text = data?.text;
  const align = data?.textAlignCenter;
  const textAlign = align ? "text-center" : "text-left pl-10";
  const textMargin = align ? "m-auto" : "mr-auto";
  const link = data?.link?.fields;
  const href = link?.linkUrl;
  const linkText = link.linkText;
  console.log(link);
  return (
    <div className={clsx("w-full pt-20", textAlign)}>
      <div className="max-w-[1280px] w-full mx-auto flex p-2 justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
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
      </div>
    </div>
  );
};

export default TextPanel;
