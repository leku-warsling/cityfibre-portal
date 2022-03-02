import { Box, BoxProps, Flex } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

export type AppShellProps = BoxProps & {
  header: ReactNode
  sidebar?: ReactNode
}

const AppShell: FC<AppShellProps> = ({ 
  sidebar,
  header,
  children,
  ...props 
}) => (
  <Flex {...props} bg="gray.100">
    {sidebar}
    <Box width="100%">
      {header}
      {children}
    </Box>
  </Flex>
)

export default AppShell