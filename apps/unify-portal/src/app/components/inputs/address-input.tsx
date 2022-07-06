import { useFormContext, UseFormRegisterReturn } from "react-hook-form"
import { FormItem, SearchInput, util } from "@ui"
import { useState } from "react"
import { pick, times } from "ramda"
import {
  FormControl,
  SimpleGrid,
  FormLabel,
  Spacer,
  Input,
  SimpleGridProps,
} from "@chakra-ui/react"

export type AddressInputProps = SimpleGridProps & {
  size?: "sm" | "md" | "lg"
  baseName: string
  label?: string
}

const findAddressByPostcode = async (postcode: string) => {
  const createAddress = (n: number) => {
    const street = "Fake Street"
    const county = "Fakeshire"
    const city = "Faketown"
    const house = n + 1

    return {
      label: `${house} ${street}, ${city}`,
      postcode,
      street,
      county,
      house,
      city,
    }
  }

  return util.async.later(3000, times(createAddress, 10))
}

const getAddress = pick(["house", "city", "county", "postcode", "street"])

export const AddressInput = ({
  baseName,
  label,
  size = "lg",
  ...props
}: AddressInputProps) => {
  const { setValue } = useFormContext()
  const path = (name: string) => `${baseName}.${name}`
  const [isManualInput, setManualInput] = useState(false)
  const renderField = (props: UseFormRegisterReturn) => (
    <Input {...props} size={size} />
  )

  const addressFields = isManualInput && (
    <>
      <FormItem
        label="House Name/Number"
        name={path("house")}
        render={renderField}
        size={size}
      />
      <FormItem
        name={path("street")}
        render={renderField}
        label="Street"
        size={size}
      />
      <FormItem
        render={renderField}
        name={path("city")}
        label="City"
        size={size}
      />
      <FormItem
        name={path("county")}
        render={renderField}
        label="County"
        size={size}
      />
      <FormItem
        name={path("postcode")}
        render={renderField}
        label="Postcode"
        size={size}
      />
    </>
  )

  return (
    <SimpleGrid {...props}>
      <FormControl size={size}>
        {label && (
          <FormLabel fontSize={size} fontWeight={600}>
            {label}
          </FormLabel>
        )}
        <SearchInput
          onSearch={findAddressByPostcode}
          placeholder="Enter postcode"
          label="Find Address"
          onSelect={(value) => {
            setValue(baseName, getAddress(value))
            setManualInput(true)
          }}
        />
      </FormControl>
      <Spacer />
      {addressFields}
    </SimpleGrid>
  )
}

AddressInput.defaultProps = {
  width: "100%",
  columns: 2,
  spacing: 8,
}
