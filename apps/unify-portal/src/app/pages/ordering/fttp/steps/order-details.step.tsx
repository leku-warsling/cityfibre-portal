import { Fieldset, FormItem } from "@ui"
import {
  Divider,
  VStack,
  Input,
  GridItem,
  Textarea,
  Select,
  Tooltip,
} from "@chakra-ui/react"

const defaultValues = {}

const OrderDetailsStep = () => {
  return (
    <VStack
      divider={<Divider borderColor="gray.300" />}
      align="flex-start"
      spacing={10}
    >
      <Fieldset
        legend="Order Information"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Order Reference"
          name="order_reference"
          render={(props) => (
            <Tooltip
              label="Allows to add custom reference to sync with your external systems"
              hasArrow
              p={4}
            >
              <Input {...props} placeholder="Enter order reference" />
            </Tooltip>
          )}
        />
        <FormItem
          label="Authentication Agent"
          name="authentication_agent"
          render={(props) => (
            <Tooltip
              label="Authentication Agent enables you to perform multi-factor authentication on one computer to get authorized access to another computer"
              hasArrow
              p={4}
            >
              <Select {...props} placeholder="Select authentication agent">
                <option value="DHCP">DHCP Option 82</option>
                <option value="PPPoE">PPPoE Intermediate Agent</option>
              </Select>
            </Tooltip>
          )}
        />
        <FormItem
          label="Remote Agent ID"
          name="remote_agent_id"
          render={(props) => (
            <Tooltip
              label="This Remote-ID tag is useful for troubleshooting, authentication, and accounting"
              hasArrow
              p={4}
            >
              <Input {...props} placeholder="Enter remote agent ID" />
            </Tooltip>
          )}
        />
      </Fieldset>
      <Fieldset
        legend="Customer Details"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Name"
          name="customer.name"
          render={(props) => <Input placeholder="Enter name" {...props} />}
        />
        <FormItem
          label="Email"
          name="customer.email"
          render={(props) => (
            <Input {...props} placeholder="Enter email address" type="email" />
          )}
        />
        <FormItem
          label="Phone Number"
          name="customer.number"
          render={(props) => (
            <Input {...props} type="tel" placeholder="Enter phone number" />
          )}
        />
        <GridItem colSpan={2}>
          <FormItem
            render={(props) => (
              <Tooltip
                label="Please provide information on any hazard with the potential for harm or an adverse effect (for example, to people as health effects, to organizations as property or equipment losses, or to the environment)"
                hasArrow
                p={4}
              >
                <Textarea {...props} />
              </Tooltip>
            )}
            name="hazards"
            label="Hazards"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormItem
            render={(props) => <Textarea {...props} />}
            name="access_restrictions"
            label="Access Restrictions"
          />
        </GridItem>
      </Fieldset>
    </VStack>
  )
}

export default {
  label: "Order",
  Step: OrderDetailsStep,
  defaultValues,
}
