import Link from "next/link";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import {
  Alert,
  Anchor,
  Button,
  Group,
  NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { signUpSchema, supabase } from "~/lib";
import { ApiError } from "@supabase/supabase-js";
import { EMAIL, MIN_AGE, PASSWORD, PATH } from "~/constant";
import { ShieldCheck, AlertCircle } from "tabler-icons-react";
import { useRouter } from "next/router";
import { useStore } from "~/store/store";
import { Layout } from "~/layout";

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

  const handleSignUp = onSubmit(async ({ email, password, age }) => {
    setLoading(true);
    const { session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
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
    <Layout title="sign up">
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
        <form onSubmit={handleSignUp} className="w-96">
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
