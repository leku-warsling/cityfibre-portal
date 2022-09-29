// @ts-nocheck
import { Flex, FlexProps } from "@chakra-ui/layout"
import { Children, cloneElement, ReactElement } from "react"
// import { pipe } from "fp-ts/lib/function"
// import startsWith from "ramda/es/startsWith"
import prop from "ramda/es/prop"
// import where from "ramda/es/where"
// @ts-ignore
import __ from "ramda/es/__"

export type CardProps = Omit<FlexProps, "children"> & {
  size?: "sm" | "md" | "lg"
  children: ReactElement | ReactElement[]
}

const getSizeStyleProps = prop(__, {
  sm: {
    px: 4,
    py: 2,
    gap: 2,
  },
  md: {
    px: 6,
    py: 4,
    gap: 4,
  },
  lg: {
    px: 8,
    py: 6,
    gap: 6,
  },
})

const Card = ({ children, size = "md", ...props }: CardProps) => {
  const { px, py, gap } = getSizeStyleProps(size)
  const _children = Children.toArray(children)
  const content = _children.map((child, index) => {
    const styleProps = {
      pt: index === 0 ? py : 0,
      pb: index === _children.length - 1 ? py : 0,
      px,
    }
    if (child?.type?.name?.startsWith("Card")) {
      return cloneElement(child, { ...styleProps, ...child.props })
    }
    return child
  })

  return (
    <Flex gap={gap} {...props}>
      {content}
    </Flex>
  )
}

Card.defaultProps = {
  position: "relative",
  overflow: "hidden",
  boxShadow: "base",
  bgColor: "white",
  flexDir: "column",
  rounded: 4,
}

export default Card
