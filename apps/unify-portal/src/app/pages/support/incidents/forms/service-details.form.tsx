import { FormItem, SearchInput } from "@ui"
import {
  IconButton,
  SimpleGrid,
  ListItem,
  Divider,
  VStack,
  HStack,
  Text,
  Input,
  List,
  Select,
} from "@chakra-ui/react"

export type ServiceDetailsFormProps = {
  size: "sm" | "md" | "lg"
}

const defaultProps = {
  name: "",
  email: "",
}

const defaultValues = {
  user: defaultProps,
  team_members: [],
}

const ServiceDetailsForm = () => {
  return (
    <VStack spacing={8} align="flex-start">
      <VStack align="flex-start">
        <Text fontSize="lg" fontWeight={600}>
          Service Lookup
        </Text>
        <Text maxW="500px">
          You can find a customer either by looking up their service reference
          number if you know it, or by looking up their address below.
        </Text>
      </VStack>
      <HStack align="flex-start" spacing={6} w="100%" maxW="960px">
        <FormItem
          label="Find by service reference number"
          name="service_reference"
          render={(props) => (
            <Input {...props} placeholder="eg S12345, ADSL123456" />
          )}
        />
        <VStack height="100px" flexGrow={1} py={2}>
          <Divider orientation="vertical" borderColor="gray.300" />
          <Text>or</Text>
          <Divider orientation="vertical" borderColor="gray.300" />
        </VStack>
        <FormItem
          label="Find by postcode"
          name="service_reference"
          isControlled
          render={(props) => (
            <SearchInput
              onSearch={() => Promise.resolve([])}
              placeholder="Enter postcode"
              label="Find"
              onSelect={(value) => {
                // setValue(baseName, getAddress(value))
                // setManualInput(true)
              }}
            />
          )}
        />
      </HStack>
      <Divider borderColor="gray.300" />
      <Text fontSize="lg" fontWeight={600}>
        Incident Details
      </Text>
      <FormItem
        label="What type of service has been affected?"
        name="service_type"
        render={(props) => <Select {...props} maxW="500px"></Select>}
      />
      <FormItem
        label="Severity"
        name="severity"
        render={(props) => <Select {...props} maxW="500px"></Select>}
      />
      <Divider borderColor="gray.300" />
      <Text fontSize="lg" fontWeight={600}>
        Contact Information
      </Text>
      <SimpleGrid columns={2} spacing={8} w="100%" maxW="960px">
        <FormItem
          label="Name"
          name="contact.name"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="Email Address"
          name="contact.email"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="Phone Number"
          name="contact.phone"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={8} w="100%" maxW="960px">
        <FormItem
          label="Building Name / Number"
          name="contact.name"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="Street"
          name="contact.email"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="City"
          name="contact.phone"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="County"
          name="contact.email"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
        <FormItem
          label="Postcode"
          name="contact.phone"
          render={(props) => <Input {...props} placeholder="Enter postcode" />}
        />
      </SimpleGrid>
    </VStack>
  )
}

export default {
  label: "Service Details",
  Page: ServiceDetailsForm,
  defaultValues,
}
