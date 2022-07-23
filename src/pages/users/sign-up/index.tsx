import { Layout } from "~/layout";
import { NextPage } from "next";
import { SignUp } from "~/pages-component/users/sign-up/SignUp";
import { AuthRoute } from "~/provider";

const SingUpPage: NextPage = () => {
  return (
    <AuthRoute>
      <SignUp />
    </AuthRoute>
  );
};

export default SingUpPage;
