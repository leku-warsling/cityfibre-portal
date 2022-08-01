import { FormItem, SearchInput } from "@ui"
import {
  SimpleGrid,
  Divider,
  VStack,
  Text,
  Input,
  Select,
  Stack,
  useBreakpointValue,
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

const ServiceDetailsStep = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  } as const)
  return (
    <VStack spacing={{ base: 4, lg: 8 }} align="flex-start">
      <VStack align="flex-start">
        <Text fontSize="lg" fontWeight={600}>
          Service Lookup
        </Text>
        <Text maxW="500px" fontSize={{ base: "sm", lg: "md" }}>
          You can find a customer either by looking up their service reference
          number if you know it, or by looking up their address below.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        align="flex-start"
        spacing={{ base: 4, lg: 6 }}
        w="100%"
        maxW="960px"
      >
        <FormItem
          label="Find by service reference number"
          name="service_reference"
          render={(props) => (
            <Input {...props} placeholder="eg S12345, ADSL123456" />
          )}
        />
        <Stack
          direction={{ base: "row", lg: "column" }}
          height={{ base: "auto", lg: "100px" }}
          width={{ base: "100%", lg: "auto" }}
          flexGrow={1}
          alignItems="center"
          justify="center"
          py={{ base: 0, lg: 2 }}
        >
          <Divider orientation={orientation} borderColor="gray.300" />
          <Text maxWidth="50px">or</Text>
          <Divider orientation={orientation} borderColor="gray.300" />
        </Stack>
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
      </Stack>
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
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 4, lg: 8 }}
        w="100%"
        maxW="960px"
      >
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
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 4, lg: 8 }}
        w="100%"
        maxW="960px"
      >
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
  Step: ServiceDetailsStep,
  defaultValues,
}
