import { Select } from "@chakra-ui/react"
import OverviewStat from "@partner-portal/components/statistic/overview-stat"
import { BiMessageError, BiStation, BiWrench } from "react-icons/bi"
import random from "lodash-es/random"
import { Card, CardBody, CardHeader } from "@partner-portal/components"

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
    <CardBody flexDir="row" minHeight="280px" align="center" gap={8}>
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
    </CardBody>
  </Card>
)

export default SupportOverviewCard
