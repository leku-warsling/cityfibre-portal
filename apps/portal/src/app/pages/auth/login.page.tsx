import { Login, Logo, loginBackdrop } from "@ui"
import { useAuth } from "../../providers/auth.provider"

const LoginPage = () => {
  const { login, isLoading } = useAuth()

  return (
    <Login
      brand={<Logo height="40" fill="#009F4D" />}
      title="Operate Portal"
      caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta pulvinar venenatis. Ut et metus libero. Nunc feugiat aliquam urna, et porttitor dui auctor et"
      onSubmit={(data) => login(data)}
      backdrop={loginBackdrop}
      height="100vh"
      isLoading={isLoading}
    /> 
  )
}

export default LoginPage