import { chakra } from "@chakra-ui/react"
import { Prism as Snippet } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import CopyButton from "./CopyButton"

const Code = ({ className, children, ...props }) => {
  const language = className && className.split("-")
  return (
    <chakra.div position="relative">
      <CopyButton code={children} />
      <Snippet language={language[1]} {...props}>
        {children}
      </Snippet>
    </chakra.div>
  )
}

Code.defaultProps = {
  style: {
    ...a11yDark,
    'pre[class*="language-"]': {
      ...a11yDark['pre[class*="language-"]'],
      borderRadius: "8px",
      padding: "1.5rem 2rem",
    },
  },
}

export default Code
