import { Box, BoxProps } from "@chakra-ui/layout"
import { FC } from "react"

export type FigureHeaderProps = BoxProps & {}

const FigureHeader: FC<FigureHeaderProps> = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
)

FigureHeader.defaultProps = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 10,
  w: "100%",
}

export default FigureHeader
