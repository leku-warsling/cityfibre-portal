import { useToken } from "@chakra-ui/system"
import { FC } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

export type GaugeChartProps = {
  trackColor?: string
  valueColor?: string
  dataKey: string
  color?: string
  height?: number | string
  width?: number | string
  data: any[]
}

const GaugeChart: FC<GaugeChartProps> = ({
  trackColor = "gray.100",
  valueColor = "blue.500",
  dataKey,
  children,
  height,
  width,
  data,
  ...props
}) => {
  const tc = useToken("colors", trackColor)
  const vc = useToken("colors", valueColor)
  return (
    <ResponsiveContainer height={height} width={width}>
      <PieChart
        {...props}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Pie
          startAngle={180}
          endAngle={0}
          innerRadius="55%"
          data={data}
          dataKey={dataKey}
          labelLine={false}
          blendStroke
          isAnimationActive={false}
          cy="65%"
        >
          <Cell fill={vc} />
          <Cell fill={tc} />
          {children}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

GaugeChart.defaultProps = {
  width: "100%",
} as const

export default GaugeChart
