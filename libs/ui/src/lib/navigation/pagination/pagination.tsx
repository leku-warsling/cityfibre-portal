import { useMemo } from "react"
import {
  BiChevronLeft,
  BiChevronRight,
  BiDotsHorizontalRounded,
} from "react-icons/bi"
import {
  ButtonGroupProps,
  ButtonGroup,
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react"
import { equals } from "ramda"

export type UsePaginationState = {
  onChange: (value: number) => void
  boundaries?: number
  siblings?: number
  total: number
  page: number
}

export type PaginationProps = UsePaginationState &
  Omit<ButtonGroupProps, "onChange">

export const DOTS = "dots"

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}

const usePagination = ({
  boundaries = 1,
  siblings = 1,
  onChange,
  total,
  page,
}: UsePaginationState) => {
  const onPrevious = () => onChange(page - 1)
  const onNext = () => onChange(page + 1)
  const canNextPage = page + 1 > total
  const canPreviousPage = page - 1 < 1

  const paginationRange = useMemo((): (number | "dots")[] => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

    if (totalPageNumbers >= total) {
      return range(1, total)
    }

    const leftSiblingIndex = Math.max(page - siblings, boundaries)
    const rightSiblingIndex = Math.min(page + siblings, total - boundaries)

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1)

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2
      return [
        ...range(1, leftItemCount),
        DOTS,
        ...range(total - (boundaries - 1), total),
      ]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings
      return [
        ...range(1, boundaries),
        DOTS,
        ...range(total - rightItemCount, total),
      ]
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total - boundaries + 1, total),
    ]
  }, [total, siblings, page])

  return {
    range: paginationRange,
    isActive: equals(page),
    setActive: (n: number) => {
      console.log(n)
      onChange(n)
    },
    canPreviousPage,
    canNextPage,
    onPrevious,
    onNext,
  }
}

export const Pagination = ({
  size = "md",
  boundaries,
  page = 1,
  onChange,
  siblings,
  total,
  ...props
}: PaginationProps) => {
  const {
    range,
    isActive,
    onPrevious,
    onNext,
    setActive,
    canNextPage,
    canPreviousPage,
  } = usePagination({
    boundaries,
    siblings,
    onChange,
    total,
    page,
  })

  return (
    <ButtonGroup {...props} size={size} alignItems="center">
      <IconButton
        isDisabled={canPreviousPage}
        icon={<BiChevronLeft />}
        aria-label="previous"
        onClick={onPrevious}
      />
      {range.map((n, index) => {
        if (n === "dots")
          return <Icon as={BiDotsHorizontalRounded} minW={10} key={index} />

        return (
          <Button
            onClick={() => setActive(n)}
            isActive={isActive(n)}
            key={index}
          >
            {n}
          </Button>
        )
      })}
      <IconButton
        icon={<BiChevronRight />}
        isDisabled={canNextPage}
        aria-label="next"
        onClick={onNext}
      />
    </ButtonGroup>
  )
}

Pagination.defaultProps = {
  colorScheme: "gray",
  variant: "ghost",
  spacing: 1,
  size: "md",
}
