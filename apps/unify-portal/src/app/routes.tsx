import { NotAuthorizedPage, NotFoundPage, ServerErrorPage } from "@ui/lib/pages"
import { PartnerSuiteBanner } from "./components/banners/partner-suite-banner"
import { DashboardPage } from "./pages/dashboard"
import MainLayout from "./layouts/main.layout"
import { AuthLayout } from "@ui/lib/templates"
import {
  OrderEthernetPage,
  OrderFTTPPage,
  OrderPage,
  OrdersPage,
  ProductsPage,
} from "./pages/ordering"
import {
  AccountSettingsPage,
  UserManagementPage,
  UpsertRolePage,
  RolesPage,
} from "./pages/user"
import {
  CreateIncidentPage,
  HelpPage,
  IncidentPage,
  IncidentsPage,
  NetworksPage,
  ServicePage,
  ServicesPage,
} from "./pages/support"
import {
  BankDetailsPage,
  CreditNotesPage,
  InvoicesPage,
  PaymentsPage,
  TransactionsPage,
  BandwidthUsagePage,
  InvoicePage,
} from "./pages/billing"
import {
  RegistrationPage,
  LoginPage,
  ForgottenPasswordPage,
  ResetPasswordPage,
  AuthenticateAccountPage,
} from "./pages/auth"
import { AccessControlPage, LiveWorksPage } from "./pages/contact"
import { SafetyReportPage } from "./pages/safety"
import ProtectedRoute from "./components/route/protected-route"
import { useRoutes } from "react-router-dom"

const Router = () => {
  const element = useRoutes([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },
            {
              path: "users",
              element: <UserManagementPage />,
            },
            {
              path: "account/settings",
              element: <AccountSettingsPage />,
            },
            {
              path: "incidents",
              children: [
                { index: true, element: <IncidentsPage /> },
                { path: "create", element: <CreateIncidentPage /> },
                { path: ":id", element: <IncidentPage /> },
              ],
            },
            { path: "help", element: <HelpPage /> },
            { path: "networks", element: <NetworksPage /> },
            {
              path: "services",
              children: [
                { index: true, element: <ServicesPage /> },
                { path: ":id", element: <ServicePage /> },
              ],
            },
            {
              path: "orders",
              children: [
                { index: true, element: <OrdersPage /> },
                { path: "ethernet", element: <OrderEthernetPage /> },
                { path: "products", element: <ProductsPage /> },
                { path: "fttp", element: <OrderFTTPPage /> },
                { path: ":id", element: <OrderPage /> },
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
            {
              path: "roles",
              children: [
                { index: true, element: <RolesPage /> },
                { path: "create", element: <UpsertRolePage /> },
                { path: ":id", element: <UpsertRolePage /> },
              ],
            },
          ],
        },
      ],
    },
    { path: "/register", element: <RegistrationPage /> },
    { path: "/access-control", element: <AccessControlPage /> },
    { path: "/live-works", element: <LiveWorksPage /> },
    { path: "/safety-report", element: <SafetyReportPage /> },
    {
      path: "/auth",
      element: <AuthLayout aside={<PartnerSuiteBanner />} />,
      children: [
        {
          index: true,
          element: <LoginPage title="Welcome Back" strapline="Partner Suite" />,
        },
        {
          path: "forgotten-password",
          element: (
            <ForgottenPasswordPage
              strapline="Partner Suite"
              title="Forgotten Password"
            />
          ),
        },
        {
          path: "reset-password",
          element: (
            <ResetPasswordPage
              strapline="Partner Suite"
              title="Reset Your Password"
            />
          ),
        },
        {
          path: "authenticate-account",
          element: (
            <AuthenticateAccountPage
              strapline="Partner Suite"
              title="Authenticate Your Account"
            />
          ),
        },
      ],
    },
    { path: "/unauthorized", element: <NotAuthorizedPage /> },
    { path: "/server-error", element: <ServerErrorPage /> },
    { path: "*", element: <NotFoundPage /> },
  ])
  return element
}

export default Router