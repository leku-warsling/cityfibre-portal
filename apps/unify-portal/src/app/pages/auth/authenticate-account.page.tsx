import { AuthenticateAccountForm, AuthTemplate, Text, Button } from "@ui"

type PageProps = {
  strapline: string
  title: string
}

export const AuthenticateAccountPage = ({ strapline, title }: PageProps) => {
  return (
    <AuthTemplate
      strapline={strapline}
      title={title}
      maxWidth="550px"
      width="100%"
      p={8}
    >
      <Text fontSize="lg" textAlign="center">
        Please confirm your account by entering the authorization code sent to
        your email address
      </Text>
      <AuthenticateAccountForm
        onSubmit={(data) => console.log(data)}
        width="100%"
        spacing={12}
      />
      <Text>
        Didn’t receive a code?{" "}
        <Button variant="link" colorScheme="brand">
          Send it again
        </Button>
      </Text>
    </AuthTemplate>
  )
}
