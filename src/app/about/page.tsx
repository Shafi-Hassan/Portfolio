import { createClient } from "contentful";
import About from "./about";

async function getEntries() {
  const client = createClient({
    space: process.env.SPACE as string,
    accessToken: process.env.ACCESS_TOKEN as string,
  });

  const res = await client.getEntries();
  return {
    props: { items: res.items },
  };
}

export default async function Page() {
  const props = await getEntries();
  return <About {...props.props} />;
}
