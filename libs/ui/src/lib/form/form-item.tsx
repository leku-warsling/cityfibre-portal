import { cloneElement, FC, ReactElement, ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import {
  FormErrorMessage,
  FormControlProps,
  FormHelperText,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react"

export type FormItemOwnProps = {
  layout?: "vertical" | "horizontal"
  children: ReactElement
  helpText?: ReactNode
  label?: ReactNode
  spacing?: number
}

export type FormItemProps = Omit<FormControlProps, "isInvalid"> &
  FormItemOwnProps

const direction = {
  vertical: "column",
  horizontal: "row",
} as const

const FormItem: FC<FormItemProps> = ({
  layout = "vertical",
  spacing = 0,
  isDisabled,
  isRequired,
  helpText,
  children,
  label,
  size,
}) => {
  const { name } = children.props
  const formContext = useFormContext()
  const { register, formState } = formContext
  const isValid = formState.isValid || !formState.touchedFields?.[name]
  const showHelpText = !isValid && !helpText
  // TODO: abstract to factory function
  const inputElement = cloneElement(children, {
    ...children.props,
    size: children.props.size ?? size,
    ...register(name, {
      required: isRequired,
      disabled: isDisabled,
    }),
    onKeyUp: children.props.onKeyUp
      ? (event: any) => children.props.onKeyUp(event, formContext)
      : undefined,
  })

  return (
    <FormControl
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={!isValid}
      size={size}
    >
      <Stack direction={direction[layout]} spacing={spacing}>
        <FormLabel hidden={!label} size={size} fontWeight={600}>
          {label}
        </FormLabel>
        {inputElement}
      </Stack>
      <FormHelperText hidden={showHelpText}>{helpText}</FormHelperText>
      <FormErrorMessage>{formState.errors?.[name]?.type}</FormErrorMessage>
    </FormControl>
  )
}

FormItem.defaultProps = {
  layout: "vertical",
}

export default FormItem
