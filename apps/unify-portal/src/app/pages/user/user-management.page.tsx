import { usePage } from "../../hooks/use-page.hook"
import { Device } from "../../components/device"
import React from "react"

export const UserManagementPage = () => {
  usePage({ title: "User Management" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/users-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/users-desktop.page"))}
    />
  )
}
