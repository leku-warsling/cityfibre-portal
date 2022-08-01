import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

export const OrdersPage = () => {
  usePage({ title: "Orders" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/orders-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/orders-desktop.page"))}
    />
  )
}
