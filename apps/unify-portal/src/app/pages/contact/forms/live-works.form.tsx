import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Input, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { createForm, FormFieldsProps, FormItem } from "@ui/lib"
import { UseFormRegisterReturn } from "react-hook-form"

export type LiveWorksFieldsProps = BoxProps & FormFieldsProps

export const defaultValues = {}

const fields = [
  {
    isRequired: true,
    name: "firstname",
    label: "First Name",
  },
  {
    isRequired: true,
    name: "lasstname",
    label: "Last Name",
  },
  {
    isRequired: true,
    name: "company",
    label: "Company",
  },
  {
    isRequired: true,
    name: "phone_number",
    label: "Phone Number",
  },
  {
    isRequired: true,
    name: "job_number",
    label: "Job Number",
  },
  {
    isRequired: true,
    name: "city",
    label: "City",
  },
  {
    isRequired: true,
    name: "street",
    label: "Street",
  },
  {
    isRequired: true,
    name: "joint_id",
    label: "Joint ID",
  },
] as const

const LiveWorksFields = ({
  size = "md",
  isLoading,
  ...props
}: LiveWorksFieldsProps) => {
  const renderInput = (props: UseFormRegisterReturn<any>) => (
    <Input {...props} />
  )
  return (
    <>
      <SimpleGrid columns={2} spacing={6} w="100%" mb={8}>
        {fields.map((field) => (
          <FormItem
            {...field}
            size={size}
            key={field.name}
            render={renderInput}
          />
        ))}
      </SimpleGrid>
      <Button
        spinnerPlacement="end"
        loadingText="Submitting..."
        rightIcon={<ArrowForwardIcon />}
        isLoading={isLoading}
        colorScheme="primary"
        alignSelf="center"
        variant="primary"
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
}

export const LiveWorksForm = createForm(LiveWorksFields)
