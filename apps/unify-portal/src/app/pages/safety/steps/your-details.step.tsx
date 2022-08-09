import { DependentField, FormItem, RadioButton, RadioButtonGroup } from "@ui"
import { SimpleGrid, VStack, Input } from "@chakra-ui/react"
import { z } from "zod"

const defaultValues = {
  firstname: "",
  lastname: "",
  company_name: "",
}

const schema = z.object({
  firstname: z.string().min(1, "This field is required"),
  lastname: z.string().min(1, "This field is required"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("Please enter a valid address"),
})

const EmployeeFields = () => (
  <SimpleGrid columns={2} spacing={6} w="100%">
    <FormItem
      size="lg"
      name="employment.department"
      label="Department"
      render={(props) => <Input {...props} />}
    />
    <FormItem
      size="lg"
      name="employment.role"
      label="Role"
      render={(props) => <Input {...props} />}
    />
  </SimpleGrid>
)

const ContractorFields = () => (
  <SimpleGrid columns={2} spacing={6} w="100%">
    <FormItem
      size="lg"
      isRequired
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
)

const YourDetailsStep = () => (
  <VStack spacing={8} width="100%">
    <SimpleGrid columns={2} spacing={8} w="100%">
      <FormItem
        size="lg"
        isRequired
        name="firstname"
        label="First Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size="lg"
        isRequired
        name="lastname"
        label="Last Name"
        render={(props) => <Input {...props} />}
      />
      <FormItem
        size="lg"
        isRequired
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
      name="employment.type"
      label="Are you a contractor working for CityFibre, or an Employee?"
      isControlled
      render={({ field }) => (
        <RadioButtonGroup {...field}>
          <RadioButton value="Contractor">Contractor</RadioButton>
          <RadioButton value="Employee">Employee</RadioButton>
        </RadioButtonGroup>
      )}
    />
    <DependentField
      fieldName="employment.type"
      match={{
        Contractor: ContractorFields,
        Employee: EmployeeFields,
      }}
    />
  </VStack>
)

export default {
  label: "Your Details",
  Step: YourDetailsStep,
  defaultValues,
  schema,
}
