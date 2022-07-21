import { PartnerSuiteBanner } from "./components/banners/partner-suite-banner"
import RequireAuth from "./components/route/require-auth"
import {
  OrderEthernetPage,
  OrderFTTPPage,
  OrderPage,
  OrdersPage,
} from "./pages/ordering"
import { DashboardPage } from "./pages/dashboard"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import MainLayout from "./layouts/main.layout"
import {
  AuthLayout,
  NotAuthorizedPage,
  NotFoundPage,
  ServerErrorPage,
} from "@ui"
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

export function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="users"
            element={
              <RequireAuth>
                <UserManagementPage />
              </RequireAuth>
            }
          />
          <Route
            path="account/settings"
            element={
              <RequireAuth>
                <AccountSettingsPage />
              </RequireAuth>
            }
          />
          <Route path="incidents">
            <Route
              index
              element={
                <RequireAuth>
                  <IncidentsPage />
                </RequireAuth>
              }
            />
            <Route
              path="create"
              element={
                <RequireAuth>
                  <CreateIncidentPage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <IncidentPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="help"
            element={
              <RequireAuth>
                <HelpPage />
              </RequireAuth>
            }
          />
          <Route path="services">
            <Route
              index
              element={
                <RequireAuth>
                  <ServicesPage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <ServicePage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="orders">
            <Route
              index
              element={
                <RequireAuth>
                  <OrdersPage />
                </RequireAuth>
              }
            />
            <Route
              path="ethernet"
              element={
                <RequireAuth>
                  <OrderEthernetPage />
                </RequireAuth>
              }
            />
            <Route
              path="fttp"
              element={
                <RequireAuth>
                  <OrderFTTPPage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <OrderPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="transactions"
            element={
              <RequireAuth>
                <TransactionsPage />
              </RequireAuth>
            }
          />
          <Route
            path="bandwidth-usage"
            element={
              <RequireAuth>
                <BandwidthUsagePage />
              </RequireAuth>
            }
          />
          <Route path="invoices">
            <Route
              index
              element={
                <RequireAuth>
                  <InvoicesPage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <InvoicePage />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="credit-notes"
            element={
              <RequireAuth>
                <CreditNotesPage />
              </RequireAuth>
            }
          />
          <Route
            path="payments"
            element={
              <RequireAuth>
                <PaymentsPage />
              </RequireAuth>
            }
          />
          <Route
            path="bank-details"
            element={
              <RequireAuth>
                <BankDetailsPage />
              </RequireAuth>
            }
          />
          <Route path="roles">
            <Route
              index
              element={
                <RequireAuth>
                  <RolesPage />
                </RequireAuth>
              }
            />
            <Route
              path="create"
              element={
                <RequireAuth>
                  <UpsertRolePage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <UpsertRolePage />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/access-control" element={<AccessControlPage />} />
        <Route path="/live-works" element={<LiveWorksPage />} />
        <Route path="/safety-report" element={<SafetyReportPage />} />
        <Route
          path="/auth"
          element={<AuthLayout aside={<PartnerSuiteBanner />} />}
        >
          <Route
            index
            element={
              <LoginPage title="Welcome Back" strapline="Partner Suite" />
            }
          />
          <Route
            path="forgotten-password"
            element={
              <ForgottenPasswordPage
                strapline="Partner Suite"
                title="Forgotten Password"
              />
            }
          />
          <Route
            path="reset-password"
            element={
              <ResetPasswordPage
                strapline="Partner Suite"
                title="Reset Your Password"
              />
            }
          />
          <Route
            path="authenticate-account"
            element={
              <AuthenticateAccountPage
                strapline="Partner Suite"
                title="Authenticate Your Account"
              />
            }
          />
        </Route>
        <Route path="/unauthorized" element={<NotAuthorizedPage />} />
        <Route path="/server-error" element={<ServerErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
