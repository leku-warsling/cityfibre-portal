import {
  VStack,
  Text,
  Heading,
  SystemProps,
  StackProps,
} from "@chakra-ui/react"
import { FC, ReactNode } from "react"

export type TitleProps = {
  strapline?: ReactNode
  subtitle?: ReactNode
  scale?: number
  colors?: {
    strapline?: SystemProps["color"]
    subtitle?: SystemProps["color"]
    title?: SystemProps["color"]
  }
  weights?: {
    strapline?: SystemProps["color"]
    subtitle?: SystemProps["color"]
    title?: SystemProps["color"]
  }
}

// TODO: implement dynamic scale (font size) of stapline, title and subtitle ie (Major third, Golden ratio etc) with base size and relation of text heiarchy/importance

export const Title: FC<TitleProps & StackProps> = ({
  strapline,
  children,
  subtitle,
  weights,
  colors,
  scale,
  ...props
}) => {
  return (
    <VStack {...props}>
      {strapline && (
        <Text
          color={colors?.strapline ?? "brand.500"}
          fontWeight={weights?.strapline ?? 600}
          fontSize={{ lg: "xl", base: "md" }}
          lineHeight="0"
        >
          {strapline}
        </Text>
      )}
      <Heading
        color={colors?.title ?? "gray.900"}
        fontWeight={weights?.title ?? 800}
        fontSize={{ lg: "4xl", base: "2xl" }}
      >
        {children}
      </Heading>
      {subtitle && (
        <Text
          color={colors?.strapline ?? "gray.500"}
          fontWeight={weights?.strapline ?? 600}
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}

Title.defaultProps = {
  spacing: 3,
}
