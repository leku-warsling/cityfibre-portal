import { Login, Logo, loginBackdrop } from "@ui"
import { useAuth } from "../../providers/auth.provider"

const LoginPage = () => {
  const { login, isLoading } = useAuth()

  return (
    <Login
      brand={<Logo height="40" fill="#009F4D" />}
      title="Operate Portal"
      onSubmit={(data) => login(data)}
      backdrop={loginBackdrop}
      height="100vh"
      isLoading={isLoading}
    /> 
  )
}

export default LoginPage