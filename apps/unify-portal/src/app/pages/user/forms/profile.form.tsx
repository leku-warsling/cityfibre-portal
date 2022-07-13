import {
  Button,
  Input,
  BoxProps,
  ButtonGroup,
  Text,
  Checkbox,
} from "@chakra-ui/react"
import { createForm, FormFieldsProps, FormItem } from "@ui"

export type ProfileFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {}

const ProfileFields = ({
  size = "md",
  isLoading,
  ...props
}: ProfileFieldsProps) => (
  <>
    <FormItem
      size={size}
      name="firstname"
      label="First Name"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter firstname"
          size={size}
          maxWidth="500px"
        />
      )}
    />
    <FormItem
      size={size}
      name="lastname"
      label="Last Name"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter lastname"
          size={size}
          maxWidth="500px"
        />
      )}
    />
    <FormItem
      size={size}
      name="username"
      label="Username"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter lastname"
          size={size}
          maxWidth="500px"
        />
      )}
    />
    <FormItem
      size={size}
      name="contact.email"
      label="Contact Email"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter email"
          size={size}
          maxWidth="500px"
          type="email"
        />
      )}
    />
    <FormItem
      size={size}
      name="contact.phone"
      label="Contact Number"
      render={(props) => (
        <Input
          {...props}
          placeholder="Enter phone number"
          size={size}
          maxWidth="500px"
          type="tel"
        />
      )}
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

export const ProfileForm = createForm(ProfileFields)
