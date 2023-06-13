import {createClient} from "contentful"

export async function getStaticProps(content_type : string){
  const client = createClient({
    space: process.env.SPACE as string,
    accessToken: process.env.ACCESS_TOKEN as string,
  })

  const res = await client.getEntries({ content_type })

  return {props: {skills: res.items}}
}
export default getStaticProps