import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = (data: any) => {
  const fields = data?.fields;
  const image = fields?.logo?.fields;
  const src = "https:" + image?.file?.url;
  const alt = image?.description;
  const links = fields.links;
  let half =
    links?.length % 2 === 0 ? links?.length / 2 : links?.length / 2 + 0.5;
  const socialLinks = fields.socialLinks;
  return (
    <div className="w-full bg-blue-950 text-white p-8 py-16 flex flex-col justify-between">
      <div className="xl:max-w-[900px] w-full xl:mx-auto">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
          <div className="relative w-[200px] h-[90px]">
            <Image
              src={src}
              alt={alt}
              fill={true}
              className="object-cover"
              sizes="100vW"
            />
          </div>
          <div className="flex flex-col md:flex-row md:max-w-[300px] md:ml-auto md:gap-[90px]">
            <div className="flex flex-col gap-3 text-center md:text-left mt-5 md:mt-0">
              {links.map((link: any, index: any) => {
                let href = link?.fields?.linkUrl;
                let title = link?.fields?.linkText;
                if (index < half) {
                  return (
                    <a
                      key={index}
                      href={href}
                      className="text-white hover:text-blue-200"
                    >
                      {title}
                    </a>
                  );
                }
              })}
            </div>

            <div className="flex flex-col gap-3 mt-3 text-center md:text-left md:mt-0">
              {links.map((link: any, index: any) => {
                let href = link?.fields?.linkUrl;
                let title = link?.fields?.linkText;
                if (index >= half) {
                  return (
                    <a key={index} href={href}>
                      {title}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 w-fit gap-x-5 mx-auto md:mr-0">
          {socialLinks.map((link: any, index: number) => {
            const data = link?.fields;
            const text = data?.linkText;
            const href = data?.linkUrl;
            const icon =
              text === "LinkedIn" ? (
                <FaLinkedinIn />
              ) : text === "GitHub" ? (
                <FaGithub />
              ) : text === "Email" ? (
                <AiOutlineMail />
              ) : text === "Telephone" ? (
                <BsFillPersonLinesFill />
              ) : null;

            return (
              <div
                key={index}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <a href={href} target="_blank">
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
