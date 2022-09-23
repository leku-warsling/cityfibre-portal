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
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import get from "lodash-es/get"
import isNil from "lodash-es/isNil"
import { isFunction } from "ramda-adjunct"
import partition from "ramda/es/partition"
import whereEq from "ramda/es/whereEq"
import { FC } from "react"
import { Pagination } from "../../navigation/pagination"
import { ColumnFilter, TableSearch } from "../../table"
import { ListingTemplateProps } from "./listing.types"

const DataTag: FC<{ label: string }> = ({ label, children }) => (
  <Box>
    <Text
      textTransform="uppercase"
      letterSpacing="wider"
      fontWeight={800}
      color="gray.600"
      lineHeight={1}
      fontSize="11px"
    >
      {label}
    </Text>
    <Text fontWeight={600}>{children}</Text>
  </Box>
)

const getCell = ({ Cell, accessor }: any, row: object) => {
  const value = isFunction(accessor) ? accessor(row) : get(row, accessor)
  return isFunction(Cell) ? Cell({ row, value }) : String(value)
}

const ListingTouchTemplate = <D extends object>({
  filters = [],
  pagination,
  stats = [],
  isLoading,
  columns,
  search,
  page,
  data,
}: ListingTemplateProps<D>) => {
  const [required, extra] = partition(whereEq({ required: true }), columns)

  const statsPanel = stats && (
    <HStack
      divider={<Divider orientation="vertical" height="35px" />}
      justifyContent="center"
      boxShadow="base"
      bgColor="white"
      width="100%"
      rounded={4}
      mb={6}
      py={4}
    >
      {stats.map((stat, index) => (
        <Box flex={1} key={`${stat.label}-${index}`} textAlign="center">
          <Text
            textTransform="uppercase"
            letterSpacing="wider"
            fontWeight={800}
            color="gray.600"
            lineHeight={1}
            fontSize="11px"
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
    <Box py={6} px={[0, 2, 4]}>
      <HStack mb={4} spacing={1}>
        <Heading fontSize="lg" flexGrow={1}>
          {page.title}
        </Heading>
        <ButtonGroup size="sm" ml="auto" spacing={0.5}>
          {page.actions}
        </ButtonGroup>
      </HStack>
      {statsPanel}
      {search && (
        <TableSearch
          placeholder={search.placeholder ?? "Enter a search term..."}
          defaultField={search.defaultField}
          onFieldChange={search.onFieldChange}
          fields={search.fields}
          onChange={search.onSearch}
          maxWidth="100%"
          bgColor="white"
          mb={6}
        />
      )}
      {filters && (
        <Wrap spacing={4} mb={6}>
          {filters.map((f, index) => (
            <WrapItem key={index}>
              <ColumnFilter onSelect={f.onSelect} options={f.options}>
                {f.label}
              </ColumnFilter>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Accordion bgColor="white" rounded={4} boxShadow="base" mb={6}>
        {data.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton py={4}>
                <Wrap flex={1} alignItems="center" spacing={4}>
                  {required.map((col, i) => (
                    <WrapItem key={i}>{getCell(col, item)}</WrapItem>
                  ))}
                </Wrap>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <Wrap spacing={6}>
                {extra.map((col, i) => (
                  <WrapItem key={i}>
                    <DataTag label={String(col.Header)}>
                      {getCell(col, item)}
                    </DataTag>
                  </WrapItem>
                ))}
              </Wrap>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {!isNil(pagination) && (
        <Pagination
          onSizeChange={pagination?.onSizeChange}
          pageSize={pagination?.pageSize}
          onChange={pagination?.onChange}
          current={pagination?.current}
          total={pagination?.total}
          isLoading={isLoading}
          showSizeChanger
          isCompact
          size="sm"
        />
      )}
    </Box>
  )
}

export default ListingTouchTemplate
