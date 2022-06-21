import { Box, BoxProps, CSSObject, StyleProps } from "@chakra-ui/react"
import { merge, partial } from "ramda"
import { FC } from "react"

type Position = "top" | "middle" | "bottom"
type Placement = "start" | "center" | "end"

export type IndicatorPosition = `${Position}-${Placement}`

export type IndicatorOwnProps = {
  position?: IndicatorPosition
  isDisabled?: boolean
  label?: string
  offset?: number
  size?: number
}

export type IndicatorProps = Omit<BoxProps, "position"> & IndicatorOwnProps

const getPositionProps = (_position: IndicatorPosition, offset = 0) => {
  const styles: StyleProps = {}
  const [position, placement] = _position.split("-")

  if (position === "top") {
    styles.top = offset
    styles.translateY = "-50%"
  }

  if (position === "middle") {
    styles.top = "50%"
    styles.translateY = "-50%"
  }

  if (position === "bottom") {
    styles.bottom = offset
    styles.translateY = "50%"
  }

  if (placement === "start") {
    styles.left = offset
    styles.translateX = "-50%"
  }

  if (placement === "center") {
    styles.left = "50%"
    styles.translateX = "-50%"
  }

  if (placement === "end") {
    styles.right = offset
    styles.translateX = "50%"
  }

  return styles
}

const Indicator: FC<IndicatorProps> = ({
  position = "top-end" as const,
  borderRadius = "full",
  isDisabled = false,
  zIndex = 10,
  offset = 0,
  size = 4,
  children,
  label,
  ...props
}) => {
  return (
    <Box position="relative">
      {!isDisabled && (
        <Box
          {...props}
          {...getPositionProps(position, offset)}
          borderRadius={borderRadius}
          position="absolute"
          zIndex={zIndex}
          height={size}
          width={size}
        >
          {label}
        </Box>
      )}
      {children}
    </Box>
  )
}

export default Indicator
