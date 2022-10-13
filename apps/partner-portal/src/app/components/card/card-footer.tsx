import { FlexProps, Flex } from "@chakra-ui/layout"
import { FC } from "react"

const CardFooter: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
)

CardFooter.displayName = "CardFooter"

export default CardFooter
