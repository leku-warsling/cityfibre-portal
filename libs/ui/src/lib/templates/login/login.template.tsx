import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Input,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Figure from '../../figure';
import { Form, FormItem } from '../../form';
import { PasswordInput } from '../../inputs';
import { motion } from 'framer-motion';

export type LoginProps = FlexProps & {
  backdrop?: string;
  aside?: ReactElement
  asidePlacement?: "left" | "right"
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  title: string;
  greeting?: string;
  showRegister?: boolean;
  showForgottenPassword?: boolean;
  isFullscreen?: boolean;
  size?: "sm" | "md" | "lg"
  brand: ReactElement;
};

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);

const leftAnimationConfig = {
  initial: {
    opacity: 0,
    x: -825,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -825,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const rightAnimationConfig = {
  initial: {
    opacity: 0,
    x: 1100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 1100,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const Login: FC<LoginProps> = ({
  backdrop,
  brand,
  title,
  greeting,
  onSubmit,
  isLoading,
  showForgottenPassword,
  showRegister,
  height,
  ...props
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const size = isMobile ? "md" : "lg"
  
  return (
    <Flex h={height} {...props} maxW="100vw">
      <BoxMotion {...leftAnimationConfig} hidden={isMobile} width="50%">
        <Figure bgImage={backdrop} bgPos="center" bgSize="cover" w="100%" h={height}>
          <Figure.Header pt={{ lg: 20, md: 8 }} pl={{ lg: 28, md: 8 }}>
            {brand}
          </Figure.Header>
          <Figure.Caption pl={{ lg: 28, md: 8 }} pb={16} gap={4} pr={{ md: 8 }}>
            <Heading fontSize={{ lg: "3xl", md: "xl" }} color="brand.800">
              CityFibre {title}
            </Heading>
            <Text maxW="500px">{greeting}</Text>
          </Figure.Caption>
        </Figure>
      </BoxMotion>
      <FlexMotion
        {...rightAnimationConfig}
        flexGrow={1}
        minWidth="50%"
        alignItems="center"
        justifyContent={{ sm: "flex-start", md: "center" }}
        flexDirection="column"
        pt={[20, 14, 0]}
        px={[8, 10, 8]}
        gap={8}
      >
        <Box textAlign="center" mb={6}>
          <Text as="strong" color="brand.500" fontSize={["md", "xl"]}>
            {title}
          </Text>
          <Heading fontSize={["3xl", "5xl"]} fontWeight={800}>
            Welcome Back
          </Heading>
        </Box>
        <Form onSubmit={onSubmit} maxW={["320px", "460px"]} w="100%">
          <FormItem size={size} label="Email Address">
            <Input placeholder="email@example.com" name="username" />
          </FormItem>
          <FormItem size={size} label="Password">
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
            size={size}
          >
            Sign in
          </Button>
        </Form>
      </FlexMotion>
    </Flex>
  );
};

Login.defaultProps = {
  height: '100vh',
  bg: 'white',
};

export default Login;
