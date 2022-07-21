import { Layout } from "~/layout";
import { NextPage } from "next";
import { GroupDemo } from "~/pages-component/mantine/";

const GroupPage: NextPage = () => {
  return (
    <Layout title="group">
      <GroupDemo />
    </Layout>
  );
};

export default GroupPage;
