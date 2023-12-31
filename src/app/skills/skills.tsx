"use client";
import { Hero, NavBar, SkillsPanel, TextPanel, Footer } from "@/components";

export const Skills = (props: any) => {
  let items = props?.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  for (let i = 0; i < items?.length; i++) {
    if (items[i].fields.url === "/skills") {
      pageData = items[i]?.fields;
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    } else if (items[i].fields.contentType === "Footer") {
      footerProps = items[i];
    }
  }
  const hero = pageData?.hero;
  const textPanel = pageData?.textPanel;
  const skillsPanel = pageData?.skills;
  return (
    <main>
      <NavBar selectedPage={"skills"} {...navBarProps} />
      <div className="pb-20">
        {hero ? <Hero {...hero} /> : null}
        {textPanel
          ? textPanel.map((text: any, index: any) => {
              if (text) return <TextPanel key={index} {...text} />;
              else return null;
            })
          : null}
        {skillsPanel ? <SkillsPanel {...skillsPanel[0]} /> : null}
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export default Skills;
