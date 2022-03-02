import {
  Box,
  BoxProps,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { head, pipe } from 'ramda';
import { propNotEq } from 'ramda-adjunct';
import { FC, ReactElement, ReactNode } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import Breadcrumb from '../../navigation/breadcrumb';

export type PageHeaderProps = BoxProps & {
  onBack?: () => void;
  breadcrumb?: { path: string, name: string }[];
  subtitle?: ReactNode;
  actions?: ReactElement[];
  tags?: string[];
};

const shouldIncludeHome = pipe(head, propNotEq("path", "/"))

const PageHeader: FC<PageHeaderProps> = ({
  onBack,
  children,
  actions,
  breadcrumb,
  ...props
}) => {
  return (
    <Box {...props}>
      {!!breadcrumb && (
        <Breadcrumb fontSize="14px" mb={1}>
          {shouldIncludeHome(breadcrumb) && (
            <Breadcrumb.Item color="gray.500">
              <Breadcrumb.Link href="/">
                <BiHome />
              </Breadcrumb.Link>
            </Breadcrumb.Item>
          )}
          {breadcrumb.map(({ path, name }, i) => (
            <Breadcrumb.Item key={i} color={i < (breadcrumb.length - 1) ? "gray.500" : "inherit"}>
              <Breadcrumb.Link href={path}>{name}</Breadcrumb.Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
      <HStack mb={2} spacing={1}>
        {!!onBack && (
          <IconButton
            aria-label="Return to previous page"
            variant="ghost"
            icon={<FiArrowLeft />}
            onClick={onBack}
            rounded="full"
            _hover={{ bg: 'gray.200' }}
            ml={-2.5}
            mb={-1}
          />
        )}
        <Heading fontSize="20px" flexGrow={1}>
          {children}
        </Heading>
        <ButtonGroup ml="auto" spacing={.5}>{actions}</ButtonGroup>
      </HStack>
    </Box>
  );
};

PageHeader.defaultProps = {
  borderBottom: '1px solid',
  borderColor: 'gray.300',
};

export default PageHeader;
