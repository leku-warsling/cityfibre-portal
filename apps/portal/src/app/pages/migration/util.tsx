import { IconButton } from "@ui"
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  HStack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  AlertDescription,
} from "@chakra-ui/react"
import { FiMoreVertical, FiDownload } from "react-icons/fi"
import {
  BiChevronDown,
  BiChevronRight,
  BiSearch,
  BiCheckCircle,
  BiXCircle,
  BiFlag,
  BiTrash,
} from "react-icons/bi"
import { AiFillFilePdf, AiFillFileExcel, AiFillFile } from "react-icons/ai"
import { formatDateString } from "../../utils/date"
import Code from "../../components/code"
import { flow } from "fp-ts/lib/function"
import prop from "ramda/es/prop"
import PopoverText from "../../components/popover-text"

const BooleanCell = (props: any) => {
  return props.value ? (
    <BiCheckCircle fontSize="24px" color="green" />
  ) : (
    <BiXCircle fontSize="24px" color="red" />
  )
}

const ExpanderCell = ({ row }: any) => (
  <IconButton
    aria-label="View JSON body"
    icon={row.isExpanded ? <BiChevronDown /> : <BiChevronRight />}
    size="xs"
    fontSize="18px"
    variant="ghost"
    {...row.getToggleRowExpandedProps()}
  />
)

const columns = [
  {
    id: "expander",
    Header: "JSON Body",
    Cell: ExpanderCell,
  },
  {
    Header: "Topic Name",
    accessor: "topic_name",
    disableFilters: true,
  },
  {
    Header: "Message",
    Cell: ({ value }: any) => (
      <PopoverText maxW="100px">{value.replace(/\\'/g, "'")}</PopoverText>
    ),
    accessor: "error_exception",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Date",
    Cell: flow(prop<"value", string>("value"), formatDateString("dd/MM/yyyy")),
    accessor: "error_timestamp",
    disableFilters: true,
  },
  {
    Header: "Viewed",
    accessor: "viewed",
    disableFilters: true,
    Cell: BooleanCell,
  },
  {
    Header: "Resolved",
    accessor: "resolved",
    disableFilters: true,
    Cell: BooleanCell,
  },
] as const

const tableActions = ({ update, remove }: any) => [
  {
    icon: BiFlag,
    label: "Mark Resolved",
    handler: (data: any) =>
      update({
        ...data,
        resolved: true,
      }),
    isBatchable: false,
  },
  {
    icon: BiFlag,
    label: "Mark Viewed",
    handler: (data: any) =>
      update({
        ...data,
        viewed: true,
      }),
    isBatchable: false,
  },
  {
    icon: BiTrash,
    label: "Delete",
    confirmConfig: {
      title: "Delete Migration",
      description: "Are you sure? You can't undo this action afterwards",
    },
    handler: ({ id }: any) => remove(id),
    isBatchable: false,
  },
]

const pageActions = [
  <Menu key={0}>
    <Tooltip label="Search Table">
      <MenuButton
        as={IconButton}
        aria-label="Download"
        size="sm"
        variant="ghost"
        _hover={{ bg: "gray.200" }}
        icon={<BiSearch />}
      />
    </Tooltip>
    <Tooltip key={0} label="Download">
      <MenuButton
        as={IconButton}
        aria-label="Download"
        size="sm"
        variant="ghost"
        _hover={{ bg: "gray.200" }}
        icon={<FiDownload />}
      />
    </Tooltip>
    <MenuList zIndex={100}>
      <MenuItem icon={<AiFillFile />}>JSON</MenuItem>
      <MenuItem icon={<AiFillFileExcel />}>CSV</MenuItem>
      <MenuItem icon={<AiFillFilePdf />}>PDF</MenuItem>
    </MenuList>
  </Menu>,
  <IconButton
    key={5}
    aria-label="Menu"
    size="sm"
    variant="ghost"
    _hover={{ bg: "gray.200" }}
    icon={<FiMoreVertical />}
  />,
]

const renderJSONBody = ({ original }: any) => {
  try {
    return (
      <Box maxW="90vw" maxH="50vh" overflow="auto">
        <Code language="json">
          {JSON.stringify(JSON.parse(original.json_body), null, 2)}
        </Code>
      </Box>
    )
  } catch (err: any) {
    return (
      <VStack spacing={6} w="100%" alignItems="flex-start">
        <Alert status="error" rounded={5} p={6} maxW="600px">
          <AlertIcon />
          <AlertTitle>Invalid JSON string:</AlertTitle>
          <AlertDescription>{err?.message}</AlertDescription>
        </Alert>
        <Text>{original.json_body}</Text>
      </VStack>
    )
  }
}

const colgroups = [{ width: "105px" }]

export { columns, tableActions, pageActions, renderJSONBody, colgroups }
