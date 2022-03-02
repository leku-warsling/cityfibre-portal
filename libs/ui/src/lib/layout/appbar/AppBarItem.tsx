import { Flex, FlexProps } from "@chakra-ui/react"
import { FC } from "react"

export type AppBarItemProps = FlexProps


const AppBarItem: FC<AppBarItemProps> = ({ children, ...props }) => (
  <Flex {...props}>
    {children}
  </Flex>
)

AppBarItem.defaultProps = {
  alignItems: "center"
}

export default AppBarItem