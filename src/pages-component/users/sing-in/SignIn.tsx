import Link from "next/link";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import {
  Alert,
  Anchor,
  Button,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { signInSchema, supabase } from "~/lib";
import { ApiError } from "@supabase/supabase-js";
import { EMAIL, PASSWORD, PATH } from "~/constant";
import { ShieldCheck, AlertCircle } from "tabler-icons-react";
import { useStore } from "~/store/store";
import { useRouter } from "next/router";
import { Layout } from "~/layout";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const setSession = useStore((state) => state.setSession);
  const { push } = useRouter();
  const { onSubmit, getInputProps } = useForm({
    schema: zodResolver(signInSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = onSubmit(async ({ email, password }) => {
    setLoading(true);
    const { session, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      setError(error);
    } else {
      setSession(session);
      await push(PATH.ROOT);
    }
    setLoading(false);
  });

  return (
    <Layout title="sign in">
      <Group direction="column" position="center">
        <ShieldCheck className="h-16 w-16 text-blue-500" />
        {error && (
          <Alert
            mt="md"
            icon={<AlertCircle className="text-pink-500" />}
            title="Authorization Error"
            color="red"
            radius="md"
          >
            {error.message}
          </Alert>
        )}
        <form onSubmit={handleSignIn} className="w-96">
          <TextInput
            label={EMAIL.LABEL}
            placeholder={EMAIL.PLACEHOLDER}
            autoComplete="username"
            {...getInputProps("email")}
          />
          <PasswordInput
            label={PASSWORD.LABEL}
            placeholder={PASSWORD.PLACEHOLDER}
            mt="sm"
            description={PASSWORD.DESCRIPTION}
            autoComplete="current-password"
            {...getInputProps("password")}
          />
          <Group position="apart" mt="xl">
            <Link href={PATH.USERS.SIGN_UP}>
              <Anchor color="gray" size="sm">
                {`Don't have an account? Register`}
              </Anchor>
            </Link>
            <Button type="submit" loading={loading}>
              Login
            </Button>
          </Group>
        </form>
      </Group>
    </Layout>
  );
};
