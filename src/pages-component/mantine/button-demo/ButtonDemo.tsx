import { Button, Group } from "@mantine/core";
import { BrandGithub, ThreeDCubeSphere } from "tabler-icons-react";

export const ButtonDemo = () => {
  return (
    <Group direction="column" position="center">
      <Button
        classNames={{
          leftIcon: "text-pink-500 h-6 w-6",
          rightIcon: "text-orange-500 h-6 w-6",
        }}
        color="cyan"
        radius="lg"
        uppercase
        leftIcon={<BrandGithub />}
        rightIcon={<ThreeDCubeSphere />}
      >
        Press
      </Button>
      <Button mt="md">Click</Button>
    </Group>
  );
};
