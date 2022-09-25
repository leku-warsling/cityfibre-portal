import { Flex, Box, Heading } from "@chakra-ui/layout"
import { Column } from "react-table"
import { ReactNode } from "react"
import { Table } from "@ui/lib/table"

export type TableCardProps<D extends object> = {
  columns: ReadonlyArray<Column<D>>
  actions?: ReactNode
  footer?: ReactNode
  title: string
  data: D[]
}

const TableCard = <D extends object>({
  columns,
  actions,
  footer,
  title,
  data,
}: TableCardProps<D>) => (
  <Box boxShadow="base" bgColor="white" flex={1} rounded={4} pt={6} pb={3}>
    <Flex justify="space-between" px={6} mb={4} align="center">
      <Heading fontSize="lg" fontWeight={600}>
        {title}
      </Heading>
      {actions}
    </Flex>
    <Box
      sx={{
        "& thead th": {
          bgColor: "gray.100",
        },
      }}
    >
      <Table columns={columns} data={data} size="md" />
    </Box>
    {footer}
  </Box>
)

export default TableCard
