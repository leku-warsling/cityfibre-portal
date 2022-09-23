import { Box, BoxProps } from "@chakra-ui/layout"
import { FC } from "react"
import FigureCaption from "./figure-caption"
import FigureHeader from "./figure-header"

export type FigureProps = BoxProps & {}

type FigureComponent = FC<FigureProps> & {
  Caption: typeof FigureCaption
  Header: typeof FigureHeader
}

export const Figure: FigureComponent = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
)

Figure.defaultProps = {
  as: "figure",
  position: "relative",
}

Figure.Caption = FigureCaption
Figure.Header = FigureHeader
