import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
import { createForm, FormItem, FormFieldsProps } from "../../form"

export const ForgottenPasswordFields = ({
  isLoading,
  size = "lg",
  ...props
}: FormFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="username"
      label="Email Address"
      render={(props) => (
        <Input {...props} placeholder="email@example.com" size={size} />
      )}
    />
    <Button
      spinnerPlacement="end"
      loadingText="Send Reset Link"
      isLoading={isLoading}
      colorScheme="primary"
      alignSelf="center"
      variant="primary"
      type="submit"
      size={size}
      px={12}
    >
      Send Reset Link
    </Button>
  </>
)

export const ForgottenPasswordForm = createForm(ForgottenPasswordFields)
