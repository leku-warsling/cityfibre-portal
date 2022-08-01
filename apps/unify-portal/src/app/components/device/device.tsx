import { ComponentType, LazyExoticComponent, Suspense } from "react"
import { useMediaQuery } from "@chakra-ui/react"

export type DeviceProps = {
  Touch: LazyExoticComponent<ComponentType<any>>
  Desktop: LazyExoticComponent<ComponentType<any>>
}

export function Device({ Touch, Desktop }: DeviceProps) {
  const [isMobile] = useMediaQuery("(max-width: 1024px)")

  return (
    <Suspense fallback="Loading...">
      {isMobile ? <Touch /> : <Desktop />}
    </Suspense>
  )
}
