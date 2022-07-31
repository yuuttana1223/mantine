import { FC, ReactNode } from "react";
import Head from "next/head";
import { Box, Group, Stack } from "@mantine/core";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ title = "mantine", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Group position="center" className="min-h-screen">
        <header></header>
        <Stack justify="center">{children}</Stack>
        {/* <main className="flex flex-1 flex-col justify-center p-4">
          {children}
        </main> */}
        <footer></footer>
      </Group>
    </>
  );
};
