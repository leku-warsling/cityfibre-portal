import { Button, ButtonProps, HStack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import range from "ramda/es/range"

export type PaginationOwnProps = {
  current: number;
  defaultPage?: number;
  isDisabled?: boolean;
  limit: number;
  total: number;
  onChange: () => void;
  renderItem?: (page: number) => ReactNode
  maxButtons?: number
  spacing: number
  hideNext: boolean
  hidePrev: boolean
  hideFirst: boolean
  hideLast: boolean
};

export type PaginationProps = Pick<ButtonProps, 'size' | 'colorScheme' | 'variant' | 'as'> &
  PaginationOwnProps;

const Pagination: FC<PaginationProps> = ({
  current,
  variant = "ghost",
  size = "md",
  colorScheme = "blackAlpha",
  defaultPage = 1,
  isDisabled = false,
  limit = 10,
  total,
  onChange,
  renderItem,
  maxButtons = 10,
  spacing = 1,
  hideNext,
  hidePrev,
  hideFirst,
  hideLast,
}) => {
  if (total === 1) return null
  const start = current ?? defaultPage
  const pageCount = total / limit
  const end = maxButtons > pageCount ? pageCount : maxButtons
  const pages = range(start, end + 1)

  return (
    <HStack spacing={spacing}>
      {pages.map((n) => (
        <Button 
          colorScheme={colorScheme}
          variant={variant}
          size={size}
          isDisabled={isDisabled}
          onChange={onChange}
        >
          {n}
        </Button>
      ))}
    </HStack>
  )
};

export default Pagination;
