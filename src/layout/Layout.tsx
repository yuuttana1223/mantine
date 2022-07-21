import { FC, ReactNode } from "react";
import Head from "next/head";

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
      <div className="flex min-h-screen">
        <header></header>
        <main className="flex flex-1 flex-col justify-center p-4">
          {children}
        </main>
        <footer></footer>
      </div>
    </>
  );
};
