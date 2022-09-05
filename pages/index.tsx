import BuyAsync from "@components/BuyAsync";
import { Footer, Header } from "@components/common";
import Content from "@components/Content";
import Counter from "@components/Counter";
import Navbar from "@components/Navbar";
import States from "@components/States";
import Submitnav from "@components/Submitnav";
import Timerbox from "@components/Timerbox";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Navbar />
      <Content />
      {/* <BuyAsync />
      <Timerbox /> */}
      {/* <States /> */}
      {/* <Counter /> */}
      {/* <Submitnav /> */}
    </Layout>
  );
};

export default Home;
