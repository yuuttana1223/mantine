import { Menu } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { memo } from "react";
import { Settings } from "tabler-icons-react";
import { PATH } from "~/const";

export const Dropdown = memo(() => {
  return (
    <Menu trigger="hover" size="xl">
      <Menu.Label>UI Component</Menu.Label>
      <Menu.Item
        icon={<Settings size={16} />}
        component={NextLink}
        href={PATH.MANTINE.BUTTON_DEMO}
      >
        Button
      </Menu.Item>
    </Menu>
  );
});

Dropdown.displayName = "Dropdown";
