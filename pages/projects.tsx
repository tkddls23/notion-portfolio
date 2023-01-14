import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config/index";

export default function Projects() {
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
            <h1>Project</h1>
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
        body: JSON.stringify({ page_size: 100 }),
    };

    const res = await fetch(
        `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
        options
    );
    const projects = await res.json();

    const projectIds = projects.results.map((item: any) => item.id);

    console.log(projects);

    return {
        props: {}, // will be passed to the page component as props
    };
}
