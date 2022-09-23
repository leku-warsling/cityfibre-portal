import {
  Button,
  Checkbox,
  Input,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react"
import { createForm, FormFieldsProps, FormItem } from "../../form"
import { FiArrowRight } from "react-icons/fi"
import { PasswordInput } from "../../inputs"

export type LoginFieldsProps = BoxProps &
  FormFieldsProps & {
    showRememberMe?: boolean
  }

const LoginFields = ({
  showRememberMe = true,
  size = "lg",
  isLoading,
  ...props
}: LoginFieldsProps) => {
  const width = useBreakpointValue({ base: "full", lg: "auto" })

  return (
    <>
      <FormItem
        size={size}
        name="username"
        label="Email Address"
        render={(props) => (
          <Input {...props} placeholder="email@example.com" size={size} />
        )}
      />
      <FormItem
        size={size}
        name="password"
        label="Password"
        render={(props) => <PasswordInput {...props} size={size} />}
      />
      {showRememberMe && (
        <FormItem
          size={size}
          align="center"
          name="remember"
          render={(props) => (
            <Checkbox {...props} size={size}>
              Remember me for 30 days
            </Checkbox>
          )}
        />
      )}
      <Button
        rightIcon={<FiArrowRight />}
        spinnerPlacement="end"
        loadingText="Signing in..."
        isLoading={isLoading}
        colorScheme="primary"
        alignSelf="center"
        px={{ lg: 24 }}
        variant="primary"
        type="submit"
        size={size}
        w={width}
      >
        Sign in
      </Button>
    </>
  )
}

export const LoginForm = createForm(LoginFields)
