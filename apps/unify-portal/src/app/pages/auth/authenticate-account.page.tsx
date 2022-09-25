import { useBreakpointValue } from "@chakra-ui/media-query"
import { Button } from "@chakra-ui/button"
import { Text } from "@chakra-ui/layout"
import { AuthenticateAccountForm, AuthTemplate } from "@ui/lib/templates/auth"

type PageProps = {
  strapline: string
  title: string
}

const AuthenticateAccountPage = ({ strapline, title }: PageProps) => {
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
        Please confirm your account by entering the authorization code sent to
        your email address
      </Text>
      <AuthenticateAccountForm
        onSubmit={(data) => console.log(data)}
        width="100%"
        spacing={{ base: 6, lg: 12 }}
        size={size}
      />
      <Text>
        Didn’t receive a code?{" "}
        <Button variant="link" colorScheme="black">
          Send it again
        </Button>
      </Text>
    </AuthTemplate>
  )
}

export default AuthenticateAccountPage
