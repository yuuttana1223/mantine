import { Root } from "@pages-component/Root";
import type { NextPage } from "next";
import Head from "next/head";

const RootPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Root</title>
      </Head>
      <Root />
    </>
  );
};

export default RootPage;
