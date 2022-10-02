import { position } from "../../util/component.util"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Hide } from "@chakra-ui/media-query"
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
          colorScheme="gray"
          align="top-start"
          variant="link"
          fontWeight={800}
          _hover={{
            color: "black",
            cursor: "pointer",
          }}
          offset={6}
          size="lg"
          as="a"
        >
          <Hide below="lg">Back to CityFibre.com</Hide>
        </AffixButton>
        <Outlet />
      </Flex>
    </Flex>
  )
}
