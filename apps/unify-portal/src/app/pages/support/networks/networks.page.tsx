import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion"
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert"
import {
  Badge,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { Page } from "@ui/lib"
import { usePage } from "@unify/hooks/use-page.hook"
import { flow } from "fp-ts/lib/function"
import join from "ramda/es/join"
import juxt from "ramda/es/juxt"
import repeat from "ramda/es/repeat"
import { useEffect, useMemo, useState } from "react"
import { BiBellPlus, BiError } from "react-icons/bi"
import { Link } from "react-router-dom"

const toDateString = (date: Date) => date.toLocaleDateString("en-GB")
const toTimeString = (date: Date) => date.toLocaleTimeString("en-GB")
const toDatetimeString = flow(juxt([toDateString, toTimeString]), join(", "))

const NetworksPage = () => {
  usePage({ title: "Support" })
  const [, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          ref: "S123456",
          customer_ref: "S123456",
          status: "In Progress",
          product: "FTTH Residential",
          line_profile: "N/A",
          contract_start: new Date(),
          contract_end: new Date(),
        },
        15
      ),
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button
      leftIcon={<BiBellPlus fontSize="18px" />}
      to="/incidents/create"
      alignItems="center"
      as={Link}
    >
      Subscribe
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={actions}>
        Network Status
      </Page.Header>
      <Alert
        status="warning"
        rounded={5}
        mb={6}
        px={6}
        py={4}
        boxShadow="base"
        maxW="1024px"
        ml="auto"
        mr="auto"
      >
        <AlertIcon />
        <Box ml={1}>
          <AlertTitle>Some systems are experiencing issues!</AlertTitle>
        </Box>
      </Alert>
      <Accordion
        bgColor="white"
        rounded={4}
        boxShadow="base"
        maxW="1024px"
        ml="auto"
        mr="auto"
      >
        {data.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton py={4}>
                <Box
                  flex={1}
                  textAlign="left"
                  display="flex"
                  alignItems="center"
                  gap={4}
                >
                  <Icon as={BiError} fontSize="xl" color="red.600" />
                  <Text fontWeight={600}>{item.ref}</Text> -
                  <Text fontWeight={600} color="gray.600">
                    {item.product}
                  </Text>{" "}
                  -
                  <Text fontWeight={600} color="gray.600">
                    {toDatetimeString(item.contract_start)}
                  </Text>
                  <Spacer />
                  <Badge py={1.5} px={2} colorScheme="red" mr={4}>
                    Ongoing
                  </Badge>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel px={10} pt={8} pb={14} bgColor="gray.100">
              <Text fontWeight={600} mb={4}>
                Updates:
              </Text>
              <VStack
                w="100%"
                align="flex-start"
                spacing={-1}
                divider={
                  <Divider
                    orientation="vertical"
                    borderColor="primary.500"
                    borderWidth="2px"
                    height="40px"
                    borderTop="none"
                    borderBottom="none"
                    pl={1}
                  />
                }
              >
                <Flex gap={4} align="center">
                  <Flex
                    bgColor="white"
                    border="3px solid"
                    borderColor="primary.500"
                    justify="center"
                    rounded="full"
                    align="center"
                    color="white"
                    w={3}
                    h={3}
                  >
                    {/* <Icon as={BiCommentError} fontSize="xl" /> */}
                  </Flex>
                  <Box flex={1} maxW="700px" position="relative">
                    <Text
                      bgColor="primary.500"
                      color="white"
                      fontWeight={600}
                      fontSize="sm"
                      rounded={5}
                      p={4}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ultricies, velit vel feugiat vehicula, velit.
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.500"
                      textAlign="right"
                      fontSize="xs"
                      position="absolute"
                      top="calc(100% + 4px)"
                      right="0"
                    >
                      {toDatetimeString(item.contract_start)}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={4} align="center">
                  <Flex
                    bgColor="white"
                    border="3px solid"
                    borderColor="primary.500"
                    justify="center"
                    rounded="full"
                    align="center"
                    color="white"
                    w={3}
                    h={3}
                  >
                    {/* <Icon as={BiCommentError} fontSize="xl" /> */}
                  </Flex>
                  <Box flex={1} maxW="700px" position="relative">
                    <Text
                      bgColor="primary.500"
                      color="white"
                      fontWeight={600}
                      fontSize="sm"
                      rounded={5}
                      p={4}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ultricies, velit vel feugiat vehicula, velit.
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.500"
                      textAlign="right"
                      fontSize="xs"
                      position="absolute"
                      top="calc(100% + 4px)"
                      right="0"
                    >
                      {toDatetimeString(item.contract_start)}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={4} align="center">
                  <Flex
                    bgColor="white"
                    border="3px solid"
                    borderColor="primary.500"
                    justify="center"
                    rounded="full"
                    align="center"
                    color="white"
                    w={3}
                    h={3}
                  >
                    {/* <Icon as={BiCommentError} fontSize="xl" /> */}
                  </Flex>
                  <Box flex={1} maxW="700px" position="relative">
                    <Text
                      bgColor="primary.500"
                      color="white"
                      fontWeight={600}
                      fontSize="sm"
                      rounded={5}
                      p={4}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ultricies, velit vel feugiat vehicula, velit.
                    </Text>
                    <Text
                      fontWeight={600}
                      color="gray.500"
                      textAlign="right"
                      fontSize="xs"
                      position="absolute"
                      top="calc(100% + 4px)"
                      right="0"
                    >
                      {toDatetimeString(item.contract_start)}
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Page>
  )
}

export default NetworksPage
