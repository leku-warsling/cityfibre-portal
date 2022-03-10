import { Story, Meta } from '@storybook/react';
import { Container } from '@chakra-ui/react';
import Login, { LoginProps } from './login';
import loginBgImage from '../../../assets/img/login-bg.jpg';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

export default {
  title: 'Templates / Login',
  component: Login,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="100%" mt="40px" px="10">
        {story()}
      </Container>
    ),
  ],
} as Meta<LoginProps>;

const Template: Story<LoginProps> = (args) => (
  <Login 
    brand={<Logo height="40" fill="#009F4D" />}
    title="Operate Portal"
    caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta pulvinar venenatis. Ut et metus libero. Nunc feugiat aliquam urna, et porttitor dui auctor et"
    onSubmit={(data) => console.log(data)}
    backdrop={loginBgImage}
    height="100vh"
    w="1680px"
    boxShadow="md"
  />
);

export const Primary = Template.bind({});
Primary.args = {};
