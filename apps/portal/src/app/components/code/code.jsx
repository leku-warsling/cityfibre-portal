import { chakra } from "@chakra-ui/react";
import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from "prism-react-renderer"

const Code = ({ children, ...props }) => (
  <chakra.div position="relative">
    <Highlight {...defaultProps} code={children} theme={theme} {...props}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.pre className={className} style={style} p={8} rounded={5}>
          {tokens.map((line, i) => (
            <chakra.div {...getLineProps({ line, key: i })} lineHeight={1.5}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </chakra.div>
          ))}
        </chakra.pre>
      )}
    </Highlight>
  </chakra.div>
)

export default Code