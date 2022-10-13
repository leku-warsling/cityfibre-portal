import { PartnerSuiteBanner } from "@unify/components/banners/partner-suite-banner"
import { AuthLayout } from "@ui/lib/templates/auth"
import { RegistrationPage } from "./register"
import loadable from "@loadable/component"

const AuthenticateAccountPage = loadable(
  () => import("./authenticate-account.page")
)
const ForgottenPasswordPage = loadable(
  () => import("./forgotten-password.page")
)
const ResetPasswordPage = loadable(() => import("./reset-password.page"))
const LoginPage = loadable(() => import("./login.page"))

const routes = [
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
  { path: "/register", element: <RegistrationPage /> },
]

export default routes
