import { AuthTemplate, AuthTemplateProps, LoginForm } from "."
import { Container, Flex } from "@chakra-ui/react"
import { MemoryRouter } from "react-router-dom"
import { Story, Meta } from "@storybook/react"

export default {
  title: "Templates / Login",
  component: AuthTemplate,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <MemoryRouter>
        <Container maxW="100%" mt="40px" px="10">
          {story()}
        </Container>
      </MemoryRouter>
    ),
  ],
} as Meta<AuthTemplateProps>

// const Template: Story<AuthTemplateProps> = (args) => (
//   <Flex
//     maxWidth="900px"
//     minHeight="95vh"
//     justify="center"
//     bgColor="white"
//     align="center"
//     boxShadow="md"
//     rounded={4}
//   >
//     <AuthTemplate title="Partner Portal" p={8} width="100%" maxWidth="550px">
//       <LoginForm width="100%" mb={8} onSubmit={(data) => console.log(data)} />
//     </AuthTemplate>
//   </Flex>
// )

// export const Primary = Template.bind({})
// Primary.args = {}
