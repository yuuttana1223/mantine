import { NextPage } from "next";
import { SignUp } from "~/pages-component/users/sign-up/SignUp";
import { AuthRoute } from "~/provider";
import { Suspense } from "react";
import { Loader } from "@mantine/core";

const SingUpPage: NextPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthRoute>
        <SignUp />
      </AuthRoute>
    </Suspense>
  );
};

export default SingUpPage;
