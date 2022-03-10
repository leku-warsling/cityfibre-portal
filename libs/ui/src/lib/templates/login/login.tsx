import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Figure from '../../figure';
import { Form, FormItem } from '../../form';
import { PasswordInput } from '../../inputs';
import { motion } from 'framer-motion';

export type LoginProps = FlexProps & {
  backdrop?: string;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  title: string;
  caption?: string;
  showRegister?: boolean;
  showForgottenPassword?: boolean;
  brand: ReactElement;
};

const FlexMotion = motion(Flex)

const leftAnimationConfig = {
  initial: {
    opacity: 0,
    x: -825
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
  exit: {
    opacity: 0,
    x: -825,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
};

const rightAnimationConfig = {
  initial: {
    opacity: 0,
    x: 1100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
  exit: {
    opacity: 0,
    x: 1100,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
};

const Login: FC<LoginProps> = ({
  backdrop,
  brand,
  title,
  caption,
  onSubmit,
  isLoading,
  showForgottenPassword,
  showRegister,
  height,
  ...props
}) => (
  <Flex h={height} {...props}>
    <motion.div {...leftAnimationConfig}>
      <Figure bgImage={backdrop} bgSize="cover" w="825px" h={height}>
        <Figure.Header pt={20} pl={28}>
          {brand}
        </Figure.Header>
        <Figure.Caption pl={28} pb={16} gap={4}>
          <Heading size="lg" color="brand.800">
            CityFibre {title}
          </Heading>
          <Text maxW="500px">{caption}</Text>
        </Figure.Caption>
      </Figure>
    </motion.div>
    <FlexMotion {...rightAnimationConfig} flexGrow={1} alignItems="center" justifyContent="center" flexDirection="column" gap={8}>
      <Box textAlign="center" mb={6}>
        <Text as="strong" color="brand.500" fontSize="20px">{title}</Text>
        <Heading size="2xl" fontWeight={800}>Welcome Back</Heading>
      </Box>
      <Form onSubmit={onSubmit} maxW="460px" w="100%">
        <FormItem label="Email Address">
          <Input placeholder="email@example.com" name="username" />
        </FormItem>
        <FormItem label="Password">
          <PasswordInput name="password" />
        </FormItem>
        <Button
          alignSelf="center"
          type="submit"
          variant="solid"
          colorScheme="brand"
          rightIcon={<FiArrowRight />}
          w="150px"
          mt={4}
          spinnerPlacement="end"
          loadingText="Sign in"
          isLoading={isLoading}
          size="lg"
        >
          Sign in
        </Button>
      </Form>
    </FlexMotion>
  </Flex>
);

Login.defaultProps = {
  height: '100vh',
  bg: 'white',
};

export default Login;
