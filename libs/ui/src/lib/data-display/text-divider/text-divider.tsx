import { Divider, HStack, StackProps, Text } from "@chakra-ui/react"
import { FC } from "react"

export const TextDivider: FC<StackProps> = ({
  borderColor,
  children,
  color,
  ...props
}) => (
  <HStack {...props}>
    <Divider borderColor={borderColor} />
    <Text color={color}>{children}</Text>
    <Divider borderColor={borderColor} />
  </HStack>
)

TextDivider.defaultProps = {
  borderColor: "gray.400",
  color: "gray.400",
  width: "100%",
  spacing: 2,
}
