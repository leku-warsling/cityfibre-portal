import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Input, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { createForm, FormFieldsProps, FormItem } from "@ui"

export type LiveWorksFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {}

const LiveWorksFields = ({
  size = "md",
  isLoading,
  ...props
}: LiveWorksFieldsProps) => (
  <>
    <SimpleGrid columns={2} spacing={6} w="100%" mb={8}>
      <FormItem
        size={size}
        name="firstname"
        label="First Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="lastname"
        label="Last Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="company"
        label="Company"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="phone_number"
        label="Phone Number"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="job_number"
        label="Job Number"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="city"
        label="City"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="street"
        label="Street"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size={size}
        name="joint_id"
        label="Joint ID"
        render={(props) => <Input {...props} />}
      />
    </SimpleGrid>
    <Button
      spinnerPlacement="end"
      loadingText="Submitting..."
      rightIcon={<ArrowForwardIcon />}
      isLoading={isLoading}
      colorScheme="brand"
      alignSelf="center"
      variant="solid"
      type="submit"
      size={size}
      width="100%"
      maxWidth="350px"
      px={14}
    >
      Submit
    </Button>
  </>
)

export const LiveWorksForm = createForm(LiveWorksFields)
