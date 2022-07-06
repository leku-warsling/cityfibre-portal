import { AuthTemplate, ResetPasswordForm, Text, ResetPasswordSchema } from "@ui"

type PageProps = {
  strapline: string
  title: string
}

export const ResetPasswordPage = ({ strapline, title }: PageProps) => {
  return (
    <AuthTemplate
      strapline={strapline}
      title={title}
      maxWidth="550px"
      width="100%"
      p={8}
    >
      <Text fontSize="lg" textAlign="center">
        Ensure that your new password meets the security requirements by having:
      </Text>
      <ResetPasswordForm
        onSubmit={(data) => console.log(data)}
        schema={ResetPasswordSchema}
        width="100%"
      />
    </AuthTemplate>
  )
}
