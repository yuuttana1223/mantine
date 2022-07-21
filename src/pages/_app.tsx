import { MantineOriginalProvider, ReactQueryProvider } from "~/provider";
import "~/style/tailwind.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryProvider>
      <MantineOriginalProvider>
        <Component {...pageProps} />
      </MantineOriginalProvider>
    </ReactQueryProvider>
  );
};

export default App;
