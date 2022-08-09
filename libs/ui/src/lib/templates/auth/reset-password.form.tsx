import { createForm, FormItem, FormFieldsProps } from "../../form"
import { PasswordInput } from "../../inputs"
import { Button, List, ListIcon, ListItem } from "@chakra-ui/react"
import { z } from "zod"
import { useFormContext } from "react-hook-form"
import { BiCheckCircle } from "react-icons/bi"
import { applySpec, test } from "ramda"
import { lengthGte } from "ramda-adjunct"

const applyPasswordSpec = applySpec({
  containsLowerCaseChar: test(/^(?=.*[a-z])/),
  containsUpperCaseChar: test(/^(?=.*[A-Z])/),
  containsNumber: test(/^(?=.*[0-9])/),
  containsSpecialChar: test(/^(?=.*[!@#%&$?_])/),
  isCorrectLength: lengthGte(10),
})

export const ResetPasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required" })
      .min(10, "Password must be 10 or more characters long")
      .regex(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .regex(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .regex(/^(?=.*[0-9])/, "Must contain at least one number")
      .regex(
        /^(?=.*[!@#%&$?_])/,
        "Must contain at least one special character"
      ),
    confirm_password: z.string({
      required_error: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  })

const PasswordCriteria = () => {
  const { watch } = useFormContext()
  const password = watch("password")
  const spec = applyPasswordSpec(password ?? "")

  return (
    <List spacing={2} mb={4}>
      <ListItem alignItems="center" display="flex">
        <ListIcon
          fontSize="3xl"
          as={BiCheckCircle}
          color={spec.isCorrectLength ? "green.500" : "gray.300"}
        />
        <strong>10 or more characters</strong>
      </ListItem>
      <ListItem alignItems="center" display="flex">
        <ListIcon
          fontSize="3xl"
          as={BiCheckCircle}
          color={spec.containsUpperCaseChar ? "green.500" : "gray.300"}
        />
        <strong>An uppercase character</strong>
      </ListItem>
      <ListItem alignItems="center" display="flex">
        <ListIcon
          fontSize="3xl"
          as={BiCheckCircle}
          color={spec.containsLowerCaseChar ? "green.500" : "gray.300"}
        />
        <strong>A Lowercase character</strong>
      </ListItem>
      <ListItem alignItems="center" display="flex">
        <ListIcon
          fontSize="3xl"
          as={BiCheckCircle}
          color={spec.containsNumber ? "green.500" : "gray.300"}
        />
        <strong>At lease one number</strong>
      </ListItem>
      <ListItem alignItems="center" display="flex">
        <ListIcon
          fontSize="3xl"
          as={BiCheckCircle}
          color={spec.containsSpecialChar ? "green.500" : "gray.300"}
        />
        <strong>A special character (eg !@#%&$?_)</strong>
      </ListItem>
    </List>
  )
}

export const ResetPasswordFields = ({
  isLoading,
  size = "lg",
  ...props
}: FormFieldsProps) => (
  <>
    <PasswordCriteria />
    <FormItem
      render={(props) => <PasswordInput {...props} size={size} />}
      label="New Password"
      name="password"
      size={size}
      isRequired
    />
    <FormItem
      render={(props) => <PasswordInput {...props} size={size} />}
      label="Confirm Password"
      name="confirm_password"
      size={size}
      isRequired
    />
    <Button
      spinnerPlacement="end"
      loadingText="Send Reset Link"
      isLoading={isLoading}
      colorScheme="brand"
      alignSelf="center"
      variant="solid"
      type="submit"
      size={size}
      px={12}
    >
      Set New Password
    </Button>
  </>
)

export const ResetPasswordForm = createForm(ResetPasswordFields)
