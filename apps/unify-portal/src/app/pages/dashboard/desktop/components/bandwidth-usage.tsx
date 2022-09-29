import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from "recharts"
import { useToken } from "@chakra-ui/system"
import random from "lodash-es/random"
import times from "ramda/es/times"
import { Card, CardHeader, CardBody } from "@unify/components"
import { Select } from "@chakra-ui/select"

const BandwidthUsage = () => {
  const brandColor = useToken("colors", "primary.500")
  const data = times(
    (n) => ({
      usage: random(3000, 5000),
      name: n + 1,
    }),
    31
  )

  const actions = [
    <Select variant="outline" maxW="150px">
      <option value="">All</option>
      <option value="1">24 Hours</option>
      <option value="2">Week</option>
      <option value="3">Month</option>
      <option value="4">Quarter</option>
      <option value="5">Year</option>
    </Select>,
  ]

  return (
    <Card flex={1} maxWidth="750px" size="lg">
      <CardHeader actions={actions}>Bandwidth Usage</CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={330}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 8,
              left: -16,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontWeight={600}
              tickCount={12}
              interval={2}
              fontSize={12}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontWeight={600}
              fontSize={12}
            />
            <Area
              stroke={brandColor}
              fill={brandColor}
              type="monotone"
              dataKey="usage"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  )
}

export default BandwidthUsage
