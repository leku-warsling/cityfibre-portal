import loadable from "@loadable/component"

const BandwidthUsagePage = loadable(() => import("./bandwidth-usage.page"))
const TransactionsPage = loadable(() => import("./transactions.page"))
const CreditNotesPage = loadable(() => import("./credit-notes.page"))
const BankDetailsPage = loadable(() => import("./bank-details.page"))
const InvoicesPage = loadable(() => import("./invoices.page"))
const InvoicePage = loadable(() => import("./invoice.page"))
const PaymentsPage = loadable(() => import("./payments.page"))

const routes = [
  { path: "transactions", element: <TransactionsPage /> },
  {
    path: "bandwidth-usage",
    element: <BandwidthUsagePage />,
  },
  {
    path: "invoices",
    children: [
      { index: true, element: <InvoicesPage /> },
      { path: ":id", element: <InvoicePage /> },
    ],
  },
  { path: "transactions", element: <TransactionsPage /> },
  {
    path: "bandwidth-usage",
    element: <BandwidthUsagePage />,
  },
  {
    path: "invoices",
    children: [
      { index: true, element: <InvoicesPage /> },
      { path: ":id", element: <InvoicePage /> },
    ],
  },
  { path: "credit-notes", element: <CreditNotesPage /> },
  { path: "payments", element: <PaymentsPage /> },
  { path: "bank-details", element: <BankDetailsPage /> },
]

export default routes
