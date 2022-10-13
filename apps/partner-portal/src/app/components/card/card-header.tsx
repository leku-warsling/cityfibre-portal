import { Flex, FlexProps, Heading } from "@chakra-ui/layout"
import { cloneElement, ReactElement } from "react"

type CardHeaderProps = FlexProps & {
  size?: "sm" | "md" | "lg"
  actions?: ReactElement[]
}

const CardHeader = ({
  textTransform,
  letterSpacing,
  actions = [],
  fontWeight,
  children,
  fontSize,
  ...props
}: CardHeaderProps) => (
  <Flex {...props}>
    <Heading
      textTransform={textTransform}
      letterSpacing={letterSpacing}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </Heading>
    <Flex>
      {actions.map((el, key) => cloneElement(el, { key, ...el.props }))}
    </Flex>
  </Flex>
)

CardHeader.displayName = "CardHeader"

CardHeader.defaultProps = {
  textTransform: "uppercase",
  justify: "space-between",
  letterSpacing: "wide",
  align: "center",
  fontSize: "2xl",
  fontWeight: 800,
} as const

export default CardHeader
