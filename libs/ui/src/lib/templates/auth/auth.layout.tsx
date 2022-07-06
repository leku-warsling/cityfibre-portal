import { position } from "../../util/component.util"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { FC, ReactNode } from "react"

export type AuthLayoutProps = {
  aside?: ReactNode
}

const AffixButton = position(Button)

export const AuthLayout: FC<AuthLayoutProps> = ({ aside }) => {
  return (
    <Flex h="100vh" maxW="100vw">
      {aside}
      <Flex
        position="relative"
        justify="center"
        bgColor="white"
        height="100vh"
        align="center"
        flexGrow={1}
      >
        <AffixButton
          leftIcon={<ArrowBackIcon />}
          align="top-start"
          offset={6}
          colorScheme="gray"
          variant="link"
          as="a"
          size="sm"
        >
          Back to CityFibre.com
        </AffixButton>
        <Outlet />
      </Flex>
    </Flex>
  )
}
