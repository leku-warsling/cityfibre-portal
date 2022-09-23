import { Box, BoxProps, Container, Flex } from "@chakra-ui/layout"
import { FC, ReactNode, useMemo, useRef } from "react"
import useObserver from "../../hooks/useResizeObserver"

export type AppShellProps = BoxProps & {
  header: ReactNode
  sidebar?: ReactNode
}

export const AppShell: FC<AppShellProps> = ({
  sidebar,
  header,
  children,
  ...props
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRect = useObserver(sidebarRef)
  const maxWidth = useMemo(() => {
    return window.matchMedia("(min-width: 1024px)") && contentRect
      ? `calc(100vw - ${contentRect.width}px)`
      : "100vw"
  }, [contentRect])
  return (
    <Flex {...props}>
      <div ref={sidebarRef}>{sidebar}</div>
      <Box flexGrow={1}>
        {header}
        <Container as="main" maxWidth={maxWidth} overflow="auto" px={2}>
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

AppShell.defaultProps = {
  bg: "gray.100",
  height: "100vh",
  width: "100vw",
}
