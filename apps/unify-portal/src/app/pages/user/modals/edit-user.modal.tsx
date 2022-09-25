import { FC, ReactNode } from "react"
import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalProps,
  ModalBody,
  Modal,
} from "@chakra-ui/modal"

export interface EditUserModalProps extends ModalProps {
  header?: ReactNode
}

export const EditUserModal: FC<EditUserModalProps> = ({
  children,
  onClose,
  header,
  isOpen,
  ...props
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="center">
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px={14} py={8}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
