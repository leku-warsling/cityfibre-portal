import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  Select,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { isFunction, isString } from "ramda-adjunct"
import path from "ramda/es/path"
import { ChangeEvent, FC, ReactElement, ReactNode } from "react"
import { Pagination } from "../../navigation/pagination"

export type Stat = {
  value: number | string
  label: string
}

export type Key = {
  accessor: string | ((data: any) => string)
  label: string
  id?: string
}

export type CrudTouchTemplateProps = {
  onPaginate?: ({ page, limit }: { page: number; limit: number }) => void
  renderLabel: (data: Record<string, any>) => ReactNode
  actions?: ReactElement[]
  searchInput: ReactNode
  filters: ReactNode[]
  title: ReactNode
  stats?: Stat[]
  data: any[]
  keys: Key[]
  pagination: {
    limitOptions: number[]
    page: number
    limit: number
    total: number
  }
}

export type RecordListItemProps = {
  label: ReactNode
}

const DataTag: FC<{ label: string }> = ({ label, children }) => (
  <Box>
    <Text
      textTransform="uppercase"
      letterSpacing="wider"
      fontWeight={600}
      color="gray.600"
      fontSize="10px"
    >
      {label}
    </Text>
    <Text fontWeight={600}>{children}</Text>
  </Box>
)

const RecordListItem: FC<RecordListItemProps> = ({ label, children }) => (
  <AccordionItem>
    <h2>
      <AccordionButton py={4}>
        <Box flex={1} textAlign="left" display="flex" alignItems="center">
          {label}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p={4}>{children}</AccordionPanel>
  </AccordionItem>
)

export const CrudTouchTemplate = ({
  searchInput,
  renderLabel,
  pagination,
  onPaginate,
  actions,
  filters,
  title,
  stats,
  data,
  keys,
}: CrudTouchTemplateProps) => {
  const statsPanel = stats && (
    <HStack
      divider={<Divider orientation="vertical" height="35px" />}
      justifyContent="center"
      boxShadow="base"
      bgColor="white"
      spacing={4}
      width="100%"
      rounded={4}
      mb={6}
      p={4}
    >
      {stats.map((stat) => (
        <Box flex={1}>
          <Text
            fontSize="11px"
            color="gray.600"
            fontWeight={800}
            textTransform="uppercase"
            letterSpacing="wider"
            lineHeight={1}
          >
            {stat.label}
          </Text>
          <Text fontWeight={800} fontSize="xl">
            {stat.value}
          </Text>
        </Box>
      ))}
    </HStack>
  )

  return (
    <Box py={6} px={2}>
      <HStack mb={4} spacing={1}>
        <Heading fontSize="lg" flexGrow={1}>
          {title}
        </Heading>
        <ButtonGroup ml="auto" spacing={0.5}>
          {actions}
        </ButtonGroup>
      </HStack>
      {statsPanel}
      <Wrap spacing={4} mb={6}>
        <WrapItem>{searchInput}</WrapItem>
        {filters.map((filter, index) => (
          <WrapItem key={index}>{filter}</WrapItem>
        ))}
      </Wrap>
      <Accordion bgColor="white" rounded={4} boxShadow="base" mb={6}>
        {data.map((data, index) => (
          <RecordListItem key={index} label={renderLabel(data)}>
            <Wrap spacing={4}>
              {keys.map(({ label, accessor }, index) => (
                <WrapItem key={index}>
                  <DataTag label={label}>
                    {isString(accessor)
                      ? path(accessor.split("."), data)
                      : accessor(data)}
                  </DataTag>
                </WrapItem>
              ))}
            </Wrap>
          </RecordListItem>
        ))}
      </Accordion>
      <HStack justify="space-between" align="center">
        <Pagination current={1} total={5} onChange={console.log} />
        <Select
          onChange={(evt: ChangeEvent<HTMLSelectElement>) =>
            isFunction(onPaginate) &&
            onPaginate({
              page: pagination.page,
              limit: Number(evt.target.value),
            })
          }
          maxW="125px"
        >
          {pagination.limitOptions.map((value) => (
            <option value={value}>Show {value}</option>
          ))}
        </Select>
      </HStack>
    </Box>
  )
}
