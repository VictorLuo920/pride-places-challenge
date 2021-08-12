import { Text, Heading } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Card } from "../components/Card";

const Index = ({ posts }) => {
  return (
    <Container height="100vh">
      <Main>
        <Heading>List of TypeCode API Posts</Heading>
        <Text>Pride Places API Challenge by Victor Luo</Text>
        {posts.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </Main>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();
  return {
    props: { posts },
  };
}

export default Index;
