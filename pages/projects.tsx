import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config/index";

export default function Projects({ projects }: any) {
    console.log("ht", projects);

    return (
        <Layout>
            <Head>
                <title>Projects</title>
                <meta name="description" content="personal & team projects" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>총 프로젝트 : {projects.results.length}</h1>

            {projects.results.map((item: any, idx: number) => (
                <h1 key={idx}>{item.properties.이름.title[0].plain_text}</h1>
            ))}
        </Layout>
    );
}

export async function getStaticProps() {
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Notion-Version": "2022-02-22",
            "content-type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            sorts: [
                {
                    property: "이름",
                    direction: "ascending",
                },
            ],
            page_size: 100,
        }),
    };

    const res = await fetch(
        `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
        options
    );
    const projects = await res.json();

    const projectNames = projects.results.map(
        (item: any) => item.properties.이름.title[0].plain_text
    );

    return {
        props: { projects }, // will be passed to the page component as props
    };
}
