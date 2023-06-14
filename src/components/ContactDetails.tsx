import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const ContactDetails = (socialLinks: any) => {
  let links = socialLinks[0]?.fields || socialLinks?.fields;

  var linksArray = Object.keys(links).map(function (namedIndex) {
    if (namedIndex !== "title" && namedIndex !== "contentType") {
      let link = { linkUrl: links[namedIndex], linkText: namedIndex };
      return link;
    }
  });
  linksArray = linksArray.filter(Boolean);
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto pt-4 pb-20">
      {linksArray.map((link: any, index: number) => {
        const text = link?.linkText;
        const href = link?.linkUrl;
        const icon =
          text === "linkedIn" ? (
            <FaLinkedinIn />
          ) : text === "github" ? (
            <FaGithub />
          ) : text === "email" ? (
            <AiOutlineMail />
          ) : text === "phone" ? (
            <BsFillPersonLinesFill />
          ) : null;

        return (
          <div
            key={index}
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <a href={href} target="_blank">
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
