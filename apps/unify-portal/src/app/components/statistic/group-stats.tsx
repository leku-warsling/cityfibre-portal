import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Icon } from "@chakra-ui/icon"
import random from "lodash-es/random"
import { BiMessageError, BiUpArrowAlt, BiWrench } from "react-icons/bi"

export const GroupStats = () => {
  return (
    <Box
      boxShadow="md"
      rounded={6}
      px={8}
      py={6}
      bgColor="primary.500"
      color="black"
    >
      <HStack width="100%" justifyContent="space-between">
        <Heading fontSize="lg" fontWeight={800}>
          Overview
        </Heading>
        <Select variant="outline" borderColor="black" maxW="150px">
          <option>All</option>
          <option>Week</option>
          <option>Month</option>
          <option>Quarter</option>
          <option>Year</option>
        </Select>
      </HStack>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ borderBottom: "2px solid", borderColor: "black" }}>
            Support
          </Tab>
          <Tab>Billing</Tab>
          <Tab>Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel pt={16} px={0}>
            <Flex gap={8}>
              <Box
                bgColor="white"
                minW="150px"
                rounded={10}
                boxShadow="lg"
                position="relative"
                color="black"
                px={6}
                pt={10}
                pb={6}
              >
                <Flex
                  bgColor="secondary.500"
                  w="50px"
                  h="50px"
                  position="absolute"
                  top="0"
                  left={6}
                  transform="translateY(-45%)"
                  rounded={5}
                  justify="center"
                  align="center"
                  boxShadow="base"
                >
                  <Icon as={BiMessageError} color="black" fontSize="3xl" />
                </Flex>
                <Flex flexDir="column" gap={2}>
                  <Text
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontWeight={600}
                    fontSize="sm"
                  >
                    Incidents
                  </Text>
                  <HStack align="baseline">
                    <Text fontWeight={800} fontSize="3xl">
                      {random(150, 450)}
                    </Text>
                    <Flex
                      fontWeight={800}
                      color="red.600"
                      fontSize="sm"
                      align="center"
                    >
                      <Text>{random(5, 75)}%</Text>
                      <Icon as={BiUpArrowAlt} fontSize="xl" />
                    </Flex>
                  </HStack>
                </Flex>
              </Box>
              <Box
                bgColor="white"
                minW="150px"
                rounded={10}
                boxShadow="lg"
                position="relative"
                color="black"
                px={6}
                pt={10}
                pb={6}
              >
                <Flex
                  bgColor="secondary.500"
                  w="50px"
                  h="50px"
                  position="absolute"
                  top="0"
                  left={6}
                  transform="translateY(-45%)"
                  rounded={5}
                  justify="center"
                  align="center"
                  boxShadow="base"
                >
                  <Icon as={BiWrench} color="black" fontSize="3xl" />
                </Flex>
                <Flex flexDir="column" gap={2}>
                  <Text
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontWeight={600}
                    fontSize="sm"
                  >
                    Services
                  </Text>
                  <HStack align="baseline">
                    <Text fontWeight={800} fontSize="3xl">
                      {random(50, 200)}
                    </Text>
                    <Flex
                      fontWeight={800}
                      color="red.600"
                      fontSize="sm"
                      align="center"
                    >
                      <Text>{random(5, 75)}%</Text>
                      <Icon as={BiUpArrowAlt} fontSize="xl" />
                    </Flex>
                  </HStack>
                </Flex>
              </Box>
              <Box
                bgColor="white"
                minW="150px"
                rounded={10}
                boxShadow="lg"
                position="relative"
                color="black"
                px={6}
                pt={10}
                pb={6}
              >
                <Flex
                  bgColor="secondary.500"
                  w="50px"
                  h="50px"
                  position="absolute"
                  top="0"
                  left={6}
                  transform="translateY(-45%)"
                  rounded={5}
                  justify="center"
                  align="center"
                  boxShadow="base"
                >
                  <Icon as={BiMessageError} color="black" fontSize="3xl" />
                </Flex>
                <Flex flexDir="column" gap={2}>
                  <Text
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontWeight={600}
                    fontSize="sm"
                  >
                    Networks
                  </Text>
                  <HStack align="baseline">
                    <Text fontWeight={800} fontSize="3xl">
                      {random(50, 200)}
                    </Text>
                    <Flex
                      fontWeight={800}
                      color="red.600"
                      fontSize="sm"
                      align="center"
                    >
                      <Text>{random(5, 75)}%</Text>
                      <Icon as={BiUpArrowAlt} fontSize="xl" />
                    </Flex>
                  </HStack>
                </Flex>
              </Box>
              <Box
                bgColor="white"
                w="150px"
                rounded={10}
                boxShadow="lg"
                position="relative"
                color="black"
                px={6}
                pt={10}
                pb={6}
              >
                <Flex
                  bgColor="secondary.500"
                  w="50px"
                  h="50px"
                  position="absolute"
                  top="0"
                  left={6}
                  transform="translateY(-45%)"
                  rounded={5}
                  justify="center"
                  align="center"
                  boxShadow="base"
                >
                  <Icon as={BiMessageError} color="black" fontSize="3xl" />
                </Flex>
                <Flex flexDir="column" gap={2}>
                  <Text
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontWeight={600}
                    fontSize="sm"
                  >
                    Reports
                  </Text>
                  <HStack align="baseline">
                    <Text fontWeight={800} fontSize="3xl">
                      {random(50, 200)}
                    </Text>
                    <Flex
                      fontWeight={800}
                      color="red.600"
                      fontSize="sm"
                      align="center"
                    >
                      <Text>{random(5, 75)}%</Text>
                      <Icon as={BiUpArrowAlt} fontSize="xl" />
                    </Flex>
                  </HStack>
                </Flex>
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
