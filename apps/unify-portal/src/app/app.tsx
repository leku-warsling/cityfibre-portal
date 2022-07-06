import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import {
  RegistrationPage,
  LoginPage,
  ForgottenPasswordPage,
  ResetPasswordPage,
  AuthenticateAccountPage,
} from "./pages/auth"
import { DashboardPage } from "./pages/dashboard"
import { PartnerSuiteBanner } from "./components/banners/partner-suite-banner"
import { AuthLayout } from "@ui"
import MainLayout from "./layouts/main.layout"

export function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
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
