import { cloneElement, ReactElement } from "react"
import { Card, CardBody, CardHeader } from "@unify/components/card"
import {
  TabPanelProps,
  FlexProps,
  TabPanels,
  TabList,
  Tabs,
  Tab,
} from "@chakra-ui/react"

type CardTabProps = {
  label: string
  key?: string
  content: ReactElement<TabPanelProps>
}

export type TabbedCardProps = Omit<FlexProps, "children"> & {
  size?: "sm" | "md" | "lg"
  actions?: ReactElement[]
  items: CardTabProps[]
  title: string
}

const TabbedCard = ({ actions, title, items, ...props }: TabbedCardProps) => {
  const tabs = items.map(({ label, key }, idx) => (
    <Tab
      key={key ?? idx}
      textTransform="uppercase"
      fontWeight={700}
      letterSpacing="wide"
      fontSize="sm"
    >
      {label}
    </Tab>
  ))

  const panels = items.map(({ content }, key) =>
    cloneElement(content, { ...content.props, key })
  )

  return (
    <Card {...props}>
      <CardHeader actions={actions}>{title}</CardHeader>
      <CardBody>
        <Tabs
          variant="unstyled"
          sx={{
            "[aria-selected='true']": {
              borderBottom: "2px solid black",
            },
          }}
        >
          <TabList>{tabs}</TabList>
          <TabPanels>{panels}</TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  )
}

TabbedCard.defaultProps = {}

export default TabbedCard
