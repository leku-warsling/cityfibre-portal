import { chakra, BoxProps, useStyles } from "@chakra-ui/react"
import { is } from "ramda"
import { FC, ReactNode } from "react"
import { useSidebarContext, SidebarContextValue } from "./sidebar.context"

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