// @ts-nocheck
import { USER_STATUSES, USER_DATA, USER_ROLES } from "../data"
import { EditUserModal } from "../modals/edit-user.modal"
import { Statistic } from "../../../components/statistic"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { EditUserForm } from "../forms/edit-user.form"
import { useEffect, useMemo, useState } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import random from "lodash-es/random"
import { props, join } from "ramda"
import { Page, Table } from "@ui"
import {
  Button,
  VStack,
  Flex,
  useDisclosure,
  Badge,
  Text,
  Avatar,
  Box,
} from "@chakra-ui/react"

const getFullName = flow(props(["first_name", "last_name"]), join(" "))
const randomNth = (arr: any[]) => arr[random(arr.length - 1)]

const UsersDesktopPage = () => {
  const [isLoading, setLoading] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user, setUser] = useState(null)

  const columns = useMemo(
    () => [
      {
        id: "name",
        Header: "Name",
        accessor: getFullName,
        disableFilters: true,
        disableSortBy: true,
        Cell: (cell: any) => (
          <Button
            variant="link"
            rounded={4}
            onClick={(event) => {
              const user = cell.row.original
              setUser({
                name: cell.value,
                username: user.email,
                contact: {
                  email: user.email,
                  phone: "01952 336633",
                },
              })
              onOpen()
            }}
          >
            {cell.value}
          </Button>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
        disableSortBy: true,
      },
      {
        id: "role",
        Header: "Roles",
        accessor: () => randomNth(USER_ROLES),
        disableFilters: true,
        disableSortBy: true,
        Cell: ({ value }: any) => (
          <Badge colorScheme="gray" rounded={4} px={2} py={0.5}>
            {value}
          </Badge>
        ),
      },
      {
        id: "status",
        Header: "Status",
        accessor: () => randomNth(USER_STATUSES),
        disableFilters: true,
        disableSortBy: true,
        Cell: ({ value }: any) => (
          <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
            {value}
          </Badge>
        ),
      },
    ],
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/roles" variant="link" size="sm" as={Link} mr={6}>
      User Roles
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      as={Link}
      size="sm"
    >
      Add User
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={actions}>
        Users ({USER_DATA.length})
      </Page.Header>
      <Flex gap={6} align="flex-start">
        <VStack w="100%" maxWidth="300px" align="flex-start">
          <Button variant="solid" isActive size="sm">
            All Users
          </Button>
          {USER_ROLES.map((role, index) => (
            <Button size="sm" variant="ghost" colorScheme="brand">
              {role}
            </Button>
          ))}
        </VStack>
        <Box flexGrow={1}>
          <Flex gap={6} width="100%" mb={6}>
            <Statistic
              icon={RiBarChartGroupedLine}
              label="Total users"
              value={109}
            />
            <Statistic
              icon={RiBarChartGroupedLine}
              label="Require activation"
              value={54}
            />
          </Flex>
          <Table
            isLoading={isLoading}
            columns={columns}
            data={USER_DATA}
            boxShadow="base"
            overflowY="auto"
            bgColor="white"
            flexGrow={1}
            isPaginated
            rounded={5}
            maxH="80vh"
          />
        </Box>
      </Flex>
      <EditUserModal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        header={
          <VStack spacing={6} mt={6}>
            <Text fontSize="2xl">{user?.name}</Text>
            <Avatar name={user?.name} src={user?.avatar} size="xl" />
          </VStack>
        }
      >
        <EditUserForm defaultValues={user} />
      </EditUserModal>
    </Page>
  )
}

export default UsersDesktopPage
