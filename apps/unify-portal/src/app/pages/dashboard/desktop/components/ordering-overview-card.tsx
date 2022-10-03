import { Select } from "@chakra-ui/react"
import OverviewStat from "@unify/components/statistic/overview-stat"
import { BiCheckCircle, BiTimeFive, BiXCircle } from "react-icons/bi"
import random from "lodash-es/random"
import { Card, CardBody, CardHeader } from "@unify/components"

const OrderingOverviewCard = () => (
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
      Orders Overview
    </CardHeader>
    <CardBody flexDir="row" minHeight="280px" align="center" gap={8}>
      <OverviewStat
        icon={BiTimeFive}
        label="In Progress"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
      <OverviewStat
        icon={BiCheckCircle}
        label="Completed"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
      <OverviewStat
        icon={BiXCircle}
        label="Cancelled"
        value={random(150, 450)}
        variation={random(5, 75)}
      />
    </CardBody>
  </Card>
)

export default OrderingOverviewCard
