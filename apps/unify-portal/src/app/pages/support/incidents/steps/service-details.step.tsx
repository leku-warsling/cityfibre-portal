import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from "@chakra-ui/alert"
import { Input } from "@chakra-ui/input"
import { Select } from "@chakra-ui/select"
import { Tooltip } from "@chakra-ui/tooltip"
import { Spinner } from "@chakra-ui/spinner"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { FormItem, util } from "@ui/lib"
import { ServiceRefLookup } from "@unify/components"
import isNil from "ramda/es/isNil"
import propOr from "ramda/es/propOr"
import startsWith from "ramda/es/startsWith"
import test from "ramda/es/test"
import { FC, ReactNode, useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

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

const SERVICE_TYPES = [
  "Broadband",
  "Colocation",
  "Dark Fibre",
  "Leased Line On Net",
  "Leased Line Off Net",
  "EFM/GEA/EoFTTC",
  "Telephony",
  "FTTH Residential",
  "Firewall",
  "FTTH Business",
  "LDN Dark Fibre",
  "Duct / Sub duct",
  "Other",
] as const

type AlertBoxProps = AlertProps & {
  description?: ReactNode
  title?: ReactNode
  icon?: ReactNode
}

const AlertBox: FC<AlertBoxProps> = ({
  title,
  description,
  children,
  icon,
  ...props
}) => {
  return (
    <Alert {...props}>
      {icon ?? <AlertIcon boxSize="40px" />}
      <Box>
        {title && (
          <AlertTitle mt={4} mb={2} fontSize="lg">
            {title}
          </AlertTitle>
        )}
        {children}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Box>
    </Alert>
  )
}

AlertBox.defaultProps = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "200px",
  variant: "subtle",
  status: "info",
  maxW: "320px",
  rounded: 5,
  p: 10,
}

type LineStatus = "active" | "down" | "unknown" | "power" | "unsupported"

const SERVICE_REFS = {
  S12345: "active",
  S75659: "down",
  S143015: "power",
} as const

const fetchLineStatus = (ref: string): Promise<LineStatus | null> => {
  const status = propOr(
    "unknown",
    ref.toUpperCase(),
    SERVICE_REFS
  ) as LineStatus

  return util.async.later(1500, status)
}

const isValidRef = (ref: string | null) =>
  !isNil(ref) &&
  ["S", "EN", "ADSL"].some((x) => startsWith(x, ref.toUpperCase())) &&
  ref.length >= 6

const isSRef = test(/^[sS]\d{5,6}$/)

const LineCheckerAlert = () => {
  const { watch } = useFormContext()
  const [isLoading, setLoading] = useState(false)
  const [status, setStatus] = useState<LineStatus | null>(null)
  const serviceRef = watch("service_reference") as string

  useEffect(() => {
    if (!isValidRef(serviceRef) || !isSRef(serviceRef)) {
      return setStatus("unsupported")
    }
    setLoading(true)
    fetchLineStatus(serviceRef)
      .then((status) => {
        setStatus(status)
      })
      .finally(() => setLoading(false))
  }, [serviceRef])

  if (isLoading) {
    return (
      <AlertBox
        title="Checking service status"
        description={
          <div>
            Please wait as this may <br />
            take a minute
          </div>
        }
        icon={
          <Spinner thickness="4px" color="brand.600" boxSize="40px" mb={2} />
        }
      />
    )
  }

  switch (status) {
    case "active":
      return (
        <AlertBox
          status="success"
          title="Status: Line up"
          description="Our last status check was that the line is up, please check
              service again before logging an incident"
        >
          <Heading mb={2} fontSize="sm">
            Last Updated: {util.date.toDatetimeString(new Date())}
          </Heading>
        </AlertBox>
      )
    case "unknown":
      return (
        <AlertBox
          status="warning"
          title="Status: Unknown"
          description="Service reference not found or reference type status check not supported"
        />
      )
    case "down":
      return (
        <AlertBox
          status="error"
          title="Status: Line down"
          description="we can see the line is down so please continue to raise an incident and provide as much of the requested information as possible"
        >
          <Heading mb={2} fontSize="sm">
            Last Updated: {util.date.toDatetimeString(new Date())}
          </Heading>
        </AlertBox>
      )
    case "power":
      return (
        <AlertBox
          status="error"
          title="Status: Powered Down"
          description="Please check the power to your device before logging an incident"
        >
          <Heading mb={2} fontSize="sm">
            Last Updated: {util.date.toDatetimeString(new Date())}
          </Heading>
        </AlertBox>
      )
    default:
      return null
  }
}

