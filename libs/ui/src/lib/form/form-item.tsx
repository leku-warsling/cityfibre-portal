import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control"
import { Stack } from "@chakra-ui/layout"
import { SystemProps } from "@chakra-ui/system"
import { ErrorMessage } from "@hookform/error-message"
import has from "lodash-es/has"
import { ReactElement, ReactNode } from "react"
import {
  Controller,
  FieldValues,
  UseControllerReturn,
  useFormContext,
  UseFormRegisterReturn,
} from "react-hook-form"

type ConditionalRender =
  | {
      isControlled: true
      render: (a: UseControllerReturn<FieldValues, any>) => ReactElement
    }
  | {
      isControlled?: false
      render: (a: UseFormRegisterReturn) => ReactElement
    }

export type FormItemOwnProps = {
  justify?: SystemProps["justifyContent"]
  layout?: "vertical" | "horizontal"
  align?: SystemProps["alignItems"]
  helpText?: ReactNode
  label?: ReactNode
  spacing?: number
  name: string
}

export type FormItemProps = Pick<
  FormControlProps,
  "isRequired" | "isDisabled" | "size"
> &
  FormItemOwnProps &
  ConditionalRender

const direction = {
  vertical: "column",
  horizontal: "row",
} as const

export const FormItem = ({
  isDisabled: disabled = false,
  isRequired: required = false,
  layout = "vertical",
  isControlled,
  spacing = 0,
  helpText,
  justify,
  render,
  align,
  label,
  name,
  size,
  ...props
}: FormItemProps) => {
  const { register, formState, control } = useFormContext()
  const { touchedFields, errors, isSubmitted } = formState
  const isInvalid =
    has(errors, name) && (has(touchedFields, name) || isSubmitted)
  const hideHelpText = isInvalid || !helpText

  const input = isControlled ? (
    <Controller
      rules={{ required }}
      control={control}
      render={render}
      name={name}
    />
  ) : (
    render(register(name, { disabled, required }))
  )

  return (
    <FormControl
      isDisabled={disabled}
      isRequired={required}
      isInvalid={isInvalid}
      size={size}
    >
      <Stack
        direction={direction[layout]}
        spacing={spacing}
        justify={justify}
        align={align}
      >
        {label && (
          <FormLabel size={size} htmlFor={name} fontWeight={600}>
            {label}
          </FormLabel>
        )}
        {input}
      </Stack>
      <FormHelperText hidden={hideHelpText}>{helpText}</FormHelperText>
      <FormErrorMessage>
        <ErrorMessage
          errors={errors}
          name={name}
          message="This field is required"
        />
      </FormErrorMessage>
    </FormControl>
  )
}

FormItem.defaultProps = {
  layout: "vertical",
}
