import { BoxProps, StyleProps } from "@chakra-ui/react"
import { ComponentType } from "react"

type Vertical = "top" | "middle" | "bottom"
type Horizontal = "start" | "center" | "end"

export type Alignment = `${Vertical}-${Horizontal}`

export type PositionProps = {
  align?: Alignment
  zIndex?: number
  offset?: number
}

const getAlignmentProps = (align: Alignment, offset = 0) => {
  const [vertical, horizontal] = align.split("-")
  const styles: StyleProps = {}

  if (vertical === "top") {
    styles.top = offset
    styles.translateY = "-50%"
  }

  if (vertical === "middle") {
    styles.top = "50%"
    styles.translateY = "-50%"
  }

  if (vertical === "bottom") {
    styles.bottom = offset
    styles.translateY = "50%"
  }

  if (horizontal === "start") {
    styles.left = offset
    styles.translateX = "-50%"
  }

  if (horizontal === "center") {
    styles.left = "50%"
    styles.translateX = "-50%"
  }

  if (horizontal === "end") {
    styles.right = offset
    styles.translateX = "50%"
  }

  return styles
}

export const position = <P extends BoxProps>(Component: ComponentType<P>) => {
  return ({
    position = "absolute",
    align = "top-end",
    zIndex = 10,
    offset = 0,
    ...props
  }: P & PositionProps) => (
    <Component
      {...getAlignmentProps(align, offset)}
      position={position}
      {...(props as P)}
      zIndex={zIndex}
    />
  )
}
