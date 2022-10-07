import { usePage } from "../../hooks/use-page.hook"
import React from "react"
import { Device } from "../../components/device"
import { useAuth } from "@unify/providers/auth.provider"

const getDashboard = (role = "") => {
  switch (role) {
    case "Operations Manager":
      return React.lazy(() => import("./orders-dashboard.page"))
    case "Support Manager":
      return React.lazy(() => import("./support-dashboard.page"))
    case "Finance Manager":
      return React.lazy(() => import("./billing-dashboard.page"))
    default:
      return React.lazy(() => import("./desktop/dashboard-desktop.page"))
  }
}

const DashboardPage = () => {
  usePage({ title: "Dashboard" })
  const { user } = useAuth()

  return (
    <Device
      Touch={React.lazy(() => import("./touch/dashboard-touch.page"))}
      Desktop={getDashboard(user?.["roles"])}
    />
  )
}

export default DashboardPage
