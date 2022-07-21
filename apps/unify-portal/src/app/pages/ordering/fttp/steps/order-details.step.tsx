import { Fieldset, FormItem } from "@ui"
import {
  Divider,
  VStack,
  Input,
  GridItem,
  Textarea,
  Select,
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
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Authentication Agent"
          name="authentication_agent"
          render={(props) => <Select {...props}></Select>}
        />
        <FormItem
          label="Remote Agent ID"
          name="remote_agent_id"
          render={(props) => <Input {...props} />}
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
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Email"
          name="customer.email"
          render={(props) => <Input {...props} type="email" />}
        />
        <FormItem
          label="Phone Number"
          name="customer.number"
          render={(props) => <Input {...props} type="tel" />}
        />
        <GridItem colSpan={2}>
          <FormItem
            render={(props) => <Textarea {...props} />}
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
