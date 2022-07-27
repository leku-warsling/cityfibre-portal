import { useBreakpointValue } from "@chakra-ui/react"
import { AuthTemplate, ResetPasswordForm, Text, ResetPasswordSchema } from "@ui"

type PageProps = {
  strapline: string
  title: string
}

export const ResetPasswordPage = ({ strapline, title }: PageProps) => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  return (
    <AuthTemplate
      gap={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 8 }}
      strapline={strapline}
      justify="flex-start"
      maxWidth="550px"
      title={title}
      width="100%"
      py={{ base: 14, lg: 8 }}
    >
      <Text fontSize={{ base: "sm", lg: "lg" }} textAlign="center">
        Ensure that your new password meets the security requirements by having:
      </Text>
      <ResetPasswordForm
        onSubmit={(data) => console.log(data)}
        schema={ResetPasswordSchema}
        width="100%"
        size={size}
      />
    </AuthTemplate>
  )
}
