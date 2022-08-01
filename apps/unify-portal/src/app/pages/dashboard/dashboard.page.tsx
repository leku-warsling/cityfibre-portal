import { usePage } from "../../hooks/use-page.hook"
import React from "react"
import { Device } from "../../components/device"

const DashboardPage = () => {
  usePage({ title: "Dashboard" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/dashboard-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/dashboard-desktop.page"))}
    />
  )
}

export default DashboardPage
