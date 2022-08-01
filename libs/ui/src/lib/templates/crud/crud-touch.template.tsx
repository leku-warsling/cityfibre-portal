import { Pagination } from "../../navigation/pagination"
import { ChangeEvent, FC, ReactNode } from "react"
import { isFunction, isString } from "ramda-adjunct"
import { path } from "ramda"
import {
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Accordion,
  WrapItem,
  Heading,
  Divider,
  Select,
  HStack,
  Wrap,
  Text,
  Box,
} from "@chakra-ui/react"

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
  searchInput: ReactNode
  filters: ReactNode[]
  title: ReactNode
  stats: Stat[]
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
  filters,
  title,
  stats,
  data,
  keys,
}: CrudTouchTemplateProps) => {
  return (
    <Box py={6} px={2}>
      <Heading fontSize="lg" mb={4}>
        {title}
      </Heading>
      <HStack
        divider={<Divider orientation="vertical" height="30px" />}
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
            <Text fontWeight={800}>{stat.value}</Text>
            <Text fontSize="xs" color="gray.600">
              {stat.label}
            </Text>
          </Box>
        ))}
      </HStack>
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
        <Pagination isCompact page={1} total={5} />
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
