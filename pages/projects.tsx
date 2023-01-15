import Head from "next/head";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { DATABASE_ID, TOKEN } from "../config/index";

export default function Projects({ projects }: any) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10 px-6">
                <Head>
                    <title>Projects</title>
                    <meta
                        name="description"
                        content="personal & team projects"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-6xl font-bold sm:text-4xl">
                    총 프로젝트 :
                    <span className="pl-4 text-blue-500">
                        {projects.results.length}
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
                    {projects.results.map((item: any) => (
                        <ProjectItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
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
