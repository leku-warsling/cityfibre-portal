import { Input, SimpleGrid, VStack } from "@chakra-ui/react"
import { FormItem } from "@ui"
import { AddressInput } from "../../../../components/inputs/address-input"

const defaultValues = {
  company: {
    registered_number: "",
    website: "",
    email: "",
    phone: "",
    name: "",
  },
}

const CompanyDetailsForm = () => (
  <VStack spacing={8} align="flex-start" w="100%">
    <SimpleGrid columns={2} spacing={8} w="100%">
      <FormItem
        render={(props) => <Input {...props} size="lg" />}
        label="Company Name"
        name="company.name"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="email" size="lg" />}
        label="Company Email"
        name="company.email"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="tel" size="lg" />}
        label="Company Phone"
        name="company.phone"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="url" size="lg" />}
        label="Company Website"
        name="company.website"
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} size="lg" />}
        label="Company Registered Number"
        name="company.registered_number"
        isRequired
        size="lg"
      />
    </SimpleGrid>
    <AddressInput baseName="company" label="Company Address" />
  </VStack>
)

export default {
  Page: CompanyDetailsForm,
  label: "Your Company Details",
  defaultValues,
}
