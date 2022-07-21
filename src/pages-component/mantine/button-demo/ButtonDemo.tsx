import { Button, Group, Box } from "@mantine/core";
import { BrandGithub, ThreeDCubeSphere } from "tabler-icons-react";
import { PATH } from "~/constant";
import { BackLink } from "~/pages-component/mantine";

export const ButtonDemo = () => {
  return (
    <Box>
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
      <BackLink href={PATH.ROOT} />
    </Box>
  );
};
