import { FormItem } from "@ui"
import { SimpleGrid, VStack, Input, Textarea, Select } from "@chakra-ui/react"

const defaultValues = {
  visit_reason: "",
  required_work: "",
}

const IncidentDetailsStep = () => (
  <VStack spacing={8} width="100%">
    <SimpleGrid columns={2} spacing={8} w="100%">
      <FormItem
        size="lg"
        name="firstname"
        label="Address / Location"
        render={(props) => <Input {...props} placeholder="Street name" />}
      />
      <FormItem
        size="lg"
        name="city"
        label="City"
        render={(props) => <Select></Select>}
      />
      <FormItem
        size="lg"
        name="postcode"
        label="Postcode"
        render={(props) => <Input {...props} placeholder="Postcode" />}
      />
    </SimpleGrid>
    <SimpleGrid columns={2} spacing={8} w="100%">
      <FormItem
        size="lg"
        name="transpired_at"
        label="Date/Time of Incident"
        render={(props) => <Input {...props} type="datetime" />}
      />
      <FormItem
        size="lg"
        name="project"
        label="Project"
        render={(props) => <Select></Select>}
      />
      <FormItem
        size="lg"
        name="type"
        label="What type of incident occurred?"
        render={(props) => <Select></Select>}
      />
    </SimpleGrid>
    <FormItem
      size="lg"
      name="description"
      label="Please describe what happened?"
      render={(props) => (
        <Textarea
          {...props}
          placeholder="The who, what, where, when and how..."
        />
      )}
    />
  </VStack>
)

export default {
  label: "Incident Details",
  Step: IncidentDetailsStep,
  isFinalStep: true,
  defaultValues,
}
