import { SmallCloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Wrap,
  WrapItem,
  Text,
  ComponentWithAs,
  IconProps,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Alert,
  AlertIcon,
  AlertTitle,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { matchSorter } from 'match-sorter';
import debounce from 'lodash-es/debounce';
import memoize from 'fast-memoize';
import { motion, AnimatePresence } from 'framer-motion';
import { FC, useMemo, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { toKeyValueCollection } from '../util';

type IconLibraryProps = {
  dict: Record<string, IconType | ComponentWithAs<'svg', IconProps>>;
};

type IconLibraryItemProps = {
  icon: IconType | ComponentWithAs<'svg', IconProps>;
  children: string;
};

const MotionBox = motion(Box);

const IconLibraryItem: FC<IconLibraryItemProps> = ({ icon, children }) => {
  const toast = useToast();
  const onCopy = useMemo(() => {
    return () => {
      navigator.clipboard.writeText(children).then(() => {
        toast({
          title: 'Copied',
          description: `${children} added to clipboard`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
    }
  }, [children]);

  return (
    <MotionBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.100"
      rounded={5}
      minWidth="150px"
      minHeight="100px"
      onClick={onCopy}
      p={4}
      _hover={{
        boxShadow: 'outline',
        cursor: "pointer",
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{
        scale: 1.075,
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Icon as={icon} fontSize="24px" mb={3} />
      <Text as="strong" fontSize="12px" maxW="100px" isTruncated>
        {children}
      </Text>
    </MotionBox>
  );
};

const IconLibrary: FC<IconLibraryProps> = ({ dict }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState('');
  const iconSet = useMemo(() => toKeyValueCollection(dict), []);
  const filterOptions = memoize((opts: any[], str: string) => {
    return matchSorter(opts, str, { keys: ['key'] });
  });
  const searchHandler = useMemo(() => {
    return debounce((val: string) => setSearchText(val), 300);
  }, []);

  const onClear = useMemo(() => {
    return () => {
      const { current } = searchRef;
      if (!current) return;
      current.value = '';
      setSearchText('');
      current.focus();
    };
  }, []);

  const icons = filterOptions(iconSet, searchText).map(({ key, value }) => (
    <WrapItem key={key}>
      <IconLibraryItem icon={value}>{key}</IconLibraryItem>
    </WrapItem>
  ));

  return (
    <Box my={6}>
      <InputGroup maxW="980px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          placeholder="Search icons"
          ref={searchRef}
          onChange={({ currentTarget }) => searchHandler(currentTarget.value)}
        />
        <InputRightElement>
          <IconButton
            hidden={!searchText.length}
            variant="ghost"
            onClick={onClear}
            aria-label="clear input"
            icon={<SmallCloseIcon />}
            size="sm"
            rounded="full"
          />
        </InputRightElement>
      </InputGroup>
      {!icons.length && (
        <Alert status="warning" my={6} maxW="980px">
          <AlertIcon />
          <AlertTitle mr={2}>No results found for: {searchText}</AlertTitle>
        </Alert>
      )}
      <Wrap spacing={4} my={8}>
        <AnimatePresence>{icons}</AnimatePresence>
      </Wrap>
    </Box>
  );
};

export default IconLibrary;
