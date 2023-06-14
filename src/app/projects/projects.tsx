"use client";
import {
  Hero,
  NavBar,
  SkillsPanel,
  TextPanel,
  Footer,
  ProjectPanel,
} from "@/components";

export const Projects = (props: any) => {
  let items = props?.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  for (let i = 0; i < items?.length; i++) {
    if (items[i].fields.url === "/projects") {
      pageData = items[i]?.fields;
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    } else if (items[i].fields.contentType === "Footer") {
      footerProps = items[i];
    }
  }
  const hero = pageData?.hero;
  const textPanel = pageData?.textPanel;
  const projectsPanel = pageData?.projectPanel;
  return (
    <main>
      <NavBar selectedPage={"projects"} {...navBarProps} />
      <div className="pb-20">
        {hero ? <Hero {...hero} /> : null}
        {textPanel ? <TextPanel {...textPanel} /> : null}
        {projectsPanel ? <ProjectPanel {...projectsPanel} /> : null}
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export default Projects;
