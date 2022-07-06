import { Button, Checkbox, Input, BoxProps } from "@chakra-ui/react"
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
}: LoginFieldsProps) => (
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
      loadingText="Sign in"
      isLoading={isLoading}
      colorScheme="brand"
      alignSelf="center"
      variant="solid"
      type="submit"
      size={size}
      w="150px"
    >
      Sign in
    </Button>
  </>
)

export const LoginForm = createForm(LoginFields)
