import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
var jsonQuery = require("json-query");

export const Card = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, body, userId } = post;
  const [user, setUser] = useState("null");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  }, [user]);

  let {
    name: userName,
    company: { catchPhrase: userCatchPhrase } = { catchPhrase: "null" },
  } = user;

  return (
    <Box m={2} p={2} borderWidth="1px">
      <Text
        onClick={onOpen}
        _hover={{
          color: "blue",
        }}
      >
        {title}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Title: {title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={1}>body: {body}</Text>
              <Text mb={1}>published by: {userName}</Text>
              <Text mb={1}>catchphrase: {userCatchPhrase}</Text>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};
