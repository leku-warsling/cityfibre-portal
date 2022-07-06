import { Button, Input } from "@chakra-ui/react"
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
      colorScheme="brand"
      alignSelf="center"
      variant="solid"
      type="submit"
      size={size}
      px={12}
    >
      Send Reset Link
    </Button>
  </>
)

export const ForgottenPasswordForm = createForm(ForgottenPasswordFields)
