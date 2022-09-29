import { Select } from "@chakra-ui/select"
import { flow } from "fp-ts/lib/function"
import random from "lodash-es/random"
import map from "ramda/es/map"
import prop from "ramda/es/prop"
import sum from "ramda/es/sum"
import { Label, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import { Card, CardBody, CardHeader } from "@unify/components/card"

const calcTotal = flow(map(prop("value")), sum)

const DonutChart = () => {
  const data = [
    { name: "New", value: random(50, 100), fill: "#00397b" },
    { name: "In Progress", value: random(50, 100), fill: "#9D8DFF" },
    { name: "Submitted", value: random(50, 100), fill: "#015DCB" },
    { name: "Closed", value: random(50, 100), fill: "#0094C8" },
    { name: "Resolved", value: random(50, 100), fill: " #6F5DFF" },
    { name: "Cancelled", value: random(50, 100), fill: "#00BADE" },
  ]
  const total = calcTotal(data)
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
    <Card maxWidth="480px" size="lg" flex={1}>
      <CardHeader actions={actions}>Incidents Breakdown</CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconSize={10}
              // formatter={renderColorfulLegendText}
            />
            <Pie
              data={data}
              cx={100}
              cy={150}
              innerRadius={60}
              outerRadius={85}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
            >
              <Label width={30} position="center" fontWeight={600}>
                {`${total} Incidents`}
              </Label>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  )
}

export default DonutChart
