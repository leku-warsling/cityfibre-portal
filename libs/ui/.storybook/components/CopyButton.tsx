import { Button, ButtonProps, useClipboard } from '@chakra-ui/react'
import { FC } from 'react'

interface CopyButtonProps extends ButtonProps {
  code: string
}

const CopyButton: FC<CopyButtonProps> = ({ code, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Button
      size='sm'
      position='absolute'
      textTransform='uppercase'
      colorScheme='teal'
      fontSize='xs'
      height='24px'
      top="1.5rem"
      zIndex='1'
      right='2rem'
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  )
}

export default CopyButton
