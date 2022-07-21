import {
  Autocomplete,
  createForm,
  FieldArray,
  FormFieldsProps,
  FormItem,
} from "@ui"
import { USER_ROLES } from "../data"
import {
  ButtonGroup,
  FormControl,
  FormLabel,
  BoxProps,
  Button,
  Input,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react"

export type EditUserFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {
  name: "",
  email: "",
  roles: [],
  contact: {
    email: "",
    phone: "",
  },
}

const EditUserFields = ({
  size = "md",
  isLoading,
  ...props
}: EditUserFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="name"
      label="Name"
      render={(props) => (
        <Input {...props} placeholder="Enter name" size={size} />
      )}
    />
    <FormItem
      size={size}
      name="username"
      label="Username"
      render={(props) => <Input {...props} size={size} />}
    />
    <FieldArray
      name="roles"
      render={({ fields, append, remove }) => {
        const tokens = (
          <Wrap spacing={2} mb={4}>
            <WrapItem>
              <Tag size="lg" colorScheme="brand">
                <TagLabel>Admin</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    alert("Demo functionality not implemented yet")
                  }
                />
              </Tag>
            </WrapItem>
            {fields.map((item: any, idx) => (
              <WrapItem key={item.id}>
                <Tag size="lg" colorScheme="brand">
                  <TagLabel>{item?.value}</TagLabel>
                  <TagCloseButton onClick={() => remove(idx)} />
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        )

        return (
          <FormControl>
            <FormLabel fontWeight={600}>User Role(s)</FormLabel>
            {tokens}
            <Autocomplete
              options={USER_ROLES.map((value) => ({ value, label: value }))}
              onChange={(value) => append(value)}
            />
          </FormControl>
        )
      }}
    />
    <FormItem
      size={size}
      name="contact.email"
      label="Contact Email"
      helpText="Please note this email address will be used for notifications and will not change your username for log-in purposes."
      render={(props) => <Input {...props} size={size} type="email" />}
    />
    <FormItem
      size={size}
      name="contact.phone"
      label="Contact Number"
      render={(props) => <Input {...props} size={size} type="tel" />}
    />
    <ButtonGroup size={size} justifyContent="flex-end" width="100%" mt={2}>
      <Button
        spinnerPlacement="end"
        loadingText="Delete User"
        isLoading={isLoading}
        colorScheme="red"
        variant="ghost"
        type="submit"
      >
        Delete User
      </Button>
      <Button
        spinnerPlacement="end"
        loadingText="Reset Password"
        isLoading={isLoading}
        colorScheme="brand"
        variant="ghost"
        type="submit"
      >
        Reset Password
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

export const EditUserForm = createForm(EditUserFields)
