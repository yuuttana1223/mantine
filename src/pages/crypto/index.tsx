import { LoadingOverlay } from "@mantine/core";
import { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/component/Feedback/AlertMessage";
import { Crypto } from "~/pages-component/crypto/Crypto";

const CryptoPage: NextPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingOverlay visible overlayOpacity={0} />}>
        <Crypto />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CryptoPage;
