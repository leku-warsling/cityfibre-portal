import { Flex, FlexProps } from "@chakra-ui/react"
import { FC } from "react"

export type AppBarSectionProps = FlexProps


const AppBarSection: FC<AppBarSectionProps> = ({ children, ...props }) => (
  <Flex {...props}>
    {children}
  </Flex>
)

AppBarSection.defaultProps = {
  alignItems: "center"
}

export default AppBarSection