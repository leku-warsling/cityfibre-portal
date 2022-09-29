import { FlexProps, Flex } from "@chakra-ui/layout"
import { FC } from "react"

const CardBody: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
)

CardBody.displayName = "Card Body"

CardBody.defaultProps = {
  flexDir: "column",
  flex: 1,
}

export default CardBody
