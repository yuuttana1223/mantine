import { Layout } from "~/layout";
import { ButtonDemo } from "~/pages-component/mantine/button-demo/ButtonDemo";
import { NextPage } from "next";

const ButtonPage: NextPage = () => {
  return (
    <Layout title="button">
      <ButtonDemo />
    </Layout>
  );
};

export default ButtonPage;
