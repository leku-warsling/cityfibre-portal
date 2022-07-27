import { position } from "../../util/component.util"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Button, Flex, Hide } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { FC, ReactNode } from "react"

export type AuthLayoutProps = {
  aside?: ReactNode
}

const AffixButton = position(Button)

export const AuthLayout: FC<AuthLayoutProps> = ({ aside }) => {
  return (
    <Flex h={{ base: "auto", lg: "100vh" }} maxW="100vw" overflowY="auto">
      <Hide below="lg">{aside}</Hide>
      <Flex
        position="relative"
        justify="center"
        bgColor="white"
        minHeight="100vh"
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
          <Hide below="lg">Back to CityFibre.com</Hide>
        </AffixButton>
        <Outlet />
      </Flex>
    </Flex>
  )
}
