import { Menu, MenuLabel, MenuItem } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { memo } from "react";
import { Settings } from "tabler-icons-react";
import { PATH } from "~/const";

export const Dropdown = memo(() => {
  return (
    <Menu trigger="hover" size="xl">
      <MenuLabel>UI Component</MenuLabel>
      <MenuItem
        icon={<Settings size={16} />}
        component={NextLink}
        href={PATH.MANTINE.BUTTON_DEMO}
      >
        Button
      </MenuItem>
    </Menu>
  );
});

Dropdown.displayName = "Dropdown";
