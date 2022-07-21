import { Box, Button, Center, Group } from "@mantine/core";
import { PATH } from "~/constant";
import { BackLink } from "~/pages-component/mantine";

export const GroupDemo = () => {
  return (
    <Box>
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group direction="column" position="right" my="md">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="center">
        <Button className="h-10" color="indigo">
          1
        </Button>
        <Button className="h-20" color="teal">
          2
        </Button>
        <Button className="h-32" color="orange">
          3
        </Button>
      </Group>
      <Center>
        <BackLink href={PATH.ROOT} />
      </Center>
    </Box>
  );
};
