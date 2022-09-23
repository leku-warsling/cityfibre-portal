import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { BiDownload } from "react-icons/bi"
import {
  PopoverContent,
  PopoverTrigger,
  CheckboxGroup,
  PopoverBody,
  Checkbox,
  Popover,
  Button,
  Portal,
  VStack,
} from "@chakra-ui/react"

export type DataExportProps = {
  label?: string
  columns: string[][]
}

export const DataExport = ({ label = "Export", columns }: DataExportProps) => {
  const checkboxes = columns.map(([value, label]) => (
    <Checkbox key={value} value={value} defaultChecked>
      {label}
    </Checkbox>
  ))

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rightIcon={<ChevronDownIcon fontSize="xl" />}
          leftIcon={<BiDownload />}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody p={4}>
            <CheckboxGroup defaultValue={columns.map(([k]) => k)}>
              <VStack spacing={4} align="flex-start" mb={4}>
                {checkboxes}
              </VStack>
            </CheckboxGroup>
            <Button rightIcon={<ArrowForwardIcon />} w="full">
              Download
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
