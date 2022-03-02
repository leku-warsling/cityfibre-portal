import { Flex, FlexProps } from "@chakra-ui/react"
import { FC } from "react"
import AppBarItem from "./AppBarItem"
import AppBarSection from "./AppBarSection"

export type AppBarProps = FlexProps & {
  colorScheme?: string
  size?: string
}

type AppBarComponent = FC<AppBarProps> & {
  Section: typeof AppBarSection
  Item: typeof AppBarItem
}

const AppBar: AppBarComponent = ({ children, ...props }) => (
  <Flex {...props}>
    {children}
  </Flex>
)

AppBar.Section = AppBarSection
AppBar.Item = AppBarItem

export default AppBar