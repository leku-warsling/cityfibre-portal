import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import { Page } from "@ui/lib"
import { Link, useParams } from "react-router-dom"
import { usePage } from "../../hooks/use-page.hook"
import { UserRoleForm } from "./forms/user-role.form"

const PAGE_ACTIONS = [
  <Button to="/roles" variant="link" size="sm" as={Link} mr={6}>
    User Roles
  </Button>,
]

const UpsertRolePage = (props: any) => {
  usePage({ title: "User Management" })
  const { id } = useParams()
  const mode = id ? "edit" : "create"

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={PAGE_ACTIONS}>
        {mode === "edit" ? "Edit" : "Create"} User Role
      </Page.Header>
      <Box
        bgColor="white"
        boxShadow="base"
        width="100%"
        rounded={5}
        px={12}
        pt={12}
        pb={6}
      >
        <UserRoleForm onSubmit={console.log} mode={mode} />
      </Box>
    </Page>
  )
}

export default UpsertRolePage
