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

  let { name } = user;
  let { catchPhrase } = user.company;

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
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{body}</Text>
              <Text color="red">
                {name} {catchPhrase}
              </Text>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};
