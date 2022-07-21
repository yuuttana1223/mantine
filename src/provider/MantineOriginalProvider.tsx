import { MantineProvider } from "@mantine/core";
import { ReactNode, FC } from "react";

type MantineOriginalProviderProps = {
  children: ReactNode;
};

/**
 * @package
 */
export const MantineOriginalProvider: FC<MantineOriginalProviderProps> = ({
  children,
}) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      {children}
    </MantineProvider>
  );
};
