import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const NavBar = (data: any) => {
  const fields = data?.fields;
  const image = fields?.logo?.fields;
  const src = "https:" + image?.file?.url;
  const alt = image?.description;
  const links = fields.links;
  const text = fields?.mobileNavFooterText;
  const socialLinks = fields?.mobileNavFooterLinks;
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    setOpen(!open);
  };

  return (
    <section className="fixed w-full h-20 shadow-xl z-50 bg-[#ecf0f3]">
      {!open ? (
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="relative w-[125px] h-[64px]">
            <Image
              src={src}
              alt={alt}
              fill={true}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div>
            <ul className="hidden md:flex">
              {links.map((link: any, index: number) => {
                let href = link?.fields?.linkUrl;
                let title = link?.fields?.linkText;
                return (
                  <Link href={href} key={index}>
                    <li className="px-5 h-20 flex justify-center items-center text:sm uppercase hover:bg-gray-400">
                      {title}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div onClick={menuToggle} className="cursor-pointer md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="fixed right-0 top-0 w-full h-screen bg-black/70 md:hidden">
          <div className="fixed right-0 top-0 w-[90%] sm:w-[60%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div className="flex w-full items-center justify-between pb-5 border-b-2 border-gray">
              <div className="relative w-[125px] h-[64px]">
                <Image
                  src={src}
                  alt={alt}
                  fill={true}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div
                onClick={menuToggle}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className=" mt-5 pb-4 flex flex-col">
              <ul className="uppercase">
                {links.map((link: any, index: number) => {
                  let href = link?.fields?.linkUrl;
                  let title = link?.fields?.linkText;
                  return (
                    <Link href={href} key={index}>
                      <li className="mb-10 text-sm uppercase h-full w-full">
                        {title}
                      </li>
                    </Link>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
        </div>
      ) : null}
    </section>
  );
};
export default NavBar;
