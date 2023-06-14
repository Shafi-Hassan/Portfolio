"use client";
import { Hero, NavBar, Footer, ContactDetails, TextPanel } from "@/components";

export const About = (props: any) => {
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === "/about") {
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
      <NavBar selectedPage={"about"} {...navBarProps} />
      <div className="pb-20">
        {hero ? <Hero {...hero} /> : null}
        {textPanel ? <TextPanel {...textPanel} /> : null}
        {contactDetails ? <ContactDetails {...contactDetails} /> : null}
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export default About;
