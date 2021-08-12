import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Card } from "../components/Card";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = ({ posts }) => {
  return (
    <Container height="100vh">
      <Main>
        <Text>
          Pride Places API Challenge by Victor Luo
        </Text>
        <Button>Click Here</Button>
        {posts.map((post) => (
          <Card post={post} />
        ))}

        <DarkModeSwitch />
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
