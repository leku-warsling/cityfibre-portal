import React from "react"
import { Device } from "../../components/device"
import { usePage } from "../../hooks/use-page.hook"

export const CreditNotesPage = () => {
  usePage({ title: "Billing" })

  return (
    <Device
      Touch={React.lazy(() => import("./touch/credit-notes-touch.page"))}
      Desktop={React.lazy(() => import("./desktop/credit-notes-desktop.page"))}
    />
  )
}
