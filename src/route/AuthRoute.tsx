import { ReactNode, useEffect, FC, useState } from "react";
import { supabase } from "~/lib";
import { useStore } from "~/store/store";
import { useRouter } from "next/router";
import { PATH } from "~/const";
import { LoadingOverlay } from "@mantine/core";
import { Redirect } from "~/route/Redirect";

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
    setSession(supabase.auth.session());
    setLoading(false);
  }, [pathname, push, setSession]);

  if (loading) {
    return <LoadingOverlay visible />;
  }

  switch (pathname) {
    case PATH.USERS.SIGN_IN:
    case PATH.USERS.SIGN_UP:
      if (session) {
        return <Redirect to={PATH.ROOT} />;
      }
      break;
    default:
      if (session === null) {
        return <Redirect to={PATH.USERS.SIGN_IN} />;
      }
  }

  return children;
};
