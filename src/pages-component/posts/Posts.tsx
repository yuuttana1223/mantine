import { ImageCard } from "~/pages-component/posts/ImageCard";
import { Layout } from "~/layout";
import { Container } from "@mantine/core";

export const Posts = () => {
  return (
    <Layout title="posts">
      <Container>
        <ImageCard />
      </Container>
    </Layout>
  );
};
