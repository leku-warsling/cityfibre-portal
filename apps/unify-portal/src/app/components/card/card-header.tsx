import { Flex, FlexProps, Heading } from "@chakra-ui/layout"
import { SystemProps } from "@chakra-ui/react"
import { cloneElement, ReactElement } from "react"

type CardHeaderProps = FlexProps & {
  fontWeight?: SystemProps["fontWeight"]
  fontSize?: SystemProps["fontSize"]
  size?: "sm" | "md" | "lg"
  actions?: ReactElement[]
}

const CardHeader = ({ children, actions = [], ...props }: CardHeaderProps) => (
  <Flex {...props}>
    <Heading fontSize="lg" fontWeight={600}>
      {children}
    </Heading>
    <Flex>
      {actions.map((el, key) => cloneElement(el, { key, ...el.props }))}
    </Flex>
  </Flex>
)

CardHeader.displayName = "CardHeader"

CardHeader.defaultProps = {
  justify: "space-between",
  align: "center",
  fontSize: "lg",
  fontWeight: 600,
} as const

export default CardHeader
