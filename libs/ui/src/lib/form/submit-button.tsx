import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { Button, ButtonProps } from "@chakra-ui/react"

const SubmitButton: FC<Omit<ButtonProps, "type">> = ({
  children,
  ...props
}) => {
  const { formState: fs } = useFormContext()
  const isDisabled = props.isDisabled || !fs.isValid || fs.isSubmitting

  return (
    <Button type="submit" {...props} isDisabled={isDisabled}>
      {children}
    </Button>
  )
}

export default SubmitButton
