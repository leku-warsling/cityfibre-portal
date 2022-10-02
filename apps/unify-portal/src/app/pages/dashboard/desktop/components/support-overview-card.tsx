import { Select } from "@chakra-ui/react"
import OverviewStat from "@unify/components/statistic/overview-stat"
import {
  BiBarChartAlt,
  BiMessageError,
  BiStation,
  BiWrench,
} from "react-icons/bi"
import random from "lodash-es/random"
import { Card, CardBody, CardHeader } from "@unify/components"

const SupportOverviewCard = () => (
  <Card size="lg" bgColor="primary.500">
    <CardHeader
      actions={[
        <Select variant="outline" borderColor="black" maxW="150px">
          <option>All</option>
          <option>Week</option>
          <option>Month</option>
          <option>Quarter</option>
          <option>Year</option>
        </Select>,
      ]}
    >
      Support Overview
    </CardHeader>
    <CardBody flexDir="row" gap={8}>
      <OverviewStat
        icon={BiMessageError}
        label="Incidents"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
      <OverviewStat
        icon={BiWrench}
        label="Services"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
      <OverviewStat
        icon={BiStation}
        label="Networks"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
      <OverviewStat
        icon={BiBarChartAlt}
        label="Reports"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
    </CardBody>
  </Card>
)

export default SupportOverviewCard
