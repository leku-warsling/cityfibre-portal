import { forwardRef, useState } from "react"
import { Input, InputGroup, InputRightElement, InputProps } from "@chakra-ui/react"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import not from "ramda/es/not"

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(not)
  const Icon = show ? BsEyeSlash : BsEye
  
  return (
    <InputGroup>
      <Input type={show ? "text" : "password"} ref={ref} {...props} />
      <InputRightElement>
        <Icon onClick={toggleShow}/>
      </InputRightElement>
    </InputGroup>
  )
})

export default PasswordInput