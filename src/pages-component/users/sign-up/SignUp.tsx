import Link from "next/link";
import { useForm, zodResolver } from "@mantine/form";
import { useState, useCallback } from "react";
import {
  Anchor,
  Button,
  Group,
  NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { FormData, signUpSchema, supabase } from "~/lib";
import { EMAIL, MIN_AGE, PASSWORD, PATH } from "~/const";
import { ShieldCheck, AlertCircle } from "tabler-icons-react";
import { useRouter } from "next/router";
import { useStore } from "~/store/store";
import { Layout } from "~/layout";
import { AlertMessage } from "~/component/Feedback/AlertMessage";
import { ApiError } from "~/model/error";

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const setSession = useStore((state) => state.setSession);
  const { push } = useRouter();
  const { onSubmit, getInputProps } = useForm({
    schema: zodResolver(signUpSchema),
    initialValues: {
      email: "",
      password: "",
      age: MIN_AGE,
    },
  });

  const handleSignUp = useCallback(
    async ({ email, password, age }: FormData) => {
      try {
        setLoading(true);
        const { session, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          throw new ApiError({ ...error });
        }
        setSession(session);
        await push(PATH.ROOT);
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
    <Layout title="sign up">
      <Group direction="column" position="center">
        <ShieldCheck className="h-16 w-16 text-blue-500" />
        {error && (
          <AlertMessage title={error.name}>{error.message}</AlertMessage>
        )}
        <form onSubmit={onSubmit(handleSignUp)} className="w-96">
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
          <NumberInput
            label="Age"
            mt="sm"
            {...getInputProps("age")}
            description={`Age should be at least ${MIN_AGE} years old`}
          />

          <Group position="apart" mt="xl">
            <Link href={PATH.USERS.SIGN_IN}>
              <Anchor color="gray" size="sm">
                Have an account? Login
              </Anchor>
            </Link>
            <Button type="submit" loading={loading}>
              Register
            </Button>
          </Group>
        </form>
      </Group>
    </Layout>
  );
};
