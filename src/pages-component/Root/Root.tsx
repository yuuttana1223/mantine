import { ActionIcon, Center } from "@mantine/core";
import { Layout } from "~/layout";
import { Logout, ShieldCheck } from "tabler-icons-react";
import { useCallback } from "react";
import { supabase } from "~/lib";
import { Dropdown } from "~/pages-component/Root/Dropdown";

export const Root = () => {
  const signOut = useCallback(() => {
    supabase.auth.signOut();
  }, []);

  return (
    <Layout title="root">
      <Center>
        <ShieldCheck className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <Dropdown />
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <Logout />
        </ActionIcon>
      </Center>
    </Layout>
  );
};
