import { Box, BoxProps } from "@chakra-ui/layout"
import { FC } from "react"

export type CardSectionProps = {
  isFirst?: boolean
  isLast?: boolean
  padding?: number
}

const CardSection: FC<CardSectionProps & BoxProps> = ({
  padding = 0,
  isFirst,
  isLast,
  ...props
}) => {
  const negatePadding = -1 * padding

  return (
    <Box
      {...props}
      marginBottom={isLast ? negatePadding : undefined}
      marginTop={isFirst ? negatePadding : undefined}
      marginRight={negatePadding}
      marginLeft={negatePadding}
    />
  )
}

CardSection.defaultProps = {}

export default CardSection
