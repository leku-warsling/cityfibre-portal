import { useBreakpointValue } from "@chakra-ui/media-query"
import { Button } from "@chakra-ui/button"
import { Text, VStack } from "@chakra-ui/layout"
import { AuthTemplate, LoginForm, TextDivider } from "@ui/lib"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export type LoginPageProps = {
  showForgottenPassword?: boolean
  showRegister?: boolean
  strapline?: string
  title?: string
}

const LoginPage = ({
  showForgottenPassword = true,
  showRegister = true,
  strapline,
  title,
}: LoginPageProps) => {
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)

  const onLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/")
    }, 3000)
  }

  const register = showRegister && (
    <>
      <Text as="strong" fontSize={{ base: "sm", lg: "2xl" }}>
        Haven’t got an account yet?
      </Text>
      <Button size={size} to="/register" variant="outline" as={Link}>
        Create an account
      </Button>
    </>
  )

  const divider = showForgottenPassword && showRegister && (
    <TextDivider fontSize={{ base: "sm", lg: "md" }}>or</TextDivider>
  )

  const forgottenPassword = showForgottenPassword && (
    <Button
      to="/auth/forgotten-password"
      color="primary.500"
      variant="link"
      as={Link}
    >
      Forgot your password?
    </Button>
  )

  return (
    <AuthTemplate
      strapline={strapline}
      maxWidth="550px"
      title={title}
      width="100%"
      p={{ base: 4, lg: 8 }}
    >
      <LoginForm
        onSubmit={onLogin}
        spacing={{ base: 4, lg: 6 }}
        isLoading={isLoading}
        width="100%"
        size={size}
        mb={{ base: 4, lg: 8 }}
      />
      <VStack spacing={{ base: 4, lg: 6 }}>
        {forgottenPassword}
        {divider}
        {register}
      </VStack>
    </AuthTemplate>
  )
}

export default LoginPage
