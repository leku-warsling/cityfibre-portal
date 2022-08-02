import { AddIcon } from "@chakra-ui/icons"
import { useEffect, useMemo, useState } from "react"
import { BiBellPlus, BiError } from "react-icons/bi"
import format from "date-fns/fp/format"
import { Link } from "react-router-dom"
import { Page } from "@ui"
import { repeat } from "ramda"
import {
  Button,
  Spacer,
  Badge,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  Divider,
} from "@chakra-ui/react"
import { usePage } from "../../../hooks/use-page.hook"

export const NetworksPage = () => {
  usePage({ title: "Support" })
  const [isLoading, setLoading] = useState(true)
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
                    {format("dd/MM/yyyy HH:mm a", item.contract_start)}
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
                    borderColor="brand.500"
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
                    borderColor="brand.500"
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
                      bgColor="brand.500"
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
                      {format("dd/MM/yyyy HH:mm a", item.contract_start)}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={4} align="center">
                  <Flex
                    bgColor="white"
                    border="3px solid"
                    borderColor="brand.500"
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
                      bgColor="brand.500"
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
                      {format("dd/MM/yyyy HH:mm a", item.contract_start)}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={4} align="center">
                  <Flex
                    bgColor="white"
                    border="3px solid"
                    borderColor="brand.500"
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
                      bgColor="brand.500"
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
                      {format("dd/MM/yyyy HH:mm a", item.contract_start)}
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
