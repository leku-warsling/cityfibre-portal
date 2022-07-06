import { chakra, StyleProps, SystemProps } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  ComponentType,
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react"
import {
  FormProvider,
  FieldValues,
  UseFormProps,
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

// export type FormOwnProps<T extends FieldValues> = {
//   config?: UseFormProps<T>
//   onSubmit: SubmitHandler<T>
//   children: ReactNode
// }

// export type FormProps<T extends FieldValues> = FormOwnProps<T> &
//   Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> &
//   StyleProps

// function _Form<T extends FieldValues>(
//   props: PropsWithChildren<FormProps<T>>,
//   ref: ForwardedRef<HTMLFormElement>
// ) {
//   const { config, onSubmit, children, ...rest } = props
//   const methods = useForm<T>(config)

//   return (
//     <FormProvider {...methods}>
//       <chakra.form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         ref={ref}
//         {...rest}
//       >
//         {children}
//       </chakra.form>
//     </FormProvider>
//   )
// }

// export const Form = forwardRef(_Form)

// Form.defaultProps = {
//   alignItems: "flex-start",
//   flexDir: "column",
//   display: "flex",
//   gap: "6",
// }

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
