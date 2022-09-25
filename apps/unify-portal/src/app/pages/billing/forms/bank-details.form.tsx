import { BoxProps, Divider } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { createForm, FormFieldsProps, FormItem } from "@ui/lib/form"

export type BankDetailsFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {
  name: "",
  account_name: "",
  account_number: "",
  sort_code: "",
}

const BankDetailsFields = ({
  size = "md",
  isLoading,
  ...props
}: BankDetailsFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="name"
      label="Bank Name"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter bank name"
          size={size}
          maxW="500px"
        />
      )}
    />
    <FormItem
      size={size}
      name="account_number"
      label="Account number"
      render={(props) => <Input {...props} size={size} maxW="500px" />}
    />
    <FormItem
      size={size}
      name="sort_code"
      label="Sort Code"
      render={(props) => <Input {...props} size={size} maxW="500px" />}
    />
    <FormItem
      size={size}
      name="account_name"
      label="Bank Account Name"
      render={(props) => <Input {...props} size={size} maxW="500px" />}
    />
    <Divider borderColor="gray.300" mt={8} mb={2} />
    <Button
      spinnerPlacement="end"
      loadingText="Saving Changes"
      isLoading={isLoading}
      colorScheme="primary"
      variant="primary"
      type="submit"
    >
      Save Changes
    </Button>
  </>
)

export const BankDetailsForm = createForm(BankDetailsFields)
