import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, FC } from "react";

// react-queryだと型がなかったので、tanstackを採用
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // デフォルトは失敗しても3回リトライする
      retry: false,
      // windowにフォーカスがあたったときにfetchするのをoffにする
      refetchOnWindowFocus: false,
    },
  },
});

type ReactQueryProviderProps = {
  children: ReactNode;
};

/**
 * @package
 */
export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
