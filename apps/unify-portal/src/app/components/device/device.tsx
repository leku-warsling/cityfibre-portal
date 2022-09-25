import { ComponentType, LazyExoticComponent, Suspense } from "react"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Fallback } from "../fallback/falback"

export type DeviceProps = {
  Touch: LazyExoticComponent<ComponentType<any>>
  Desktop: LazyExoticComponent<ComponentType<any>>
}

export function Device({ Touch, Desktop }: DeviceProps) {
  const [isMobile] = useMediaQuery("(max-width: 1024px)")

  return (
    <Suspense fallback={<Fallback />}>
      {isMobile ? <Touch /> : <Desktop />}
    </Suspense>
  )
}
