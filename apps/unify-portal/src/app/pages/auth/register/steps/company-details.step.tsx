import { SimpleGrid, VStack } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { AddressInput } from "../../../../components/inputs/address-input"
import { FormItem } from "@ui/lib/form"

const defaultValues = {
  company: {
    registered_number: "",
    website: "",
    email: "",
    phone: "",
    name: "",
  },
}

const CompanyDetailsStep = () => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  return (
    <VStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="100%">
      <SimpleGrid
        columns={{ lg: 2, base: 1 }}
        spacing={{ base: 6, lg: 8 }}
        w="100%"
      >
        <FormItem
          render={(props) => <Input {...props} size={size} />}
          label="Company Name"
          name="company.name"
          isRequired
          size={size}
        />
        <FormItem
          render={(props) => <Input {...props} type="email" size={size} />}
          label="Company Email"
          name="company.email"
          isRequired
          size={size}
        />
        <FormItem
          render={(props) => <Input {...props} type="tel" size={size} />}
          label="Company Phone"
          name="company.phone"
          isRequired
          size={size}
        />
        <FormItem
          render={(props) => <Input {...props} type="url" size={size} />}
          label="Company Website"
          name="company.website"
          size={size}
        />
        <FormItem
          render={(props) => <Input {...props} size={size} />}
          label="Company Registered Number"
          name="company.registered_number"
          isRequired
          size={size}
        />
      </SimpleGrid>
      <AddressInput
        columns={{ lg: 2, base: 1 }}
        label="Company Address"
        baseName="company"
        size={size}
      />
    </VStack>
  )
}

export default {
  Step: CompanyDetailsStep,
  label: "Your Company Details",
  defaultValues,
}
