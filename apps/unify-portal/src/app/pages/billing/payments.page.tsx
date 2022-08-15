import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

export const PaymentsPage = () => {
  usePage({ title: "Billing" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/payments-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/payments-desktop.page"))}
    />
  )
}
