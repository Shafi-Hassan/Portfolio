import clsx from "clsx";
import Image from "next/image";
import React from "react";

export const Hero = (data: any) => {
  let fields = data?.fields;
  let image = fields?.heroImage?.fields;
  let src = "https:" + image?.file?.url;
  let alt = image?.description;
  let title = fields?.displayTitle;
  let subtitle = fields?.subtitle;
  let textBlack = fields?.textColorBlack
    ? "text-blue-900 bg-white/70 w-full"
    : "text-blue-200";
  return (
    <section className="py-20">
      <div className="w-full aspect-video relative z-0 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes="100vw"
          className="object-cover"
        />
        <div
          className={clsx(
            "absolute text-center w-full h-full flex flex-col items-center justify-center",
            textBlack
          )}
        >
          <h1>{title}</h1>
          <p className="text-lg mt-5">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
