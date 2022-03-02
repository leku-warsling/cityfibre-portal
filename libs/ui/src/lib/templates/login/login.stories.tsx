import { Story, Meta } from '@storybook/react';
import {
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Login, { LoginProps } from "./login"
// import loginBgImage from '../../assets/img/login-bg.jpg';
// import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

export default {
  title: 'Templates / Login',
  component: Login,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="5xl" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<LoginProps>;

const Template: Story<LoginProps> = (args) => {
  return (
    <Login />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
