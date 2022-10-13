import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/modal"
import { Text, Box, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { TeamIcon } from "../../../assets"

const TutorialModal = ({ isOpen, onClose }: Omit<ModalProps, "children">) => (
  <Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader textAlign="center" pt={8} fontSize="2xl">
        Welcome to the Partner Suite!
      </ModalHeader>
      <ModalBody px={14}>
        <VStack spacing={6} width="100%">
          <Box bgColor="primary.500" px={8} pt={8} rounded={4} width="100%">
            <TeamIcon width="100%" height="auto" />
          </Box>
          <Box textAlign="center" maxW="450px">
            <Text fontSize="2xl" fontWeight={600} mb={2}>
              Take the 5 Minute Tutorial
            </Text>
            <Text color="gray.600">
              The Partner Suite is where you can manage your team, your
              customers, order products, and conduct help and support. This is a
              quick tutorial to show you how it works...
            </Text>
          </Box>
        </VStack>
      </ModalBody>
      <ModalFooter justifyContent="center" py={6}>
        <Button variant="ghost" colorScheme="gray" onClick={onClose} mr={6}>
          Maybe later
        </Button>
        <Button onClick={onClose}>Start Tutorial</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default TutorialModal
