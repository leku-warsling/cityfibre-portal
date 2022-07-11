import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Icon,
  IconButton,
  VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { USER_ROLES } from "./data"
import { Page } from "@ui"
import { BiTrash } from "react-icons/bi"

export const UserRolesPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/users" variant="link" size="sm" as={Link} mr={6}>
      User Management
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/role/create"
      as={Link}
      size="sm"
    >
      Create Role
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={actions}>
        User Roles
      </Page.Header>
      <VStack
        divider={<Divider />}
        align="flex-start"
        boxShadow="base"
        bgColor="white"
        width="100%"
        spacing={2}
        rounded={4}
        px={12}
        py={6}
      >
        {USER_ROLES.map((role, index) => (
          <ButtonGroup
            key={`role-${role}-${index}`}
            justifyContent="space-between"
            w="100%"
          >
            <Button variant="link" as={Link} to={`/roles/${index}`}>
              {role}
            </Button>
            <IconButton
              aria-label="Delete Role"
              icon={<BiTrash />}
              colorScheme="gray"
              variant="ghost"
            />
          </ButtonGroup>
        ))}
      </VStack>
    </Page>
  )
}
