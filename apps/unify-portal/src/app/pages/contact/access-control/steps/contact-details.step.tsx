import { FormItem } from "@ui/lib"
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

const ContactDetailsStep = () => (
  <VStack spacing={6} width="100%">
    <SimpleGrid columns={2} spacing={6} w="100%">
      <FormItem
        render={(props) => <Input {...props} />}
        name="engineer.firstname"
        label="Engineer First Name"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="engineer.lastname"
        label="Engineer Last Name"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="company_name"
        label="Company Name"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="tel" />}
        name="engineer.contact_number"
        label="Engineer Contact Number"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="requestor.name"
        label="Requestor Name"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="tel" />}
        name="requestor.contact_number"
        label="Requestor Contact Number"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="vehicle.type"
        label="Vehicle Type"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="vehicle.registration"
        label="Vehicle Registration"
        isRequired
        size="lg"
      />
    </SimpleGrid>
  </VStack>
)

export default {
  label: "Contact Details",
  Step: ContactDetailsStep,
  defaultValues,
}
