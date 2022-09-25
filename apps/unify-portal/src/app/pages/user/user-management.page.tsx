import { AddIcon } from "@chakra-ui/icons"
import { Badge, Text, VStack } from "@chakra-ui/layout"
import { useDisclosure } from "@chakra-ui/hooks"
import { Button } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar"
import { util } from "@ui/lib"
import { DataExport } from "@unify/components"
import { useMediaQuery } from "@chakra-ui/media-query"
import { USER_ROLES, USER_STATUSES } from "@unify/entities"
import { useQueryParams, useUsers, usePage } from "@unify/hooks"
import { flow } from "fp-ts/lib/function"
import prop from "ramda/es/prop"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { z } from "zod"
import { EditUserForm } from "./forms/edit-user.form"
import { EditUserModal } from "./modals/edit-user.modal"
import {
  ListingDesktopTemplate,
  ListingTouchTemplate,
} from "@ui/lib/templates/listing"

const DateCell = flow(prop<"value", Date>("value"), util.date.toDateString)

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

type User = {
  name: string
  username: string
  avatar?: string
  contact: {
    email: string
    phone: string
  }
}

const UserManagementPage = () => {
  usePage({ title: "User Management" })
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<UserQuery>(DEFAULT_QUERY, userQuerySchema.parse)
  const { data = DEFAULT_VALUES, isLoading, isFetching } = useUsers(params)
  const [isTouch] = useMediaQuery("(max-width: 1024px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user, setUser] = useState<Partial<User>>({})
  const { totals, items } = data

  const TABLE_COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
      disableFilters: true,
      Cell: ({ row, value }: any) => (
        <Button
          variant="link"
          rounded={4}
          onClick={(event) => {
            const user = row.original
            setUser({
              name: value,
              username: user.email,
              contact: {
                email: user.email,
                phone: "01952 336633",
              },
            })
            onOpen()
          }}
        >
          {value}
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
      Cell: DateCell,
      disableFilters: true,
    },
    {
      Header: "Last Updated",
      accessor: "updated_at",
      Cell: DateCell,
      disableFilters: true,
    },
  ] as const

  const COLUMN_MAP = useMemo(() => {
    return TABLE_COLUMNS.reduce<Record<string, string>>((m, item) => {
      const key = "id" in item ? item.id : item.accessor
      m[key] = item.Header
      return m
    }, {})
  }, [])

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

  // TODO: Add admin box

  //     <Flex gap={6} width="100%" mb={6}>
  //       <HStack
  //         bgColor="white"
  //         boxShadow="base"
  //         flexGrow={1}
  //         rounded={4}
  //         spacing={6}
  //         py={4}
  //         px={6}
  //       >
  //         <Avatar name="Adam Astle" />
  //         <Box>
  //           <Text
  //             fontSize="xs"
  //             letterSpacing="wider"
  //             textTransform="uppercase"
  //             fontWeight={800}
  //             lineHeight={1}
  //           >
  //             Administrator
  //           </Text>
  //           <Text fontWeight={600} color="gray.500">
  //             Adam Astle
  //           </Text>
  //         </Box>
  //         <Box>
  //           <Text
  //             fontSize="xs"
  //             letterSpacing="wider"
  //             textTransform="uppercase"
  //             fontWeight={800}
  //             lineHeight={1}
  //           >
  //             Email Address
  //           </Text>
  //           <Text fontWeight={600} color="gray.500">
  //             adam.astle@cityfibre.com
  //           </Text>
  //         </Box>
  //         <Spacer />
  //         <IconButton
  //           href="mailto: adam.astle@cityfibre.com"
  //           aria-label="Send email to administrator"
  //           icon={<BiMessageAdd />}
  //           variant="ghost"
  //           fontSize="3xl"
  //           as="a"
  //         />
  //       </HStack>

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

  const _onPaginate = setParam("_page")
  const _onSizeChange = setParam("_limit")

  const initialState = {
    sortBy: [
      {
        id: "name",
        desc: false,
      },
    ],
  }

  const Listing = isTouch ? ListingTouchTemplate : ListingDesktopTemplate

  const filters = [
    {
      label: `Role ${params?.roles ?? "All"}`,
      onSelect: (value: UserQuery["roles"]) => setParam("roles", value),
      options: [
        { label: "All", value: undefined },
        ...USER_ROLES.map((value) => ({ label: value, value })),
      ],
    },
    {
      label: `Status ${params?.status ?? "All"}`,
      onSelect: (value: UserQuery["status"]) => setParam("status", value),
      options: [
        { label: "All", value: undefined },
        { label: "Active", value: "Active" },
        { label: "Awaiting Activation", value: "Awaiting Activation" },
      ],
    },
  ]

  const stats = [
    { label: "Total", value: totals.records },
    { label: "Awaiting activattion", value: totals.awaiting_activation },
  ]

  const search = {
    onFieldChange: renameParam,
    onSearch: searchHandler,
    placeholder: "Search users...",
    fields: [
      { value: "q", label: "All" },
      { value: "name_like", label: "Name" },
      { value: "email_like", label: "Email" },
    ],
  }

  const pagination = {
    onSizeChange: _onSizeChange,
    pageSize: params._limit,
    onChange: _onPaginate,
    current: params._page,
    total: totals.pages,
  }

  return (
    <>
      <Listing
        page={{
          title: "Users",
          actions: PAGE_ACTIONS,
        }}
        filters={filters}
        stats={stats}
        search={search}
        initialState={initialState}
        pagination={pagination}
        isFetching={isFetching}
        columns={TABLE_COLUMNS}
        isLoading={isLoading}
        onSort={_onSort}
        data={items}
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
        <EditUserForm defaultValues={user} onSubmit={console.log} />
      </EditUserModal>
    </>
  )
}

export default UserManagementPage
