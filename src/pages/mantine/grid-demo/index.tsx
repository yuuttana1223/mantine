import { Layout } from "~/layout";
import { NextPage } from "next";
import { GridDemo } from "~/pages-component/mantine";

const GridPage: NextPage = () => {
  return (
    <Layout title="grid">
      <GridDemo />
    </Layout>
  );
};

export default GridPage;
