// @ts-nocheck
import { Box } from "@chakra-ui/layout"
import { SystemProps } from "@chakra-ui/system"
import { zodResolver } from "@hookform/resolvers/zod"
import { ComponentType, ForwardedRef, forwardRef } from "react"
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form"

export type CreateFormProps<T extends FieldValues> = {
  direction?: SystemProps["flexDirection"]
  justify?: SystemProps["justifyContent"]
  maxWidth?: SystemProps["maxWidth"]
  align?: SystemProps["alignItems"]
  defaultValues?: DefaultValues<T>
  spacing?: SystemProps["margin"]
  width?: SystemProps["width"]
  onSubmit: SubmitHandler<T>
  schema?: any
}

export type FormFieldsProps = {
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

export const createForm = <P extends object>(Component: ComponentType<P>) => {
  const Form = <T extends FieldValues>(
    {
      direction = "column",
      align = "flex-start",
      defaultValues,
      width = "100%",
      spacing = 6,
      maxWidth,
      onSubmit,
      justify,
      schema,
      ...props
    }: CreateFormProps<T> & P,
    ref: ForwardedRef<HTMLFormElement>
  ) => {
    const methods = useForm<T>({
      resolver: schema ? zodResolver(schema) : undefined,
      criteriaMode: "all",
      mode: "onChange",
      defaultValues,
    })

    return (
      <FormProvider {...methods}>
        <Box
          onSubmit={methods.handleSubmit(onSubmit)}
          justifyContent={justify}
          flexDir={direction}
          alignItems={align}
          maxWidth={maxWidth}
          display="flex"
          width={width}
          gap={spacing}
          ref={ref}
          as="form"
        >
          <Component {...(props as P)} />
        </Box>
      </FormProvider>
    )
  }

  return forwardRef(Form)
}
