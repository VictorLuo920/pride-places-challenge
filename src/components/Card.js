import { Box, Text } from "@chakra-ui/react";

export const Card = ({ post }) => {
  const { title, body, userId } = post;
  return (
    <Box m={2} p={2} borderWidth="1px">
      <Text color="red">{title ? title : "none"}</Text>
      <Text>{body ? body : "none"}</Text>
      <Text color="red">{userId ? userId : "none"}</Text>
    </Box>
  );
};


