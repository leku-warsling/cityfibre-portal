import { Button, ButtonGroup } from "@chakra-ui/button"
import { BoxProps, Text, Spacer } from "@chakra-ui/layout"
import { Checkbox } from "@chakra-ui/checkbox"
import { Input } from "@chakra-ui/input"
import { createForm, FormFieldsProps, FormItem } from "@ui/lib"

export type UserRoleFieldsProps = BoxProps &
  FormFieldsProps & {
    mode?: "edit" | "create"
  }

export const defaultValues = {
  name: "",
  email: "",
  roles: [],
  contact: {
    email: "",
    phone: "",
  },
}

const UserRoleFields = ({
  mode = "create",
  size = "md",
  isLoading,
  ...props
}: UserRoleFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="name"
      label="Role Name"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter role name"
          size={size}
          maxWidth="500px"
        />
      )}
    />
    <Text fontWeight={600}>Permissions</Text>
    <FormItem
      size={size}
      name="permissions.1"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.2"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.3"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.4"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.5"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.6"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <FormItem
      size={size}
      name="permissions.7"
      render={(props) => (
        <Checkbox {...props} size={size}>
          Can view Roles
        </Checkbox>
      )}
    />
    <ButtonGroup
      borderTop="1px solid"
      borderColor="gray.400"
      alignItems="center"
      width="100%"
      size={size}
      pt={6}
      mt={2}
    >
      <Button colorScheme="gray" variant="ghost">
        Cancel
      </Button>
      <Spacer />
      <Button
        spinnerPlacement="end"
        loadingText="Saving Changes"
        isLoading={isLoading}
        colorScheme="primary"
        variant="primary"
        type="submit"
      >
        {mode === "edit" ? "Update" : "Create"}
      </Button>
    </ButtonGroup>
  </>
)

export const UserRoleForm = createForm(UserRoleFields)
