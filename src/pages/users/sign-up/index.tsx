import { NextPage } from "next";
import { SignUp } from "~/pages-component/users/sign-up/SignUp";
import { AuthRoute } from "~/provider";

const SignUpPage: NextPage = () => {
  return (
    <AuthRoute>
      <SignUp />
    </AuthRoute>
  );
};

export default SignUpPage;
