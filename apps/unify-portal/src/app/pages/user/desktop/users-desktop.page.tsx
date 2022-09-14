// @ts-nocheck
import { USER_ROLES, USER_STATUSES } from "@unify/entities"
import { EditUserModal } from "../modals/edit-user.modal"
import { EditUserForm } from "../forms/edit-user.form"
import { useMemo, useState } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { difference, prop } from "ramda"
import { Page, Table, util } from "@ui"
import { useUsers, useQueryParams } from "@unify/hooks"
import { z } from "zod"
import {
  ColumnVisibility,
  SelectFilter,
  FieldSearch,
  DataExport,
  Statistic,
} from "@unify/components"
import {
  Button,
  VStack,
  Flex,
  useDisclosure,
  Badge,
  Text,
  Avatar,
  Spacer,
  Wrap,
  WrapItem,
  HStack,
  Box,
  Icon,
  IconButton,
} from "@chakra-ui/react"
import { flow } from "fp-ts/lib/function"
import { BiMessageAdd } from "react-icons/bi"

const DEFAULT_QUERY = {
  _order: "asc",
  _limit: 10,
  _page: 1,
  _sort: "name",
} as const

const querySchema = z.object({
  _order: z.optional(z.enum(["asc", "desc"])),
  _sort: z.optional(z.string()),
  q: z.string().optional(),
  _limit: z.number(),
  _page: z.number(),
})

const userQuerySchema = querySchema.extend({
  name_like: z.optional(z.string()),
  email_like: z.optional(z.string()),
  status: z.enum(USER_STATUSES).optional(),
  roles: z.enum(USER_ROLES).optional(),
})

type UserQuery = z.infer<typeof userQuerySchema>

const DEFAULT_VALUES = {
  items: [],
  totals: {
    awaiting_activation: 0,
    active: 0,
    records: 0,
    count: 0,
    pages: 0,
  },
} as const

const UsersDesktopPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<UserQuery>(DEFAULT_QUERY, userQuerySchema.parse)
  const { data = DEFAULT_VALUES, isLoading, isFetching } = useUsers(params)
  const { totals, items } = data
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user, setUser] = useState(null)

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
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
      },
      {
        id: "role",
        Header: "Roles",
        accessor: "roles",
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Badge colorScheme="gray" rounded={4} px={2} py={0.5}>
            {value}
          </Badge>
        ),
        // Cell: ({ value }: any) => (
        //   <Wrap spacing={2}>
        //     {value.map((role) => (
        //       <WrapItem>
        //         <Badge colorScheme="gray" rounded={4} px={2} py={0.5}>
        //           {role}
        //         </Badge>
        //       </WrapItem>
        //     ))}
        //   </Wrap>
        // ),
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
            {value}
          </Badge>
        ),
      },
      {
        Header: "Created Date",
        accessor: "created_at",
        Cell: flow(
          prop<"value", string>("value"),
          util.date.formatDateString("dd/MM/yyyy")
        ),
        disableFilters: true,
      },
      {
        Header: "Last Updated",
        accessor: "updated_at",
        Cell: flow(
          prop<"value", string>("value"),
          util.date.formatDateString("dd/MM/yyyy")
        ),
        disableFilters: true,
      },
    ],
    []
  )

  const COLUMN_MAP = useMemo(() => {
    return columns.reduce<Record<string, string>>((m, item) => {
      const key = "id" in item ? item.id : item.accessor
      m[key] = item.Header
      return m
    }, {})
  }, [])

  const COLUMN_KEYS = Object.keys(COLUMN_MAP)

  const _onSort = ({
    id,
    desc,
  }: {
    id: string
    desc?: boolean | undefined
  }) => {
    mergeParams({
      _sort: id ?? "name",
      _order: desc ? "desc" : "asc",
    })
  }

  const _onPaginate = ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: number
    pageSize: number
  }) => {
    mergeParams({
      _page: pageIndex,
      _limit: pageSize,
    })
  }

  const initialState = {
    pageIndex: params._page,
    pageSize: params._limit,
    sortBy: [
      {
        id: "name",
        desc: false,
      },
    ],
  }

  const [visibleColumns, setVisibleColumns] = useState(Object.keys(COLUMN_MAP))

  const PAGE_ACTIONS = [
    <Button to="/roles" variant="link" as={Link} mr={6}>
      User Roles
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      as={Link}
      mr={2}
    >
      Add User
    </Button>,
    <DataExport columns={Object.entries(COLUMN_MAP)} />,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={PAGE_ACTIONS}>
        Users
      </Page.Header>
      <Flex gap={6} width="100%" mb={6}>
        <HStack
          bgColor="white"
          boxShadow="base"
          flexGrow={1}
          rounded={4}
          spacing={6}
          py={4}
          px={6}
        >
          <Avatar name="Adam Astle" />
          <Box>
            <Text
              fontSize="xs"
              letterSpacing="wider"
              textTransform="uppercase"
              fontWeight={800}
              lineHeight={1}
            >
              Administrator
            </Text>
            <Text fontWeight={600} color="gray.500">
              Adam Astle
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="xs"
              letterSpacing="wider"
              textTransform="uppercase"
              fontWeight={800}
              lineHeight={1}
            >
              Email Address
            </Text>
            <Text fontWeight={600} color="gray.500">
              adam.astle@cityfibre.com
            </Text>
          </Box>
          <Spacer />
          <IconButton
            href="mailto: adam.astle@cityfibre.com"
            aria-label="Send email to administrator"
            icon={<BiMessageAdd />}
            variant="ghost"
            fontSize="3xl"
            as="a"
          />
        </HStack>
        <Statistic label="Total users" value={totals.records} />
        <Statistic
          label="Awaiting activation"
          value={totals.awaiting_activation}
        />
      </Flex>
      <Flex align="center" gap={4} mb={6}>
        <ColumnVisibility
          onChange={setVisibleColumns}
          value={visibleColumns}
          options={Object.entries(COLUMN_MAP)}
        />
        <SelectFilter
          onSelect={(value) => setParam("roles", value as UserQuery["roles"])}
          options={[
            { label: "All", value: undefined },
            ...USER_ROLES.map((value) => ({ label: value, value })),
          ]}
        >
          Role {params?.roles ?? "All"}
        </SelectFilter>
        <SelectFilter
          onSelect={(value) => setParam("status", value as UserQuery["status"])}
          options={[
            { label: "All", value: undefined },
            { label: "Active", value: "Active" },
            { label: "Awaiting Activation", value: "Awaiting Activation" },
          ]}
        >
          Status {params?.status ?? "All"}
        </SelectFilter>
        <Spacer />
        <FieldSearch
          onFieldChange={renameParam}
          onChange={searchHandler}
          placeholder="Search users..."
          defaultField="q"
          bgColor="white"
          maxWidth="400px"
          fields={[
            { value: "q", label: "All" },
            { value: "name_like", label: "Name" },
            { value: "email_like", label: "Email" },
          ]}
        />
      </Flex>
      <Table
        hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
        initialState={initialState}
        onPaginate={_onPaginate}
        pageCount={totals.pages}
        isFetching={isFetching}
        isLoading={isLoading}
        columns={columns}
        onSort={_onSort}
        manualPagination
        overflowY="auto"
        boxShadow="base"
        bgColor="white"
        data={items}
        isPaginated
        rounded={5}
        maxH="80vh"
        size="md"
        isSticky
      />
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
