import { Fieldset, FormItem } from "@ui"
import {
  Divider,
  VStack,
  Input,
  RadioGroup,
  Radio,
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
        legend="Customer Information"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Business Name"
          name="business_name"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Your Reference"
          name="reference"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Address"
          name="address"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Room Reference"
          name="room_reference"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Floor Reference"
          name="floor_reference"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Rack Location"
          name="rack_location"
          render={(props) => <Input {...props} />}
        />
      </Fieldset>
      <Fieldset
        description="Please provide an appropriate contact for communication regarding obtaining a wayleave"
        legend="Wayleave Contact"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Contact Name"
          name="wayleave.contact.name"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Contact Email"
          name="wayleave.contact.email"
          render={(props) => <Input {...props} type="email" />}
        />
        <FormItem
          label="Contact Number"
          name="wayleave.contact.number"
          render={(props) => <Input {...props} type="tel" />}
        />
      </Fieldset>
      <Fieldset
        legend="Route Approval Contact at Installation Site"
        description="Please provide contact details for the person at site who has authority to approve the fibre route and authorise access for engineers.
(Please note that entering incorrect details here may result in a failed survey, which is chargeable.)"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Contact Name"
          name="site.contact.name"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Contact Email"
          name="site.contact.email"
          render={(props) => <Input {...props} type="email" />}
        />
        <FormItem
          label="Contact Number"
          name="site.contact.number"
          render={(props) => <Input {...props} type="tel" />}
        />
      </Fieldset>
      <Fieldset
        description="Please provide required information below"
        legend="Product Information"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Product"
          name="product.name"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Contract Term"
          name="product.contract_term"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="ENNI"
          name="product.enni"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="VLAN"
          name="product.vlan"
          render={(props) => <Input {...props} />}
        />
        <FormItem
          label="Ethernet Presentation"
          name="product.ethernet_presentation"
          render={(props) => <Select {...props}></Select>}
        />
      </Fieldset>
      <Fieldset
        description="Please provide as much detail as possible so that we can survey the installation site successfully"
        legend="Site Information"
        maxWidth="1024px"
        spacing={8}
        columns={2}
      >
        <FormItem
          label="Route Approver On-site"
          name="site_information.route_approver_onsite"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Floor Plans Available"
          name="site_information.floor_plans_available"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="PPE Required"
          name="site_information.ppe_required"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Listed Building"
          name="site_information.listed_building"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Building/Landlord Contact"
          name="site_information.floor_plans_available"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Induction required"
          name="site_information.floor_plans_available"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Asbestos Register on-site"
          name="site_information.asbestos_register_onsite"
          helpText="This will result in abortive visit charges being applied if confirmed
        but not available - Not applicable for buildings built after 2000"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
              <Radio>N/A</Radio>
            </RadioGroup>
          )}
        />
        <FormItem
          label="Parking Available"
          name="site_information.parking_available"
          render={(props) => (
            <RadioGroup display="flex" gap={4}>
              <Radio>Yes</Radio>
              <Radio>No</Radio>
            </RadioGroup>
          )}
        />
        <GridItem colSpan={2}>
          <FormItem
            render={(props) => <Textarea {...props} />}
            name="site_information.hazards"
            label="Hazards"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormItem
            render={(props) => <Textarea {...props} />}
            name="site_information.access_restrictions"
            label="Access Restrictions"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormItem
            name="site_information.additional_information"
            render={(props) => <Textarea {...props} />}
            label="Additional Information"
          />
        </GridItem>
      </Fieldset>
    </VStack>
  )
}

export default {
  label: "Order Details",
  Step: OrderDetailsStep,
  isFinalStep: true,
  defaultValues,
}
