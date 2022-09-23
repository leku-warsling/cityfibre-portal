import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Heading, HStack } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button"
import { FC } from "react"

export type CalendarControlsProps = {
  onNextLevel?: () => void
  onPrevious: () => void
  previousLabel?: string
  showPrevious?: boolean
  hasPrevious: boolean
  onNext: () => void
  nextLabel?: string
  showNext?: boolean
  hasNext: boolean
}

const CalendarControls: FC<CalendarControlsProps> = ({
  previousLabel = "Previous",
  nextLabel = "Next",
  showPrevious = true,
  showNext = true,
  hasPrevious,
  onPrevious,
  children,
  hasNext,
  onNext,
}) => {
  const previousButton = (
    <IconButton
      aria-label={previousLabel}
      isDisabled={!hasPrevious}
      icon={<BiChevronLeft />}
      onClick={onPrevious}
      variant="ghost"
      fontSize="xl"
      size="sm"
    />
  )

  const nextButton = (
    <IconButton
      icon={<BiChevronRight />}
      aria-label={nextLabel}
      isDisabled={!hasNext}
      onClick={onNext}
      variant="ghost"
      fontSize="xl"
      size="sm"
    />
  )

  return (
    <HStack w="100%" justifyContent="space-between" mb={1.5}>
      {showPrevious && previousButton}
      <Heading size="xs" textAlign="center" flexGrow={1}>
        {children}
      </Heading>
      {showNext && nextButton}
    </HStack>
  )
}

export default CalendarControls
