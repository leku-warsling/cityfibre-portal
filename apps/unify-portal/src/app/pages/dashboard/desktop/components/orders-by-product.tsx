import { useToken } from "@chakra-ui/system"
import { Select } from "@chakra-ui/select"
import { LabelList, BarChart, XAxis, Bar, ResponsiveContainer } from "recharts"
import random from "lodash-es/random"
import { Card, CardBody, CardHeader } from "@unify/components/card"

const data = [
  "FTTH L2 Residential",
  "Ethernet 1000",
  "Ethernet 100",
  "ENNI Interconnect 10000",
].map((product) => ({ product, count: random(5, 60) }))

const OrdersByProduct = () => {
  const primaryColor = useToken("colors", "primary.500")
  const actions = [
    <Select variant="outline" maxW="150px" defaultValue="1">
      <option value="">All</option>
      <option value="1">24 Hours</option>
      <option value="2">Week</option>
      <option value="3">Month</option>
      <option value="4">Quarter</option>
      <option value="5">Year</option>
    </Select>,
  ]
  return (
    <Card maxWidth="650px" size="lg" flex={1}>
      <CardHeader actions={actions}>Orders By Product</CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            barCategoryGap={2}
            margin={{
              top: 32,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              color="#000000"
              axisLine={false}
              tickLine={false}
              fontWeight={800}
              dataKey="product"
              fontSize={10}
              dy={5}
            />
            <Bar dataKey="count" fill={primaryColor}>
              <LabelList
                fill="#000000"
                fontWeight={800}
                position="top"
                fontSize={14}
                dy={-8}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  )
}

export default OrdersByProduct
