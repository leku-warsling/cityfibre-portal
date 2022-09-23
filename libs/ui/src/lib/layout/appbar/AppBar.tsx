import { Flex, FlexProps } from "@chakra-ui/layout"
import { FC } from "react"
import AppBarItem from "./AppBarItem"
import AppBarSection from "./AppBarSection"

export type AppBarProps = FlexProps & {
  colorScheme?: string
  size?: string
}

export type AppBarComponent = FC<AppBarProps> & {
  Section: typeof AppBarSection
  Item: typeof AppBarItem
}

export const AppBar: AppBarComponent = ({ children, ...props }) => (
  <Flex as="header" gap={4} {...props}>
    {children}
  </Flex>
)

AppBar.Section = AppBarSection
AppBar.Item = AppBarItem
