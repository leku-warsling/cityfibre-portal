import { FC, useRef, cloneElement } from "react";
import { ConfirmProps } from "./types";
import {
  Divider,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  ButtonGroup,
} from "@chakra-ui/react";

const Confirm: FC<ConfirmProps> = ({
  onConfirm,
  title,
  description,
  defaultIsOpen = false,
  confirmButtonText = "Confirm",
  onCancel,
  children,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen });
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {children && cloneElement(children, { onClick: onOpen })}
      <AlertDialog
        isOpen={isOpen}
        size="2xl"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            rounded={4}
            boxShadow="lg"
          >
            <AlertDialogHeader fontSize="xl">
              {title}
              <Divider borderColor="gray.200" mt={2} />
            </AlertDialogHeader>

            <AlertDialogBody>{description}</AlertDialogBody>

            <AlertDialogFooter>
              <ButtonGroup>
                <Button
                  variant="solid"
                  colorScheme="gray"
                  ref={cancelRef}
                  onClick={onCancel ?? onClose}
                >
                  Cancel
                </Button>
                <Button variant="solid" colorScheme="red" onClick={onConfirm}>
                  {confirmButtonText}
                </Button>
              </ButtonGroup>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Confirm;
