import { Login, Logo, loginBackdrop } from "@ui"
// import { useAuth } from "../../providers/auth.provider"

const LoginPage = () => {
  return (
    <Login
      brand={<Logo height="40" fill="#009F4D" />}
      title="Partner Portal"
      greeting="Serve your customers quickly and effectively from everything to ordering products and services for businesses to managing and resolving service issues"
      onSubmit={(data) => alert("not implemented / configured")}
      backdrop={loginBackdrop}
      height="100vh"
      // isLoading={isLoading}
    />
  )
}

export default {
  Page: LoginPage,
  path: "/login",
}
