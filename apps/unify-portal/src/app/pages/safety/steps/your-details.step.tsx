import { FormItem, RadioButton, RadioButtonGroup } from "@ui"
import { SimpleGrid, VStack, Input } from "@chakra-ui/react"

const defaultValues = {
  engineer: {
    contact_number: "",
    firstname: "",
    lastname: "",
  },
  requestor: {
    contact_number: "",
    name: "",
  },
  vehicle: {
    registration: "",
    type: "",
  },
  company_name: "",
}

const YourDetailsStep = () => (
  <VStack spacing={8} width="100%">
    <SimpleGrid columns={2} spacing={8} w="100%">
      <FormItem
        size="lg"
        name="firstname"
        label="First Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size="lg"
        name="lastname"
        label="Last Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size="lg"
        name="email"
        label="Email"
        render={(props) => <Input {...props} type="email" />}
      />
      <FormItem
        size="lg"
        name="phone_number"
        label="Contact Number"
        render={(props) => <Input {...props} />}
      />
    </SimpleGrid>
    <FormItem
      size="lg"
      name="employment_type"
      label="Are you a contractor working for CityFibre, or an Employee?"
      render={(props) => (
        <RadioButtonGroup display="flex" gap={4}>
          <RadioButton value="yes" w="300px">
            Contractor
          </RadioButton>
          <RadioButton value="no" w="300px">
            Employee
          </RadioButton>
        </RadioButtonGroup>
      )}
    />
    <SimpleGrid columns={2} spacing={6} w="100%">
      <FormItem
        size="lg"
        name="company.name"
        label="Company Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size="lg"
        name="pc_ref"
        label="PC Reference"
        render={(props) => <Input {...props} />}
      />
    </SimpleGrid>
  </VStack>
)

export default {
  label: "Your Details",
  Step: YourDetailsStep,
  defaultValues,
}
