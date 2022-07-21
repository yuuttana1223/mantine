export const PATH = {
  ROOT: "/",
  MANTINE: {
    BUTTON_DEMO: "/mantine/button-demo",
    GROUP_DEMO: "/mantine/group-demo",
  },
} as const;

type RootPath = typeof PATH.ROOT;
type MantinePath = typeof PATH.MANTINE[keyof typeof PATH.MANTINE];
export type Path = RootPath | MantinePath;
