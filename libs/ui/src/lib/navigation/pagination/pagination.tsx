import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { range } from "ramda"
import {
  ButtonGroupProps,
  ButtonGroup,
  IconButton,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react"

export type PaginationOwnProps = {
  onChange?: (value: number) => void
  boundaries?: number
  isCompact?: boolean
  siblings?: number
  total: number
  page: number
}

export type PaginationProps = PaginationOwnProps & ButtonGroupProps

export const Pagination = ({
  isCompact = false,
  size = "md",
  boundaries,
  page = 1,
  onChange,
  siblings,
  total,
  ...props
}: PaginationProps) => {
  const display = isCompact ? (
    <Flex gap={2} align="center">
      <Input
        defaultValue={page}
        textAlign="center"
        bgColor="white"
        size={size}
        w="50px"
      />
      /{total}
    </Flex>
  ) : (
    range(1, total + 1).map((pageNumber, index) => (
      <Button key={index} isActive={pageNumber === page}>
        {pageNumber}
      </Button>
    ))
  )

  return (
    <ButtonGroup {...props} size={size}>
      <IconButton icon={<BiChevronLeft />} aria-label="previous" />
      {display}
      <IconButton icon={<BiChevronRight />} aria-label="next" />
    </ButtonGroup>
  )
}

Pagination.defaultProps = {
  variant: "ghost",
  spacing: 1,
  size: "md",
}
