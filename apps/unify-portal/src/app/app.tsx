import { UserManagementPage, UpsertRolePage, UserRolesPage } from "./pages/user"
import { PartnerSuiteBanner } from "./components/banners/partner-suite-banner"
import RequireAuth from "./components/route/require-auth"
import { DashboardPage } from "./pages/dashboard"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import {
  CreateIncidentPage,
  HelpPage,
  IncidentPage,
  ServicesPage,
} from "./pages/support"
import { OrderPage, OrdersPage } from "./pages/ordering"
import {
  BankDetailsPage,
  CreditNotesPage,
  InvoicesPage,
  PaymentsPage,
  TransactionsPage,
} from "./pages/billing"
import MainLayout from "./layouts/main.layout"
import { AuthLayout } from "@ui"
import {
  RegistrationPage,
  LoginPage,
  ForgottenPasswordPage,
  ResetPasswordPage,
  AuthenticateAccountPage,
} from "./pages/auth"

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
          <Route path="incidents">
            <Route
              index
              element={
                <RequireAuth>
                  <IncidentPage />
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
          </Route>
          <Route
            path="help"
            element={
              <RequireAuth>
                <HelpPage />
              </RequireAuth>
            }
          />
          <Route
            path="services"
            element={
              <RequireAuth>
                <ServicesPage />
              </RequireAuth>
            }
          />
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
            path="invoices"
            element={
              <RequireAuth>
                <InvoicesPage />
              </RequireAuth>
            }
          />
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
                  <UserRolesPage />
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
      </Routes>
    </AnimatePresence>
  )
}

export default App
