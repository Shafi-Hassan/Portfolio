import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactDetails from "./ContactDetails";

export const ContactPanel = (props: any) => {
  let contactDetails = props.contactDetails;
  let data = props?.fields;
  let image = data?.image?.fields;
  let src = "http:" + image?.file?.url;
  let alt = image?.description;
  let title = data?.displayTitle;
  let sub = data?.subtitle;
  let text = data?.text;
  let buttonText = data?.buttonText;
  let formLabels = data?.formLabels;
  return (
    <div className="max-w-[1240px] m-auto px-10 pb-16 w-full ">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-8">
          <div className="lg:p-4 h-full ">
            <div className="relative w-full h-auto aspect-video lg:aspect-square">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={src}
                alt={alt}
                fill={true}
                sizes="100vW"
              />
            </div>
            <div className="mt-4">
              <h2 className="py-2">{title}</h2>
              <p>{sub}</p>
              <p className="py-4">{text}</p>
            </div>
            <div>
              <p className="uppercase pt-8">Connect With Me</p>
              <ContactDetails {...contactDetails} />
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              action="https://getform.io/f/bcf06181-173d-4857-bbd1-533ece0c1ab6"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {formLabels[0]}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {formLabels[1]}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">
                  {formLabels[2]}
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">
                  {formLabels[3]}
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">
                  {formLabels[4]}
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows={10}
                  name="message"
                ></textarea>
              </div>

              <button className="w-full p-4 text-gray-100 mt-4">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex">
        <a
          href="/resume"
          className="mx-auto my-10 p-4 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default ContactPanel;
