import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

const InvoicesPage = () => {
  usePage({ title: "Billing" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/invoices-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/invoices-desktop.page"))}
    />
  )
}

export default InvoicesPage
