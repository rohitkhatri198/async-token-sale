import BuyAsync from "@components/BuyAsync";
import BuyAsync2 from "@components/BuyAsync2";
import { Footer, Header } from "@components/common";
import Content from "@components/Content";
import Content2 from "@components/Content2";
import Counter from "@components/Counter";
import Navbar from "@components/Navbar";
import StateArray from "@components/StateArray";
import States from "@components/States";
import Submitnav from "@components/Submitnav";
import Timerbox from "@components/Timerbox";
import Timerbox2 from "@components/Timerbox2";
import UseEffects from "@components/UseEffects";
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
      {/* <Navbar />
      <Content />
      <BuyAsync />
      <Timerbox onClicked={undefined} /> */}
      {/* <States /> */}
      {/* <Counter /> */}
      {/* <Submitnav /> */}
      {/* <StateArray /> */}
      {/* <UseEffects /> */}
      <Content2 />
    </Layout>
  );
};

export default Home;
