import { Layout } from "~/layout";
import { List, ListItem, Stack, Title } from "@mantine/core";
import { useQueryToDos } from "~/model/todo/useQueryToDos";

export const ToDos = () => {
  const { data: todos } = useQueryToDos();

  return (
    <Layout title="todos">
      <Stack align="center">
        <Title>ToDos</Title>
        <List size="sm">
          {todos?.map((todo) => (
            <ListItem key={todo.id} my="xs">
              {todo.title}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Layout>
  );
};
