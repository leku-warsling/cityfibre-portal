import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import PageHeader from "./page-header"

type PageProps = BoxProps;

type PageComponent = FC<PageProps> & {
  Header: typeof PageHeader;
};

const Page: PageComponent = ({ children, ...props }) => (
  <Box {...props}>
    {children}
  </Box>
);

Page.defaultProps = {
  as: "main",
  px: 10,
  py: 8,
};

Page.Header = PageHeader;

export default Page;
