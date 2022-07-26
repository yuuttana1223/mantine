import { Alert } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { FallbackProps } from "react-error-boundary";
import { AlertCircle } from "tabler-icons-react";

type AlertMessageProps = {
  title?: string;
  children: ReactNode;
};

export const AlertMessage: FC<AlertMessageProps> = ({ title, children }) => {
  return (
    <Alert
      mt="md"
      icon={<AlertCircle className="text-pink-500" />}
      title={title}
      color="red"
      radius="md"
    >
      {children}
    </Alert>
  );
};

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return <AlertMessage title={error.name}>{error.message}</AlertMessage>;
};
