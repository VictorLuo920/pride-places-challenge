import React from 'react'

import { Stack, Text, Link, Button, Lorem } from '@chakra-ui/core'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/core"
  import { useDisclosure } from '@chakra-ui/core'

function ModalExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} height='100vh' size="full" isCentered scrollBehavior='outside' blockScrollOnMount={true}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Hello NOw!</Text>
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    )
  
}


export default ModalExample
