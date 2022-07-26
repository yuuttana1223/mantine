import { LoadingOverlay } from "@mantine/core";
import { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/component/Feedback/AlertMessage";
import { ToDos } from "~/pages-component/todos/ToDos";
import { AuthRoute } from "~/provider";

const ToDosPage: NextPage = () => {
  return (
    <AuthRoute>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingOverlay visible overlayOpacity={0} />}>
          <ToDos />
        </Suspense>
      </ErrorBoundary>
    </AuthRoute>
  );
};

export default ToDosPage;
