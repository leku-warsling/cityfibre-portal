import { Checkbox } from "@chakra-ui/checkbox"
import { VStack } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { FormItem } from "@ui/lib"

const defaultValues = {}

const ProductOptionsStep = () => {
  return (
    <VStack align="flex-start" flexGrow={1} spacing={10}>
      <FormItem
        label="Product"
        name="product"
        render={(props) => <Select {...props} maxW="400px"></Select>}
      />
      <FormItem
        label="Line Profile"
        name="line_profile"
        render={(props) => <Select {...props} maxW="400px"></Select>}
      />
      <FormItem
        name="product"
        render={(props) => <Checkbox {...props}>ISP Migration</Checkbox>}
      />
    </VStack>
  )
}

export default {
  label: "Product Options",
  Step: ProductOptionsStep,
  defaultValues,
}
