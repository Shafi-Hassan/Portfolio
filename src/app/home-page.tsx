"use client";
import Head from "next/head";
import { Hero, NavBar } from "@/components";
import TextPanel from "@/components/TextPanel";
import ContactDetails from "@/components/ContactDetails";
import Footer from "@/components/Footer";

export default function Home(props: any) {
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === "/") {
      pageData = items[i];
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    } else if (items[i].fields.contentType === "Footer") {
      footerProps = items[i];
    }
  }
  const hero = pageData?.fields?.hero;
  const textPanel = pageData?.fields?.textPanel;
  const contactDetails = pageData?.fields?.contactDetails;
  return (
    <main>
      <NavBar selectedPage={"home"} {...navBarProps} />
      {hero ? <Hero {...hero} /> : null}
      {textPanel
        ? textPanel.map((text: any, index: any) => {
            if (text) return <TextPanel key={index} {...text} />;
            else return null;
          })
        : null}
      {contactDetails ? <ContactDetails {...contactDetails} /> : null}
      <Footer {...footerProps} />
    </main>
  );
}
