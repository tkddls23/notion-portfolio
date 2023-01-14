import Head from "next/head";
import Layout from "../components/layout";

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
