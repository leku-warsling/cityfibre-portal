import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

export const BandwidthUsagePage = () => {
  usePage({ title: "Billing" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/bandwidth-usage-touch.page"))}
      Desktop={React.lazy(
        () => import("./desktop/bandwidth-usage-desktop.page")
      )}
    />
  )
}
