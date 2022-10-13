import { Select, TabPanel } from "@chakra-ui/react"
import TabbedCard from "./tabbed-card"
import OverviewStat from "@partner-portal/components/statistic/overview-stat"
import {
  BiBarChartAlt,
  BiMessageError,
  BiStation,
  BiWrench,
} from "react-icons/bi"
import random from "lodash-es/random"

const OverviewCard = () => {
  const supportStats = (
    <TabPanel display="flex" gap={8} pt={16} px={0}>
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
    </TabPanel>
  )
  return (
    <TabbedCard
      title="Overview"
      actions={[
        <Select variant="outline" borderColor="black" maxW="150px">
          <option>All</option>
          <option>Week</option>
          <option>Month</option>
          <option>Quarter</option>
          <option>Year</option>
        </Select>,
      ]}
      size="lg"
      bgColor="primary.500"
      items={[
        { label: "Support", content: supportStats },
        { label: "Billing", content: supportStats },
        { label: "Orders", content: supportStats },
      ]}
    />
  )
}

export default OverviewCard
