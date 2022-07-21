import { Layout } from "~/layout";
import { Root } from "~/pages-component/Root";
import type { NextPage } from "next";

const RootPage: NextPage = () => {
  return (
    <Layout title="root">
      <Root />
    </Layout>
  );
};

export default RootPage;
