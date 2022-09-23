import { Box, BoxProps } from "@chakra-ui/layout"
import { pipe } from "fp-ts/lib/function"
import allPass from "ramda/es/allPass"
import has from "ramda/es/has"
import is from "ramda/es/is"
import propEq from "ramda/es/propEq"
import { Children, cloneElement, FC, ReactChild, ReactElement } from "react"
import CardSection from "./card-section"

export interface CardProps extends BoxProps {
  padding?: number
  p?: number
}

export type CardComponent = FC<CardProps> & {
  Section: typeof CardSection
}

const isCardSection = (comp: ReactChild): comp is ReactElement =>
  pipe(
    comp,
    allPass<any>([is(Object), has("type"), propEq("type", CardSection)])
  )

export const Card: CardComponent = ({ children, p, ...props }) => {
  const _children = Children.toArray(children) as ReactChild[]
  const content = _children.map((child, index) => {
    if (isCardSection(child)) {
      return cloneElement(child, {
        isLast: index === _children.length - 1,
        isFirst: index === 0,
        padding: p,
      })
    }
    return child
  })

  return (
    <Box {...props} p={p}>
      {content}
    </Box>
  )
}

Card.Section = CardSection
Card.defaultProps = {
  position: "relative",
  overflow: "hidden",
  bgColor: "white",
  p: 5,
}
