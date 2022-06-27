import { Input, SimpleGrid } from "@chakra-ui/react"
import { FormItem } from "@ui"

const defaultValues = {
  company: {
    name: "",
    email: "",
    phone: "",
    website: "",
    registered_number: "",
  },
}

const CompanyDetailsForm = () => {
  return (
    <SimpleGrid columns={2} spacing={6}>
      <FormItem label="Company Name" isRequired>
        <Input name="company.name" />
      </FormItem>
      <FormItem label="Company Email" isRequired>
        <Input name="company.email" type="email" />
      </FormItem>
      <FormItem label="Company Phone" isRequired>
        <Input name="company.phone" type="tel" />
      </FormItem>
      <FormItem label="Company Website">
        <Input name="company.website" type="url" />
      </FormItem>
      <FormItem label="Company Registered Number" isRequired>
        <Input name="company.registered_number" />
      </FormItem>
    </SimpleGrid>
  )
}

export default {
  Page: CompanyDetailsForm,
  label: "Your Company Details",
  defaultValues,
}
