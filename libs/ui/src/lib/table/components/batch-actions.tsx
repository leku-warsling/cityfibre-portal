import { Button, ButtonGroup, HStack, Text } from "@chakra-ui/react"
import { Row } from "react-table"
import { TableAction } from "./overflow-menu"

export type BatchActionsProps = {
  selection?: Row<object>[]
  actions?: TableAction[]
}

export const BatchAcions = ({
  selection = [],
  actions = [],
}: BatchActionsProps) => {
  const buttons = actions.map(({ icon: Icon, ...action }) => (
    <Button
      _hover={{ bg: "white", color: "#0361FF" }}
      onClick={() => action.handler(selection)}
      key={`action-${action.label}`}
      leftIcon={Icon && <Icon />}
      variant="outline"
      size="sm"
    >
      {action.label}
    </Button>
  ))

  return (
    <HStack
      hidden={selection.length < 1}
      bgColor="#0361FF"
      position="sticky"
      color="white"
      zIndex={10}
      bottom="0"
      px="6"
      py={4}
    >
      <Text as="strong" flexGrow={1}>
        {selection.length} Items Selected
      </Text>
      <ButtonGroup ml="auto">{buttons}</ButtonGroup>
    </HStack>
  )
}
