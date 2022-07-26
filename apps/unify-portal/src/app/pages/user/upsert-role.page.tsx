import { UserRoleForm } from "./forms/user-role.form"
import { useEffect, useState } from "react"
import { Box, Button } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import { Page } from "@ui"
import { usePage } from "../../hooks/use-page.hook"

export const UpsertRolePage = (props: any) => {
  usePage({ title: "User Management" })
  const { id } = useParams()
  const mode = id ? "edit" : "create"
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/roles" variant="link" size="sm" as={Link} mr={6}>
      User Roles
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={actions}>
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
