import { LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

type RedirectProps = {
  to: string;
};

export const Redirect: FC<RedirectProps> = ({ to }) => {
  const { push } = useRouter();
  useEffect(() => {
    push(to);
  }, [push, to]);

  return <LoadingOverlay visible />;
};