const ServiceLineChecker = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  } as const)

  return (
    <Flex w="100%" gap={12}>
      <Flex flexDir="column" w="100%" maxW="960px" gap={6}>
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
          spacing={{ base: 4, lg: 6 }}
          align="flex-start"
          w="100%"
        >
          <FormItem
            label="Find by service reference number"
            name="service_reference"
            render={(props) => (
              <Tooltip
                hasArrow
                label="We have a last known status check available for supported products, please enter a valid CityFibre service reference (S ref) to activate this"
                p={4}
              >
                <Input {...props} placeholder="eg S12345, ADSL123456" />
              </Tooltip>
            )}
          />
          <Stack
            direction={{ base: "row", lg: "column" }}
            height={{ base: "auto", lg: "100px" }}
            width={{ base: "100%", lg: "auto" }}
            py={{ base: 0, lg: 2 }}
            alignItems="center"
            justify="center"
            flexGrow={1}
          >
            <Divider orientation={orientation} borderColor="gray.300" />
            <Text maxWidth="50px">or</Text>
            <Divider orientation={orientation} borderColor="gray.300" />
          </Stack>
          <ServiceRefLookup
            label="Find by postcode"
            onSelect={(setValue, item) => {
              "value" in item &&
                setValue("service_reference", item["value"] as string)
            }}
          />
        </Stack>
      </Flex>
      <LineCheckerAlert />
    </Flex>
  )
}

const ServiceDetailsStep = () => {
  return (
    <VStack spacing={{ base: 4, lg: 8 }} align="flex-start" w="100%">
      <ServiceLineChecker />
      <Divider borderColor="gray.300" />
      <Text fontSize="lg" fontWeight={600}>
        Incident Details
      </Text>
      <FormItem
        label="What type of service has been affected?"
        name="service_type"
        render={(props) => (
          <Select {...props} placeholder="Select service" maxW="500px">
            {SERVICE_TYPES.map((label, i) => (
              <option key={i} value={i}>
                {label}
              </option>
            ))}
          </Select>
        )}
      />
      <FormItem
        label="Severity"
        name="severity"
        render={(props) => (
          <Select {...props} placeholder="Select severity" maxW="500px">
            <option value={0}>Total loss of service</option>
            <option value={1}>Degraded service</option>
          </Select>
        )}
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
          render={(props) => <Input {...props} placeholder="Enter name" />}
        />
        <FormItem
          label="Email Address"
          name="contact.email"
          render={(props) => (
            <Input {...props} placeholder="Enter email address" />
          )}
        />
        <FormItem
          label="Phone Number"
          name="contact.phone"
          render={(props) => (
            <Input {...props} placeholder="Enter phone number" />
          )}
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
          render={(props) => (
            <Input {...props} placeholder="Enter building name or number" />
          )}
        />
        <FormItem
          label="Street"
          name="contact.street"
          render={(props) => <Input {...props} placeholder="Enter street" />}
        />
        <FormItem
          label="City"
          name="contact.phone"
          render={(props) => (
            <Input {...props} placeholder="Enter phone number" />
          )}
        />
        <FormItem
          label="County"
          name="contact.county"
          render={(props) => <Input {...props} placeholder="Enter county" />}
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
