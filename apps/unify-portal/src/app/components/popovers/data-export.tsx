import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { BiDownload } from "react-icons/bi"
import {
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  Popover,
} from "@chakra-ui/popover"
import { CheckboxGroup, Checkbox } from "@chakra-ui/checkbox"
import { Button } from "@chakra-ui/button"
import { Portal } from "@chakra-ui/portal"
import { VStack } from "@chakra-ui/layout"

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
