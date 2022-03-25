import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PageHeader from "./page-header"

type PageProps = BoxProps;

type PageComponent = FC<PageProps> & {
  Header: typeof PageHeader;
};

const MotionBox = motion(Box);
const animationConfig = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: .2,
      duration: .5,
    }
  },
};

const Page: PageComponent = ({ children, ...props }) => (
  <MotionBox {...props} {...animationConfig}>
    {children}
  </MotionBox>
);

Page.defaultProps = {
  px: [0, 2, 4, 8],
  py: [4, 4, 6, 8],
};

Page.Header = PageHeader;

export default Page;
