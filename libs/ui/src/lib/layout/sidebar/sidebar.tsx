import {
  chakra,
  HTMLChakraProps,
  StylesProvider,
  useMultiStyleConfig,
} from "@chakra-ui/system"
import { Drawer, DrawerCloseButton, DrawerContent } from "@chakra-ui/modal"
import { useMediaQuery } from "@chakra-ui/media-query"
import { FC } from "react"
import SidebarSection from "./sidebar-section"
import { SidebarProvider } from "./sidebar.context"

export type SidebarProps = HTMLChakraProps<"aside"> & {
  colorScheme?: string
  onClose: () => void
  isOpen: boolean
}

export type SidebarComponent = FC<SidebarProps> & {
  Section: typeof SidebarSection
}

export const Sidebar: SidebarComponent = ({
  onClose,
  isOpen,
  colorScheme,
  children,
  ...props
}) => {
  const [isMobile] = useMediaQuery("(max-width: 1024px)")
  const variant = isMobile || isOpen ? "static" : "slim"
  const styles = useMultiStyleConfig("Sidebar", { variant })
  const context = {
    isCollapsed: variant === "slim",
  }

  const content = (
    <chakra.aside __css={styles["root"]} {...props}>
      <SidebarProvider value={context}>
        <StylesProvider value={styles}>{children}</StylesProvider>
      </SidebarProvider>
    </chakra.aside>
  )

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerContent maxW={["285px", "320px"]}>
          <DrawerCloseButton
            _hover={{ bg: "whiteAlpha.100" }}
            color="white"
            top={2}
            right={2}
          />
          {content}
        </DrawerContent>
      </Drawer>
    )
  }

  return content
}

Sidebar.Section = SidebarSection
