import { Box, Text, Wrap, WrapItem } from "@chakra-ui/layout"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
} from "@chakra-ui/accordion"
import { isString } from "ramda-adjunct"
import path from "ramda/es/path"
import { FC, ReactNode } from "react"

export type DataListItemProps = {
  label: ReactNode
}

export type DataListKey = {
  accessor: string | ((data: any) => string)
  label: string
  id?: string
}

export type DataListOwnProps = {
  renderLabel: (data: Record<string, any>) => ReactNode
  keys: DataListKey[]
  data: any[]
}

export type DataListProps = Omit<AccordionProps, "children"> & DataListOwnProps

const DataListItem: FC<DataListItemProps> = ({ label, children }) => (
  <AccordionItem>
    <h2>
      <AccordionButton py={4}>
        <Box flex={1} textAlign="left" display="flex" alignItems="center">
          {label}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p={4}>{children}</AccordionPanel>
  </AccordionItem>
)

export const DataTag: FC<{ label: string }> = ({ label, children }) => (
  <Box>
    <Text
      textTransform="uppercase"
      letterSpacing="wider"
      fontWeight={600}
      color="gray.600"
      fontSize="10px"
    >
      {label}
    </Text>
    <Text fontWeight={600}>{children}</Text>
  </Box>
)

export const DataList = ({
  renderLabel,
  data,
  keys,
  ...props
}: DataListProps) => {
  return (
    <Accordion {...props}>
      {data.map((data, index) => (
        <DataListItem key={index} label={renderLabel(data)}>
          <Wrap spacing={4}>
            {keys.map(({ label, accessor }, index) => (
              <WrapItem key={index}>
                <DataTag label={label}>
                  {isString(accessor)
                    ? path(accessor.split("."), data)
                    : accessor(data)}
                </DataTag>
              </WrapItem>
            ))}
          </Wrap>
        </DataListItem>
      ))}
    </Accordion>
  )
}

DataList.defaultProps = {
  boxShadow: "base",
  bgColor: "white",
  rounded: 4,
  mb: 6,
}
