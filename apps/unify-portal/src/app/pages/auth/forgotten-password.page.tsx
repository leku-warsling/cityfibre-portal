import { useBreakpointValue, Text } from "@chakra-ui/react"
import { AuthTemplate, ForgottenPasswordForm } from "@ui/lib"

export type PageProps = {
  strapline: string
  title: string
}

export const ForgottenPasswordPage = ({ strapline, title }: PageProps) => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  return (
    <AuthTemplate
      strapline={strapline}
      title={title}
      maxWidth="550px"
      width="100%"
      p={8}
    >
      <Text fontSize={{ base: "sm", lg: "lg" }} textAlign="center">
        Type your email address below and we’ll email you link to reset your
        password
      </Text>
      <ForgottenPasswordForm
        onSubmit={(data) => console.log(data)}
        width="100%"
        size={size}
      />
    </AuthTemplate>
  )
}
