import { FormItem, SearchInput } from "@ui"
import { VStack } from "@chakra-ui/react"

const defaultValues = {}

const AvailabilityStep = () => {
  return (
    <VStack>
      <FormItem
        label="Postcode"
        name="service_reference"
        isControlled
        render={(props) => (
          <SearchInput
            onSearch={() => Promise.resolve([])}
            placeholder="Enter postcode"
            label="Find"
            maxW="500px"
            onSelect={(value) => {
              // setValue(baseName, getAddress(value))
              // setManualInput(true)
            }}
          />
        )}
      />
    </VStack>
  )
}

export default {
  label: "Availability",
  Step: AvailabilityStep,
  defaultValues,
}
