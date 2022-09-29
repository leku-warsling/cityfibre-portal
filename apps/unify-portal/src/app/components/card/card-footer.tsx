import { FlexProps, Flex } from "@chakra-ui/layout"
import { FC } from "react"

const CardFooter: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
)
export default CardFooter
