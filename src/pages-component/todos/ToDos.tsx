import { List, Stack, Title } from "@mantine/core";
import { Layout } from "~/layout";
import { useQueryToDos } from "~/model/todo/useQueryToDos";

export const ToDos = () => {
  const { data: todos } = useQueryToDos();

  return (
    <Layout title="todos">
      <Stack align="center">
        <Title>ToDos</Title>
        <List size="sm">
          {todos?.map((todo) => (
            <List.Item key={todo.id} my="xs">
              {todo.title}
            </List.Item>
          ))}
        </List>
      </Stack>
    </Layout>
  );
};
