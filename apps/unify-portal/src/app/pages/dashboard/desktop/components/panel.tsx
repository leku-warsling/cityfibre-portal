import { Flex, Heading, Box, BoxProps } from "@chakra-ui/layout"
import { cloneElement, FC, ReactElement, ReactNode } from "react"

export type PanelProps = BoxProps & {
  actions?: ReactElement[]
  footer?: ReactNode
  title: ReactNode
}

const Panel: FC<PanelProps> = ({
  actions = [],
  children,
  title,
  footer,
  ...props
}) => {
  return (
    <Box {...props}>
      <Flex justify="space-between" mb={4} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          {title}
        </Heading>
        <Box>
          {actions.map((el, key) => cloneElement(el, { key, ...el.props }))}
        </Box>
      </Flex>
      {children}
      {footer}
    </Box>
  )
}

Panel.defaultProps = {
  boxShadow: "base",
  bgColor: "white",
  rounded: 4,
  px: 8,
  py: 6,
}

export default Panel
