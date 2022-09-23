import { FormItem } from "@ui/lib"
import {
  SimpleGrid,
  VStack,
  Input,
  Box,
  Flex,
  Text,
  Select,
} from "@chakra-ui/react"

const defaultValues = {}

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
      <Box>
        <Text fontWeight={600} fontSize="lg" mb={2}>
          Duration of Stay
        </Text>
        <Flex gap={4}>
          <FormItem
            render={(props) => <Input {...props} type="time" />}
            name="duration.start"
            size="lg"
          />
          <FormItem
            render={(props) => <Input {...props} type="time" />}
            name="duration.end"
            size="lg"
          />
        </Flex>
      </Box>
      <FormItem
        size="lg"
        isRequired
        name="site"
        label="Site"
        render={(props) => (
          <Select {...props} placeholder="Select a Site">
            <option value="MK990">MK990</option>
            <option value="TF-09887">TF-09887</option>
            <option value="UAT-99089">UAT-99089</option>
          </Select>
        )}
      />
      <FormItem
        render={(props) => <Input {...props} />}
        name="rack_location"
        label="Rack Location"
        isRequired
        size="lg"
      />
      <FormItem
        size="lg"
        isRequired
        name="zone_access"
        label="Zone Access"
        render={(props) => (
          <Select>
            <option value="unrestricted">
              Access shall be full unrestricted access to all areas
            </option>
            <option value="data">
              Access shall be to data room and warehouses or in case of a
              compound, data room only
            </option>
            <option value="warehouse">
              Access shall be access to office and warehouse areas
            </option>
            <option value="office">
              Access shall be access to office areas only
            </option>
          </Select>
        )}
      />
      <FormItem
        size="lg"
        isRequired
        name="induction_status"
        label="Induction Status"
        render={(props) => (
          <Select>
            <option value="inducted">Inducted</option>
            <option value="not_inducted">Not Inducted</option>
          </Select>
        )}
      />
    </SimpleGrid>
  </VStack>
)

export default {
  label: "Location Details",
  Step: LocationDetailsStep,
  defaultValues,
}
