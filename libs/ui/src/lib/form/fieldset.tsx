import {
  Box,
  BoxProps,
  Flex,
  SimpleGrid,
  SimpleGridProps,
  Text,
} from "@chakra-ui/layout"
import { FC, ReactNode } from "react"

export type FieldsetOwnProps = {
  description?: ReactNode
  legend: ReactNode
}

export type FieldsetProps = Pick<
  SimpleGridProps,
  "spacing" | "columns" | "spacingX" | "spacingY"
> &
  FieldsetOwnProps &
  BoxProps

export const Fieldset: FC<FieldsetProps> = ({
  width = "100%",
  description,
  columns = 1,
  spacingX,
  spacingY,
  spacing,
  legend,
  children,
  ...props
}) => (
  <Box as="fieldset" {...props} width={width}>
    <Flex flexDir="column" gap={2} align="flex-start" w="100%" mb={6}>
      <Text
        fontWeight={800}
        fontSize="xl"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {legend}
      </Text>
      {description && (
        <Text color="gray.600" maxW="500px">
          {description}
        </Text>
      )}
    </Flex>
    <SimpleGrid
      spacingX={spacingX}
      spacingY={spacingY}
      columns={columns}
      spacing={spacing}
      w="100%"
    >
      {children}
    </SimpleGrid>
  </Box>
)
