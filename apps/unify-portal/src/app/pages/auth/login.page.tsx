import { Button, Text, VStack } from "@chakra-ui/react"
import { AuthTemplate, LoginForm, TextDivider } from "@ui"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/auth.provider"

export type LoginPageProps = {
  showForgottenPassword?: boolean
  showRegister?: boolean
  strapline?: string
  title?: string
}

export const LoginPage = ({
  showForgottenPassword = true,
  showRegister = true,
  strapline,
  title,
}: LoginPageProps) => {
  const { login, isLoading } = useAuth()

  const register = showRegister && (
    <>
      <Text as="strong" fontSize="2xl">
        Haven’t got an account yet?
      </Text>
      <Button size="lg" to="/register" variant="outline" as={Link}>
        Create an account
      </Button>
    </>
  )

  const divider = showForgottenPassword && showRegister && (
    <TextDivider>or</TextDivider>
  )

  const forgottenPassword = showForgottenPassword && (
    <Button
      to="/auth/forgotten-password"
      color="brand.500"
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
      p={8}
    >
      <LoginForm
        onSubmit={(data: any) => login(data)}
        isLoading={isLoading}
        width="100%"
        mb={8}
      />
      <VStack spacing={6}>
        {forgottenPassword}
        {divider}
        {register}
      </VStack>
    </AuthTemplate>
  )
}
