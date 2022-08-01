import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

export const OrderPage = () => {
  usePage({ title: "Orders" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/order-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/order-desktop.page"))}
    />
  )
}
