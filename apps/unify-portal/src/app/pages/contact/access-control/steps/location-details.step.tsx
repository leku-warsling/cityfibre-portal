import { FormItem } from "@ui"
import { SimpleGrid, VStack, Input, Textarea } from "@chakra-ui/react"

const defaultValues = {
  visit_reason: "",
  required_work: "",
}

const LocationDetailsStep = () => (
  <VStack spacing={6} width="100%">
    <SimpleGrid columns={2} spacing={6} w="100%">
      <FormItem
        render={(props) => <Input {...props} type="date" />}
        name="arrival_at"
        label="Arrival Date"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} type="time" />}
        name="duration"
        label="Duration of Stay"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="site"
        label="Site"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="rack_location"
        label="Rack Location"
        isRequired
        size="lg"
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="zone_access"
        label="Zone Access"
        isRequired
        size="lg"
      />
    </SimpleGrid>
  </VStack>
)

export default {
  label: "Location Details",
  Step: LocationDetailsStep,
  defaultValues,
}
