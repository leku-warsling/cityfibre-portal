import { chakra } from "@chakra-ui/react";
import { Prism as Snippet } from "react-syntax-highlighter"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children, ...props }) => {
  return (
    <chakra.div position="relative">
      <Snippet {...props}>
        {children}
      </Snippet>
    </chakra.div>
  )
}

Code.defaultProps = {
  style: {
    ...a11yDark,
    "pre[class*=\"language-\"]": {
      ...a11yDark["pre[class*=\"language-\"]"],
      borderRadius: "8px",
      padding: "1.5rem 2rem .5rem",
    }
  }
}

export default Code