import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>msdio Portfolio</title>
                <meta name="description" content="msdio's notion portfolio" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"></div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Before they sold out
                                <br className="hidden lg:inline-block" />
                                readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Copper mug try-hard pitchfork pour-over freegan
                                heirloom neutra air plant cold-pressed tacos
                                poke beard tote bag. Heirloom echo park mlkshk
                                tote bag selvage hot chicken authentic tumeric
                                truffaut hexagon try-hard chambray.
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
