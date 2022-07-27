import { chakra, SystemProps } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { ComponentType, ForwardedRef, forwardRef } from "react"
import {
  FormProvider,
  FieldValues,
  useForm,
  SubmitHandler,
  DefaultValues,
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
      resolver: schema ? yupResolver(schema) : undefined,
      criteriaMode: "all",
      mode: "onChange",
      defaultValues,
    })

    return (
      <FormProvider {...methods}>
        <chakra.form
          onSubmit={methods.handleSubmit(onSubmit)}
          justifyContent={justify}
          flexDir={direction}
          alignItems={align}
          maxWidth={maxWidth}
          display="flex"
          width={width}
          gap={spacing}
          ref={ref}
        >
          <Component {...(props as P)} />
        </chakra.form>
      </FormProvider>
    )
  }

  return forwardRef(Form)
}
