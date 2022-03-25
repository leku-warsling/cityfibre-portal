import {
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  TextProps,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type PopoverTextProps = Omit<TextProps, 'isTruncated'> & {
  children: string
  render?: (text: string) => ReactNode
};

const PopoverText: FC<PopoverTextProps> = ({ render, children, ...props }) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text {...props} isTruncated>
          {children}
        </Text>
      </PopoverTrigger>
      <PopoverContent w="100%" maxW="380px">
        <PopoverArrow />
        <PopoverBody p="4">
          <Text lineHeight="1.5">{render ? render(children) : children}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverText;
