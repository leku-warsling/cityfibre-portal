import { Box, BoxProps } from "@chakra-ui/layout"
import { StyleProps } from "@chakra-ui/system"
import { FC } from "react"

type Position = "top" | "middle" | "bottom"
type Placement = "start" | "center" | "end"

export type IndicatorPosition = `${Position}-${Placement}`

export type IndicatorOwnProps = {
  position?: IndicatorPosition
  isDisabled?: boolean
  label?: string
  offset?: number | [number, number]
  size?: number
}

export type IndicatorProps = Omit<BoxProps, "position"> & IndicatorOwnProps

const getPositionProps = (_position: IndicatorPosition, offset: number[]) => {
  const styles: StyleProps = {}
  const [position, placement] = _position.split("-")

  if (position === "top") {
    styles.top = offset[1]
    styles.translateY = "-50%"
  }

  if (position === "middle") {
    styles.top = "50%"
    styles.translateY = "-50%"
  }

  if (position === "bottom") {
    styles.bottom = offset[1]
    styles.translateY = "50%"
  }

  if (placement === "start") {
    styles.left = offset[0]
    styles.translateX = "-50%"
  }

  if (placement === "center") {
    styles.left = "50%"
    styles.translateX = "-50%"
  }

  if (placement === "end") {
    styles.right = offset[0]
    styles.translateX = "50%"
  }

  const { translateX, translateY, ...rest } = styles
  return {
    ...rest,
    transform: `translate(${translateX}, ${translateY})`,
  }
}

export const Indicator: FC<IndicatorProps> = ({
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
  const _offset = Array.isArray(offset) ? offset : [offset, offset]
  console.log(getPositionProps(position, _offset))
  return (
    <Box position="relative">
      {!isDisabled && (
        <Box
          {...props}
          {...getPositionProps(position, _offset)}
          borderRadius={borderRadius}
          position="absolute"
          zIndex={zIndex}
          height={size}
          width={size}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <span>{label}</span>
        </Box>
      )}
      {children}
    </Box>
  )
}
