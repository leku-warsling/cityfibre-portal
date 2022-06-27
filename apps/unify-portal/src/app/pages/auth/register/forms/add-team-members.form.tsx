import { AddIcon } from "@chakra-ui/icons"
import { FieldArray, FormItem } from "@ui"
import {
  Text,
  Divider,
  HStack,
  IconButton,
  Input,
  List,
  ListItem,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"

const defaultValues = {
  user: {
    name: "",
    email: "",
  },
  team_members: [],
}

const AddTeamMembersForm = () => {
  const defaultValues = {
    name: "",
    email: "",
  }
  return (
    <VStack spacing={6} width="100%">
      <SimpleGrid columns={2} spacing={6} w="100%">
        <FormItem label="Your Name" isRequired>
          <Input name="user.name" />
        </FormItem>
        <FormItem label="Your Email" isRequired>
          <Input name="user.email" type="email" />
        </FormItem>
      </SimpleGrid>
      <FieldArray
        name="team_members"
        render={({ fields, path, append }) => {
          const fieldsets = fields.map(({ id }, index) => (
            <ListItem key={id}>
              <HStack spacing={6}>
                <FormItem>
                  <Input
                    name={path(index, "name")}
                    placeholder="Team member's fullname"
                  />
                </FormItem>
                <FormItem>
                  <Input
                    placeholder="Team member's email address"
                    name={path(index, "email")}
                    type="email"
                  />
                </FormItem>
              </HStack>
            </ListItem>
          ))

          return (
            <VStack spacing={6} width="100%" align="start">
              <HStack width="100%" hidden={fields.length === 0}>
                <Text width="100px" color="gray.500">
                  Your Team
                </Text>
                <Divider />
              </HStack>
              <List width="100%" spacing={6} hidden={fields.length === 0}>
                {fieldsets}
              </List>
              <HStack spacing={4}>
                <IconButton
                  onClick={() => append(defaultValues)}
                  aria-label="Add team members"
                  icon={<AddIcon />}
                  variant="outline"
                />
                <span>Add another team member</span>
              </HStack>
            </VStack>
          )
        }}
      />
    </VStack>
  )
}

export default {
  label: "Add Team Members",
  Page: AddTeamMembersForm,
  isFinalStep: true,
  defaultValues,
}
