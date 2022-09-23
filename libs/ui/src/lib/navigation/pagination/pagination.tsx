import { Flex, FlexProps, Spacer, Text } from "@chakra-ui/layout"
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
} from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Select } from "@chakra-ui/select"
import { Icon } from "@chakra-ui/icon"
import { chakra } from "@chakra-ui/system"
import { ChangeEventHandler } from "react"
import {
  BiChevronLeft,
  BiChevronRight,
  BiDotsHorizontalRounded,
} from "react-icons/bi"
import BeatLoader from "react-spinners/BeatLoader"
import { usePagination, UsePaginationState } from "./use-pagination.hook"

export type PaginationOwnProps = {
  onSizeChange?: (value: number) => void
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  isLoading?: boolean
  isCompact?: boolean
}

export type PaginationProps = UsePaginationState &
  PaginationOwnProps &
  Omit<FlexProps, "onChange"> &
  Omit<ButtonGroupProps, "onChange" | "isAttached">

export const Pagination = ({
  pageSizeOptions = [10, 25, 50, 100],
  showSizeChanger = false,
  isCompact = false,
  isLoading = false,
  pageSize = 10,
  onSizeChange,
  colorScheme,
  size = "md",
  isDisabled,
  boundaries,
  onChange,
  siblings,
  variant,
  spacing,
  current,
  total,
  ...props
}: PaginationProps) => {
  let pager = null
  const {
    canPreviousPage,
    canNextPage,
    onPrevious,
    setActive,
    isActive,
    onNext,
    range,
  } = usePagination({
    boundaries,
    siblings,
    onChange,
    current,
    total,
  })

  const _onSizeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onSizeChange && onSizeChange(Number(e.target.value))
  }

  const pageSizeSelect = (
    <Select onChange={_onSizeChange} value={pageSize} maxW="150px" size={size}>
      {pageSizeOptions.map((opt) => (
        <option key={opt} value={opt}>
          Show {opt}
        </option>
      ))}
    </Select>
  )

  const loader = (
    <chakra.div mt={2} ml={2}>
      <BeatLoader />
    </chakra.div>
  )

  if (isCompact) {
    pager = (
      <Flex align="center" gap={2}>
        <Input
          value={current}
          textAlign="center"
          maxWidth="50px"
          bgColor="white"
          onKeyDown={console.log}
          onChange={(e) => {
            const n = Number(e.target.value)
            if (n <= total) setActive(n)
          }}
          size={size}
        />
        <Text fontSize={size}>/ {total}</Text>
      </Flex>
    )
  } else {
    pager = range.map((n, index) => {
      if (n === "dots") {
        return <Icon as={BiDotsHorizontalRounded} minW={10} key={index} />
      }
      return (
        <Button onClick={() => setActive(n)} isActive={isActive(n)} key={index}>
          {n}
        </Button>
      )
    })
  }

  const controls = (
    <ButtonGroup
      colorScheme={colorScheme}
      isDisabled={isDisabled}
      alignItems="center"
      variant={variant}
      spacing={spacing}
      size={size}
    >
      <IconButton
        isDisabled={canPreviousPage}
        icon={<BiChevronLeft />}
        aria-label="previous"
        onClick={onPrevious}
      />
      {pager}
      <IconButton
        icon={<BiChevronRight />}
        isDisabled={canNextPage}
        aria-label="next"
        onClick={onNext}
      />
    </ButtonGroup>
  )

  return (
    <Flex {...props}>
      {isLoading ? loader : controls}
      <Spacer />
      {showSizeChanger && pageSizeSelect}
    </Flex>
  )
}

Pagination.defaultProps = {
  colorScheme: "gray",
  variant: "ghost",
  spacing: 1,
  size: "md",
}
