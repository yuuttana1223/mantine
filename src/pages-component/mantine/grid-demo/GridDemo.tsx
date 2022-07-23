import { Grid } from "@mantine/core";

export const GridDemo = () => {
  return (
    <Grid>
      <Grid.Col
        className="bg-blue-500 text-center font-bold text-gray-100"
        span={4}
      >
        1
      </Grid.Col>
      <Grid.Col
        className="bg-green-500 text-center font-bold text-gray-100"
        span={4}
      >
        2
      </Grid.Col>
      <Grid.Col
        className="bg-pink-500 text-center font-bold text-gray-100"
        span={4}
      >
        3
      </Grid.Col>
      <Grid.Col
        className="bg-blue-500 text-center font-bold text-gray-100"
        span={4}
      >
        4
      </Grid.Col>
    </Grid>
  );
};
