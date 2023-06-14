"use client";
import React from "react";
import { ContactPanel, Hero, NavBar } from "@/components";
import TextPanel from "@/components/TextPanel";
import Footer from "@/components/Footer";

export const Contact = (props: any) => {
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  let contactDetails = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === "/contact") {
      console.log(items[i]);
      pageData = items[i];
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    } else if (items[i].fields.contentType === "Footer") {
      footerProps = items[i];
    } else if (items[i].fields.contentType === "Contact Details") {
      contactDetails = items[i];
    }
  }
  const hero = pageData?.fields?.hero;
  const textPanel = pageData?.fields?.textPanel;
  const contactPanel = pageData?.fields?.contactPanel;
  return (
    <main>
      <NavBar selectedPage={"contact"} {...navBarProps} />
      <div className="pb-20">
        {hero ? <Hero {...hero} /> : null}
        {textPanel ? <TextPanel {...textPanel} /> : null}
        {contactPanel ? (
          <ContactPanel contactDetails={contactDetails} {...contactPanel} />
        ) : null}
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export default Contact;
