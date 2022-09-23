import { forwardRef, useState } from "react"
import {
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
} from "@chakra-ui/input"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import not from "ramda/es/not"

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isDisabled,
      isRequired,
      isReadOnly,
      isInvalid,
      onChange,
      value,
      name,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(not)
    const Icon = show ? BsEyeSlash : BsEye

    return (
      <InputGroup {...props}>
        <Input
          type={show ? "text" : "password"}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          isInvalid={isInvalid}
          onChange={onChange}
          value={value}
          name={name}
          ref={ref}
        />
        <InputRightElement>
          <Icon onClick={toggleShow} />
        </InputRightElement>
      </InputGroup>
    )
  }
)

export default PasswordInput
