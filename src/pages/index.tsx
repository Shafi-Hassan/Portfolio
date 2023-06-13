import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "contentful";
import Head from "next/head";
import { Hero, NavBar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

interface skillProps {
  fields?: {
    logo?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
    title?: string;
  };
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE as string,
    accessToken: process.env.ACCESS_TOKEN as string,
  });

  const res = await client.getEntries();
  return {
    props: { items: res.items },
  };
}

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
  console.log(hero);
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
