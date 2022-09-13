import WirelessRouterImg from "../../../../../assets/images/wireless-router.png"
import { FormItem, RadioButton, RadioButtonGroup } from "@ui"
import { FiPower } from "react-icons/fi"
import {
  VStack,
  Text,
  Input,
  Flex,
  Button,
  Icon,
  Image,
  Box,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react"

export type IncidentDetailsFormProps = {
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

const IncidentDetailsStep = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    lg: "vertical",
  } as const)
  return (
    <VStack spacing={8} align="flex-start" mb={8}>
      <Text fontSize="lg" fontWeight={600}>
        Use Trouble Shooter
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justify="space-between"
        border="1px solid"
        borderColor="gray.300"
        w="100%"
        p={4}
      >
        <VStack flexGrow={1} spacing={4} py={10}>
          <Flex
            borderColor="brand.500"
            border="2px solid"
            color="brand.500"
            justify="center"
            rounded="full"
            align="center"
            height="40px"
            width="40px"
          >
            <Text fontWeight={600}>1</Text>
          </Flex>
          <Text fontWeight={600}>Check status lights</Text>
          <Text fontSize="sm" maxW="360px" textAlign="center">
            Check status lights on router to see if everything is working
            correctly.
          </Text>
          <Box py={4}>
            <Image src={WirelessRouterImg} h="75px" />
          </Box>
          <Button variant="outline">Mark as Done</Button>
        </VStack>
        <Divider
          orientation={orientation}
          h={{ lg: "394px" }}
          borderColor="gray.300"
        />
        <VStack flexGrow={1} spacing={4} py={10}>
          <Flex
            borderColor="brand.500"
            border="2px solid"
            color="brand.500"
            justify="center"
            rounded="full"
            align="center"
            height="40px"
            width="40px"
          >
            <Text fontWeight={600}>2</Text>
          </Flex>
          <Text fontWeight={600}>Restart ONT</Text>
          <Text fontSize="sm" maxW="420px" textAlign="center">
            Press power button until lights go off and wait for 5 mins. Press
            power button and wait for lights to come back on.
          </Text>
          <Box pt={6} pb={2}>
            <Icon as={FiPower} fontSize="65px" />
          </Box>
          <Button variant="outline">Mark as Done</Button>
        </VStack>
      </Flex>
      <Text fontSize="lg" fontWeight={600}>
        Issue Details
      </Text>
      <FormItem
        label="Type of issue"
        name="issue.type"
        render={({ onChange, ...props }) => (
          <RadioButtonGroup
            {...props}
            columns={{ base: 1, md: 2 }}
            maxW="900px"
          >
            <RadioButton value="Total loss of service">
              Total loss of service
            </RadioButton>
            <RadioButton value="Intermittent loss of service">
              Intermittent loss of service
            </RadioButton>
          </RadioButtonGroup>
        )}
      />
      <FormItem
        label="Please tell us about the issue in a few key words"
        name="issue.description"
        render={(props) => <Input {...props} maxW="900px" />}
      />
      <FormItem
        label="Please tell us about the issue in a few key words"
        name="issue.description"
        render={(props) => (
          <Input {...props} type="datetime-local" maxW="300px" />
        )}
      />
      <FormItem
        label="Are the patch leads connected to the correct ports on the ODF?"
        name="issue.type"
        render={({ onChange, ...props }) => (
          <RadioButtonGroup {...props} maxW="500px">
            <RadioButton value="yes">Yes</RadioButton>
            <RadioButton value="no">No</RadioButton>
          </RadioButtonGroup>
        )}
      />
      <FormItem
        label="Is the Port Operational?"
        name="issue.type"
        render={({ onChange, ...props }) => (
          <RadioButtonGroup {...props} maxW="500px">
            <RadioButton value="yes">Yes</RadioButton>
            <RadioButton value="no">No</RadioButton>
          </RadioButtonGroup>
        )}
      />
      <FormItem
        label="Have the OTDR Traces been completed?"
        name="issue.type"
        render={({ onChange, ...props }) => (
          <RadioButtonGroup {...props} maxW="500px">
            <RadioButton value="yes">Yes</RadioButton>
            <RadioButton value="no">No</RadioButton>
          </RadioButtonGroup>
        )}
      />
    </VStack>
  )
}

export default {
  label: "Incident Details",
  Step: IncidentDetailsStep,
  isFinalStep: true,
  defaultValues,
}
