import { Button } from "@chakra-ui/button"
import { createForm, FormItem, FormFieldsProps } from "../../form"
import { PinInput } from "../../inputs"

export const AuthenticateAccountFields = ({
  isLoading,
  size = "lg",
  ...props
}: FormFieldsProps) => (
  <>
    <FormItem
      size={size}
      isControlled
      name="authentication_pin"
      render={({ field }) => (
        <PinInput
          onChange={field.onChange}
          value={field.value}
          justify="center"
          length={5}
          size={size}
        />
      )}
    />
    <Button
      spinnerPlacement="end"
      loadingText="Confirm"
      isLoading={isLoading}
      colorScheme="primary"
      alignSelf="center"
      variant="primary"
      type="submit"
      size={size}
      px={12}
    >
      Confirm
    </Button>
  </>
)

export const AuthenticateAccountForm = createForm(AuthenticateAccountFields)
