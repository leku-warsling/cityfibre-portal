import loadable from "@loadable/component"

export const AuthenticateAccountPage = loadable(
  () => import("./authenticate-account.page")
)
export const ForgottenPasswordPage = loadable(
  () => import("./forgotten-password.page")
)
export const ResetPasswordPage = loadable(() => import("./reset-password.page"))
export const LoginPage = loadable(() => import("./login.page"))
export * from "./register"
