import { LoadingOverlay } from "@mantine/core";
import { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/component/Feedback/AlertMessage";
import { Posts } from "~/pages-component/posts/Posts";
import { AuthRoute } from "~/provider";

const PostsPage: NextPage = () => {
  return (
    <AuthRoute>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingOverlay visible overlayOpacity={0} />}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </AuthRoute>
  );
};

export default PostsPage;
