import { Layout } from "~/layout";
import { Root } from "~/pages-component/Root/Root";
import type { NextPage } from "next";
import { AuthRoute } from "~/provider";

const RootPage: NextPage = () => {
  return (
    <AuthRoute>
      <Root />
    </AuthRoute>
  );
};

export default RootPage;
