import { NextPage } from "next";
import { SignIn } from "~/pages-component/users/sing-in/SignIn";
import { AuthRoute } from "~/provider";

const SingInPage: NextPage = () => {
  return (
    <AuthRoute>
      <SignIn />
    </AuthRoute>
  );
};

export default SingInPage;
