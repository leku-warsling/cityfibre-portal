import { Card, CardProps } from "./card"
import { ReactNode } from "react"
import {
  Button,
  ButtonGroup,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  TabsProps,
} from "@chakra-ui/react"
import { omit, pick } from "ramda"

export type TabListProps = TabProps & {
  content: ReactNode
}

export type TabbedCardOwnProps = {
  tabList: TabListProps[]
}

export type TabbedCardProps = CardProps & TabsProps & TabbedCardOwnProps

const childProps = [
  "defaultIndex",
  "colorScheme",
  "orientation",
  "direction",
  "onChange",
  "isFitted",
  "variant",
  "isLazy",
  "align",
  "index",
  "size",
  "id",
] as const

export const TabbedCard = ({ tabList, ...props }: TabbedCardProps) => {
  const tabsProps = pick(childProps, props)
  const cardProps = omit(childProps, props)

  return (
    <Card {...cardProps}>
      <Tabs {...tabsProps}>
        <TabList>
          {tabList.map(({ id, content, children, ...tabProps }, index) => (
            <Tab key={id ?? index} {...tabProps}>
              {children}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabList.map(({ id, content }, index) => (
            <TabPanel key={id ?? index}>{content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Card>
  )
}
