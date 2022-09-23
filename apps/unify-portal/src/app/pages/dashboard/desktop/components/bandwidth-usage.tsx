import { AreaChart, XAxis, YAxis, Area } from "recharts"
import { useToken } from "@chakra-ui/react"
import random from "lodash-es/random"
import times from "ramda/es/times"

const BandwidthUsage = () => {
  const brandColor = useToken("colors", "primary.500")
  const data = times(
    (n) => ({
      usage: random(3000, 5000),
      name: n + 1,
    }),
    31
  )

  return (
    <AreaChart
      width={700}
      height={330}
      data={data}
      margin={{
        top: 16,
        right: 16,
        left: 0,
        bottom: 16,
      }}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        fontWeight={600}
        tickCount={12}
        interval={2}
      />
      <YAxis axisLine={false} tickLine={false} fontWeight={600} />
      <Area
        stroke={brandColor}
        fill={brandColor}
        type="monotone"
        dataKey="usage"
        fillOpacity={1}
      />
    </AreaChart>
  )
}

export default BandwidthUsage
