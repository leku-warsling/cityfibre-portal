import { AddIcon } from "@chakra-ui/icons"
import { Divider, VStack } from "@chakra-ui/layout"
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button"
import { Page } from "@ui/lib"
import { BiTrash } from "react-icons/bi"
import { Link } from "react-router-dom"
import { usePage } from "../../hooks/use-page.hook"
import { USER_ROLES } from "./data"

const PAGE_ACTIONS = [
  <Button to="/users" variant="link" size="sm" as={Link} mr={6}>
    User Management
  </Button>,
  <Button
    leftIcon={<AddIcon fontSize="12px" />}
    to="/roles/create"
    as={Link}
    size="sm"
  >
    Create Role
  </Button>,
]

const RolesPage = () => {
  usePage({ title: "User Management" })

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={PAGE_ACTIONS}>
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

export default RolesPage
