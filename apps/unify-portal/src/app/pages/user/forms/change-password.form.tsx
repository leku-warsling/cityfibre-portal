import {
  Button,
  Input,
  BoxProps,
  ButtonGroup,
  Text,
  Checkbox,
} from "@chakra-ui/react"
import { createForm, FormFieldsProps, FormItem, PasswordInput } from "@ui"

export type ChangePasswordFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {}

const ChangePasswordFields = ({
  size = "md",
  isLoading,
  ...props
}: ChangePasswordFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="current_password"
      label="Old Password"
      render={(props) => <PasswordInput {...props} maxW="500px" />}
    />
    <FormItem
      size={size}
      name="new_password"
      label="New Password"
      render={(props) => <PasswordInput {...props} maxW="500px" />}
    />
    <FormItem
      size={size}
      name="confirm_password"
      label="Confirm Password"
      render={(props) => <PasswordInput {...props} maxW="500px" />}
    />
    <ButtonGroup
      borderTop="1px solid"
      borderColor="gray.300"
      alignItems="center"
      width="100%"
      size={size}
      pt={6}
      mt={2}
    >
      <Button colorScheme="gray" variant="ghost">
        Reset
      </Button>
      <Button
        spinnerPlacement="end"
        loadingText="Saving Changes"
        isLoading={isLoading}
        colorScheme="brand"
        variant="solid"
        type="submit"
      >
        Save Changes
      </Button>
    </ButtonGroup>
  </>
)

export const ChangePasswordForm = createForm(ChangePasswordFields)
