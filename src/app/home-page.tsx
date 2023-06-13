"use client";
import Head from "next/head";
import { Hero, NavBar } from "@/components";

export default function Home(props: any) {
  let items = props.items;
  let pageData = [];
  let navBarProps = {};
  for (let i = 0; i < items.length; i++) {
    if (items[i].fields.url === "/") {
      pageData = items[i];
    } else if (items[i].fields.contentType === "NavBar") {
      navBarProps = items[i];
    }
  }
  let metaTitle = "";
  let metaDescription = "";
  let hero = pageData?.fields?.hero;
  return (
    <main className={""}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" ref="" />
      </Head>

      <NavBar {...navBarProps} />

      <Hero {...hero} />
    </main>
  );
}
