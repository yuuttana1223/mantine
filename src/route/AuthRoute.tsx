import { ReactNode, useEffect, FC, useState } from "react";
import { supabase } from "~/lib";
import { useStore } from "~/store/store";
import { useRouter } from "next/router";
import { PATH } from "~/constant";
import { LoadingOverlay } from "@mantine/core";
import { useEffectOnce } from "~/util/useEffectOnce";
import { SignIn } from "~/pages-component/users/sing-in/SignIn";
import { SignUp } from "~/pages-component/users/sign-up/SignUp";

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthRoute: FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);
  const { push, pathname } = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session);
      if (session === null) {
        await push(PATH.USERS.SIGN_IN);
      }
    });
  });

  useEffectOnce(() => {
    const fetchSession = async () => {
      const session = supabase.auth.session();
      setSession(session);

      if (pathname === PATH.USERS.SIGN_IN || pathname === PATH.USERS.SIGN_UP) {
        if (session) {
          await push(PATH.ROOT);
        }
      } else {
        if (session === null) {
          await push(PATH.USERS.SIGN_IN);
        }
      }
      setLoading(false);
    };
    fetchSession();
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }

  if (session === null) {
    switch (pathname) {
      case PATH.USERS.SIGN_IN:
        return <SignIn />;
      case PATH.USERS.SIGN_UP:
        return <SignUp />;
      default:
        return null;
    }
  }

  return children;
};
