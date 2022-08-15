import React from "react"
import { Device } from "../../../components/device"
import { usePage } from "../../../hooks/use-page.hook"

export const ServicesPage = () => {
  usePage({ title: "Support" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/services-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/services-desktop.page"))}
    />
  )
}
