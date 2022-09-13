import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons"
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  VStack,
} from "@chakra-ui/react"
import { head } from "ramda"
import { BiDownload } from "react-icons/bi"

export type DataExportProps = {
  label?: string
  columns: string[][]
}

export const DataExport = ({ label = "Export", columns }: DataExportProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          leftIcon={<BiDownload />}
          rightIcon={<ChevronDownIcon fontSize="xl" />}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody p={4}>
            <CheckboxGroup defaultValue={columns.map(([k]) => k)}>
              <VStack spacing={4} align="flex-start" mb={4}>
                {columns.map(([value, label]) => (
                  <Checkbox key={value} value={value} defaultChecked>
                    {label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
            <Button rightIcon={<ArrowForwardIcon />} isFullWidth>
              Download
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
