"use client";
import Head from "next/head";
import { Hero, NavBar } from "@/components";
import TextPanel from "@/components/TextPanel";
import ContactDetails from "@/components/ContactDetails";

function About(props: any) {
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === "/about") {
      console.log(items[i]);
      pageData = items[i];
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    }
  }
  const hero = pageData?.fields?.hero;
  const textPanel = pageData?.fields?.textPanel;
  const contactDetails = pageData?.fields?.contactDetails;
  console.log(items);
  return (
    <main className="pb-20">
      <NavBar selectedPage={"about"} {...navBarProps} />
      {hero ? <Hero {...hero} /> : null}
      {textPanel ? <TextPanel {...textPanel} /> : null}
      {contactDetails ? <ContactDetails {...contactDetails} /> : null}
    </main>
  );
}

export default About;
