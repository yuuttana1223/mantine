import Link from "next/link";
import { useForm, zodResolver } from "@mantine/form";
import { useState, useCallback } from "react";
import { Anchor, Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { FormData, signInSchema, supabase } from "~/lib";
import { EMAIL, PASSWORD, PATH } from "~/const";
import { ShieldCheck } from "tabler-icons-react";
import { useStore } from "~/store/store";
import { useRouter } from "next/router";
import { Layout } from "~/layout";
import { AlertMessage } from "~/component/Feedback/AlertMessage";
import { ApiError } from "~/model/error";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const setSession = useStore((state) => state.setSession);
  const { push } = useRouter();
  const { onSubmit, getInputProps } = useForm({
    schema: zodResolver(signInSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = useCallback(
    async ({ email, password }: Omit<FormData, "age">) => {
      setLoading(true);
      try {
        const { session, error } = await supabase.auth.signIn({
          email,
          password,
        });
        if (error) {
          throw new ApiError({ ...error });
        } else {
          setSession(session);
          await push(PATH.ROOT);
        }
      } catch (error) {
        if (error instanceof ApiError) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    },
    [push, setSession]
  );

  return (
    <Layout title="sign in">
      <Group direction="column" position="center">
        <ShieldCheck className="h-16 w-16 text-blue-500" />
        {error && (
          <AlertMessage title={error.name}>{error.message}</AlertMessage>
        )}
        <form onSubmit={onSubmit(handleSignIn)} className="w-96">
          <TextInput
            label={EMAIL.LABEL}
            placeholder={EMAIL.PLACEHOLDER}
            autoComplete={EMAIL.AUTO_COMPLETE}
            {...getInputProps(EMAIL.NAME)}
          />
          <PasswordInput
            label={PASSWORD.LABEL}
            placeholder={PASSWORD.PLACEHOLDER}
            mt="sm"
            description={PASSWORD.DESCRIPTION}
            autoComplete={PASSWORD.AUTO_COMPLETE}
            {...getInputProps(PASSWORD.NAME)}
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
