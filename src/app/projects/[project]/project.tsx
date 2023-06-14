"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Hero,
  NavBar,
  Footer,
  SkillsPanel,
  TextPanel,
  VideoPanel,
} from "@/components";

export const Project = (props: any) => {
  const path = usePathname();
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  let footerProps = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === path) {
      pageData = items[i];
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    } else if (items[i].fields.contentType === "Footer") {
      footerProps = items[i];
    }
  }
  const hero = pageData?.fields?.hero;
  const textPanel = pageData?.fields?.textPanel;
  const skillsPanel = pageData?.fields?.skills;
  const videoPanel = pageData?.fields?.video;
  return (
    <main>
      <NavBar selectedPage={"projects"} {...navBarProps} />
      <div className="pb-20">
        {hero ? <Hero {...hero} /> : null}
        {textPanel ? <TextPanel {...textPanel} /> : null}
        {videoPanel ? <VideoPanel {...videoPanel} /> : null}
        {skillsPanel ? <SkillsPanel {...skillsPanel[0]} /> : null}
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export default Project;
