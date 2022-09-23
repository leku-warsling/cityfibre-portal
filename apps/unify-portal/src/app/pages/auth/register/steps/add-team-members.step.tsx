import { AddIcon } from "@chakra-ui/icons"
import { FieldArray, FormItem } from "@ui/lib"
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
  useBreakpointValue,
} from "@chakra-ui/react"

export type AddTeamMembersFormProps = {
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

const AddTeamMembersStep = () => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  return (
    <VStack spacing={6} width="100%">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 4, lg: 6 }}
        w="100%"
      >
        <FormItem
          render={(props) => <Input {...props} />}
          name="user.name"
          label="Your Name"
          isRequired
          size={size}
        />
        <FormItem
          render={(props) => <Input {...props} type="email" />}
          label="Your Email"
          name="user.email"
          isRequired
          size={size}
        />
      </SimpleGrid>
      <FieldArray
        name="team_members"
        render={({ fields, path, append }) => {
          const fieldsets = fields.length > 0 && (
            <List
              width="100%"
              spacing={{ base: 4, lg: 6 }}
              hidden={fields.length === 0}
            >
              {fields.map(({ id }, index) => (
                <ListItem key={id}>
                  <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 4, lg: 6 }}
                  >
                    <FormItem
                      name={path(index, "name")}
                      render={(props) => (
                        <Input
                          {...props}
                          placeholder="Team member's fullname"
                          size={size}
                        />
                      )}
                    />

                    <FormItem
                      name={path(index, "email")}
                      render={(props) => (
                        <Input
                          {...props}
                          placeholder="Team member's email address"
                          type="email"
                          size={size}
                        />
                      )}
                    />
                  </SimpleGrid>
                </ListItem>
              ))}
            </List>
          )

          return (
            <VStack spacing={6} width="100%" align="start">
              <HStack width="100%" hidden={fields.length === 0}>
                <Text width="110px" color="gray.500">
                  Your Team
                </Text>
                <Divider />
              </HStack>
              {fieldsets}
              <HStack spacing={4}>
                <IconButton
                  onClick={() => append(defaultProps)}
                  aria-label="Add team members"
                  icon={<AddIcon />}
                  color="primary.500"
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
  Step: AddTeamMembersStep,
  isFinalStep: true,
  defaultValues,
}
