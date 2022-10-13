import { Column } from "react-table"
import { ReactElement, ReactNode } from "react"
import { Table } from "@ui/lib/table"
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@partner-portal/components/card"
import { FlexProps } from "@chakra-ui/react"

export type TableCardProps<D extends object> = Omit<FlexProps, "children"> & {
  columns: ReadonlyArray<Column<D>>
  size?: "sm" | "md" | "lg"
  actions?: ReactElement[]
  footer?: ReactNode
  title: string
  data: D[]
}

const TableCard = <D extends object>({
  actions = [],
  columns,
  footer,
  title,
  data,
  ...props
}: TableCardProps<D>) => (
  <Card {...props}>
    <CardHeader actions={actions}>{title}</CardHeader>
    <CardBody
      px={0}
      sx={{
        "& thead th": {
          bgColor: "gray.100",
        },
      }}
    >
      <Table columns={columns} data={data} size="md" />
    </CardBody>
    <CardFooter justifyContent="flex-end">{footer}</CardFooter>
  </Card>
)

TableCard.defaultProps = {}

export default TableCard
