import React from "react"
import { Device } from "../../../components/device"
import { usePage } from "../../../hooks/use-page.hook"

export const IncidentsPage = () => {
  usePage({ title: "Support" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/incidents-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/incidents-desktop.page"))}
    />
  )
}
