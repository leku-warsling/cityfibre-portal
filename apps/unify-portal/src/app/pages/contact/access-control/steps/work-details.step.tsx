import { FormItem } from "@ui"
import { VStack, Textarea } from "@chakra-ui/react"

const defaultValues = {
  visit_reason: "",
  required_work: "",
}

const WorkDetailsStep = () => (
  <VStack spacing={6} width="100%">
    <FormItem
      render={(props) => <Textarea {...props} />}
      name="visit_reason"
      label="Reason for Visit"
      isRequired
      size="lg"
    />
    <FormItem
      render={(props) => <Textarea {...props} />}
      name="required_work"
      label="Work Being Done"
      isRequired
      size="lg"
    />
  </VStack>
)

export default {
  label: "Work Details",
  Step: WorkDetailsStep,
  defaultValues,
}
