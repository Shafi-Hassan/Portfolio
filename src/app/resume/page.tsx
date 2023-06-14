import { createClient } from "contentful";
import Resume from "./resume";

async function getAssets() {
  const client = createClient({
    space: process.env.SPACE as string,
    accessToken: process.env.ACCESS_TOKEN as string,
  });

  const res = await client.getAssets();
  return {
    props: { items: res.items },
  };
}

export default async function Page() {
  const props = await getAssets();
  return <Resume {...props.props} />;
}
