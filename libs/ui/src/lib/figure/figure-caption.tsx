import { Flex, FlexProps } from "@chakra-ui/layout"
import { FC } from "react"

export type FigureCaptionProps = FlexProps & {}

const FigureCaption: FC<FigureCaptionProps> = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
)

FigureCaption.defaultProps = {
  as: "figcaption",
  position: "absolute",
  flexDirection: "column",
  gap: 2,
  bottom: 0,
  left: 0,
  zIndex: 10,
  w: "100%",
}

export default FigureCaption
