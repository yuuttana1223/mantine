import { LoadingOverlay } from "@mantine/core";
import { AvatarPresenter } from "~/pages-component/users/avatar/AvatarPresenter";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/component/Feedback/AlertMessage";
import { Suspense } from "react";

export const AvatarContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingOverlay visible />}>
        <AvatarPresenter />
      </Suspense>
    </ErrorBoundary>
  );
};
