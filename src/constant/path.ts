export const PATH = {
  ROOT: "/",
  MANTINE: {
    BUTTON_DEMO: "/mantine/button-demo",
    GROUP_DEMO: "/mantine/group-demo",
  },
  USERS: {
    SIGN_IN: "/users/sign-in",
    SIGN_UP: "/users/sign-up",
  },
} as const;

type RootPath = typeof PATH.ROOT;
type MantinePath = typeof PATH.MANTINE[keyof typeof PATH.MANTINE];
type UsersPath = typeof PATH.USERS[keyof typeof PATH.USERS];
export type Path = RootPath | MantinePath | UsersPath;
