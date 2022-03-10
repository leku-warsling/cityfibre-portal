import { IconButton, Text } from '@ui';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from '@chakra-ui/react';
import {
  FiSettings,
  FiPlus,
  FiMoreVertical,
  FiGrid,
  FiDownload,
} from 'react-icons/fi';
import {
  BiChevronDown,
  BiChevronRight,
  BiTable,
  BiSearch,
  BiCheckCircle,
  BiXCircle,
  BiFlag,
  BiTrash,
  BiListCheck,
} from 'react-icons/bi';
import { AiFillFilePdf, AiFillFileExcel, AiFillFile } from 'react-icons/ai';
import { formatDateString } from "../../utils/date"
import Code from '../../components/code';
import { flow } from 'fp-ts/lib/function';
import { prop } from 'ramda';
import PopoverText from '../../components/popover-text';


const BooleanCell = (props: any) => {
  return props.value ? (
    <BiCheckCircle fontSize="24px" color="green" />
  ) : (
    <BiXCircle fontSize="24px" color="red" />
  );
};

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
    id: 'expander',
    Header: 'JSON Body',
    Cell: ExpanderCell,
  },
  {
    Header: 'Topic Name',
    accessor: 'topic_name',
    disableFilters: true,
  },
  {
    Header: 'Message',
    Cell: ({ value }: any) => (
      <PopoverText maxW="100px">
        {value}
      </PopoverText>
    ),
    accessor: 'error_exception',
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: 'Date',
    Cell: flow(prop<"value", string>("value"), formatDateString("dd/MM/yyyy")),
    accessor: 'error_timestamp',
    disableFilters: true,
  },
  {
    Header: 'Viewed',
    accessor: 'is_checked',
    disableFilters: true,
    Cell: BooleanCell,
  },
  {
    Header: 'Resolved',
    accessor: 'is_resolved',
    disableFilters: true,
    Cell: BooleanCell,
  },
] as const;

const tableActions = ({ update, remove }: any) => [
  {
    icon: BiFlag,
    label: 'Mark Resolved',
    handler: (data: any) => update.mutate({ 
      ...data, 
      is_resolved: true 
    }),
    isBatchable: true,
  },
  {
    icon: BiFlag,
    label: 'Mark Viewed',
    handler: (data: any) => update.mutate({
       ...data, 
       is_checked: true 
    }),
    isBatchable: true,
  },
  {
    icon: BiListCheck,
    label: 'Queue',
    handler: (data: any) => console.log(data),
    isBatchable: true,
  },
  {
    icon: BiTrash,
    label: 'Delete',
    confirmConfig: {
      title: 'Delete Migration',
      description: "Are you sure? You can't undo this action afterwards",
    },
    handler: ({ id }: any) => remove.mutate(id),
    isBatchable: true,
  },
];

const pageActions = [
  <Menu key={0}>
    <Tooltip label="Search Table">
      <MenuButton
        as={IconButton}
        aria-label="Download"
        size="sm"
        variant="ghost"
        _hover={{ bg: 'gray.200' }}
        icon={<BiSearch />}
      />
    </Tooltip>
    <Tooltip key={0} label="Download">
      <MenuButton
        as={IconButton}
        aria-label="Download"
        size="sm"
        variant="ghost"
        _hover={{ bg: 'gray.200' }}
        icon={<FiDownload />}
      />
    </Tooltip>
    <MenuList zIndex={100}>
      <MenuItem icon={<AiFillFile />}>
        JSON
      </MenuItem>
      <MenuItem icon={<AiFillFileExcel />}>
        CSV
      </MenuItem>
      <MenuItem icon={<AiFillFilePdf />}>
        PDF
      </MenuItem>
    </MenuList>
  </Menu>,
  <Tooltip key={1} label="Display Table">
    <IconButton
      aria-label="Display Table"
      size="sm"
      variant="ghost"
      _hover={{ bg: 'gray.200' }}
      icon={<BiTable />}
    />
  </Tooltip>,
  <Tooltip key={2} label="Display Grid">
    <IconButton
      aria-label="Display Grid"
      size="sm"
      variant="ghost"
      _hover={{ bg: 'gray.200' }}
      icon={<FiGrid />}
    />
  </Tooltip>,
  <Tooltip key={3} label="Settings">
    <IconButton
      aria-label="Settings"
      size="sm"
      variant="ghost"
      _hover={{ bg: 'gray.200' }}
      icon={<FiSettings />}
    />
  </Tooltip>,
  <Tooltip key={4} label="Add Migration">
    <IconButton
      key={0}
      aria-label="Add Invoice"
      size="sm"
      variant="ghost"
      _hover={{ bg: 'gray.200' }}
      icon={<FiPlus />}
    />
  </Tooltip>,
  <IconButton
    key={5}
    aria-label="Menu"
    size="sm"
    variant="ghost"
    _hover={{ bg: 'gray.200' }}
    icon={<FiMoreVertical />}
  />,
];

const renderJSONBody = ({ original }: any) => (
  <Box maxW="90vw" maxH="50vh" overflow="auto">
    <Code language="json">
      {JSON.stringify(JSON.parse(original.json_body), null, 2)}
    </Code>
  </Box>
);

const colgroups = [{ width: '52px' }, { width: '105px' }]

export { columns, tableActions, pageActions, renderJSONBody, colgroups };
