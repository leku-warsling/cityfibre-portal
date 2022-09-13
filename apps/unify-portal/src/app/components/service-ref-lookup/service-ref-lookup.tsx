import {
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
} from "@chakra-ui/react"
import { SearchInput, SearchInputProps, SearchOption, util } from "@ui"
import { random } from "lodash-es"
import { times } from "ramda"
import { ReactNode } from "react"
import { FieldValues, useFormContext, UseFormSetValue } from "react-hook-form"

export type ServiceRefLookupOwnProps = {
  onSelect: (setValue: UseFormSetValue<FieldValues>, item: SearchOption) => void
  buttonLabel?: string
  label?: ReactNode
}

export type ServiceRefLookupProps = Omit<
  SearchInputProps,
  "label" | "onSelect" | "onSearch"
> &
  ServiceRefLookupOwnProps &
  Pick<FormControlProps, "isDisabled" | "isRequired" | "isInvalid" | "size">

export const ServiceRefLookup = ({
  placeholder = "Enter postcode",
  buttonLabel = "Find",
  isDisabled,
  isRequired,
  isInvalid,
  onSelect,
  label,
  size,
  ...props
}: ServiceRefLookupProps) => {
  const { setValue } = useFormContext()

  const _onSelect = (item: SearchOption) => {
    onSelect(setValue, item)
  }

  return (
    <FormControl
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      size={size}
    >
      <Flex flexDir="column">
        {label && (
          <FormLabel size={size} fontWeight={600}>
            {label}
          </FormLabel>
        )}
        <SearchInput
          label={buttonLabel}
          onSelect={_onSelect}
          placeholder={placeholder}
          onSearch={(postcode: string) => {
            return util.async.later(
              1500,
              times(
                (n) => ({
                  label: `${n + 1} Ormeau Avenue, Belfast, ${postcode}`,
                  value: `S${random(100000, 999999)}`,
                }),
                10
              )
            )
          }}
          {...props}
        />
      </Flex>
    </FormControl>
  )
}
