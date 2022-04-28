import {
  Modal as _Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  ModalProps as _ModalProps,
  ButtonProps,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type ModalProps = _ModalProps & {
  title?: ReactNode;
  actions?: ButtonProps[];
};

const Modal: FC<ModalProps> = ({ title, actions = [], children, ...props }) => {
  const footer = !!actions.length && (
    <ModalFooter>
      <ButtonGroup>
        {actions.map((props) => (
          <Button {...props} />
        ))}
      </ButtonGroup>
    </ModalFooter>
  );

  return (
    <_Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader px={10} pt={6}>
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody px={10} maxH="85vh" overflowY="auto">
          {children}
        </ModalBody>
        {footer}
      </ModalContent>
    </_Modal>
  );
};

export default Modal;
