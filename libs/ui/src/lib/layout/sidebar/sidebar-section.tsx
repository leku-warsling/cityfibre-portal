import { chakra, useStyles } from "@chakra-ui/system"
import { BoxProps } from "@chakra-ui/layout"
import is from "ramda/es/is"
import { FC, ReactNode } from "react"
import { SidebarContextValue, useSidebarContext } from "./sidebar.context"

export type SidebarSectionProps = BoxProps & {
  children: ReactNode | ((props: SidebarContextValue) => ReactNode)
}

const SidebarSection: FC<SidebarSectionProps> = ({ children, ...props }) => {
  const context = useSidebarContext()
  const styles = useStyles()

  return (
    <chakra.div __css={styles["section"]} {...props}>
      {is(Function, children) ? children(context) : children}
    </chakra.div>
  )
}

export default SidebarSection
