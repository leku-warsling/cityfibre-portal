import loadable from "@loadable/component"

export const BandwidthUsagePage = loadable(
  () => import("./bandwidth-usage.page")
)
export const TransactionsPage = loadable(() => import("./transactions.page"))
export const CreditNotesPage = loadable(() => import("./credit-notes.page"))
export const BankDetailsPage = loadable(() => import("./bank-details.page"))
export const InvoicesPage = loadable(() => import("./invoices.page"))
export const InvoicePage = loadable(() => import("./invoice.page"))
export const PaymentsPage = loadable(() => import("./payments.page"))
