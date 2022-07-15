import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Indicator, Page } from "@ui"
import {
  AiOutlineFileExcel,
  AiOutlineFileJpg,
  AiOutlineFilePdf,
  AiOutlineFileWord,
} from "react-icons/ai"
import { SearchIcon } from "@chakra-ui/icons"

export const IncidentPage = () => {
  const [isLoading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/incidents" variant="link" as={Link}>
      View all incidents
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={actions}>
        Incident: {id}
      </Page.Header>
      <Flex gap={8}>
        <Flex flexDir="column" gap={8} minWidth="700px">
          <Box boxShadow="base" bgColor="white" width="100%" rounded={4} p={10}>
            <SimpleGrid columns={2} spacing={6} w="100%" mb={6} maxW="500px">
              <Text fontWeight={600}>Status</Text>
              <Text>
                <Badge px={3} py={1} colorScheme="green">
                  New
                </Badge>
              </Text>
              <Text fontWeight={600}>Service Reference</Text>
              <Text color="gray.600">S76549</Text>
              <Text fontWeight={600}>Raised Date</Text>
              <Text color="gray.600">24/05/1985</Text>
              <Text fontWeight={600}>Last Updated</Text>
              <Text color="gray.600">24/05/1985</Text>
            </SimpleGrid>
            <Text fontWeight={600} mb={4}>
              Description
            </Text>
            <Text maxW="500px" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac eros at turpis ullamcorper sollicitudin. Vivamus sed hendrerit
              velit, at fringilla lorem. Nunc vehicula ante ut nisi ultrices
              dapibus vel vel nisl. Curabitur sodales metus eget nisi euismod
              blandit. Cras massa mauris, consequat eget orci vel, pretium
              imperdiet mauris. Proin sodales maximus nulla ut pretium. Nulla
              facilisi. Aliquam tincidunt placerat risus ut accumsan. Morbi a
              sagittis dui.
            </Text>
          </Box>
          <Box
            boxShadow="base"
            bgColor="white"
            width="100%"
            minWidth="320px"
            rounded={4}
            pt={6}
            p={8}
          >
            <Text fontSize="lg" fontWeight={600} mb={4}>
              Attachments
            </Text>
            <Wrap spacing={4}>
              <WrapItem>
                <VStack
                  bgColor="brand.100"
                  color="brand.600"
                  _hover={{
                    bgColor: "brand.600",
                    cursor: "pointer",
                    color: "white",
                  }}
                  minW="115px"
                  rounded={4}
                  py={4}
                  px={2}
                >
                  <Icon as={AiOutlineFileExcel} fontSize="5xl" />
                  <Text fontSize="xs" fontWeight={600}>
                    data.xls
                  </Text>
                </VStack>
              </WrapItem>
              <WrapItem>
                <VStack
                  bgColor="brand.100"
                  color="brand.600"
                  _hover={{
                    bgColor: "brand.600",
                    cursor: "pointer",
                    color: "white",
                  }}
                  minW="115px"
                  rounded={4}
                  py={4}
                  px={2}
                >
                  <Icon as={AiOutlineFilePdf} fontSize="5xl" />
                  <Text fontSize="xs" fontWeight={600}>
                    data.pdf
                  </Text>
                </VStack>
              </WrapItem>
              <WrapItem>
                <VStack
                  bgColor="brand.100"
                  color="brand.600"
                  _hover={{
                    bgColor: "brand.600",
                    cursor: "pointer",
                    color: "white",
                  }}
                  minW="115px"
                  rounded={4}
                  py={4}
                  px={2}
                >
                  <Icon as={AiOutlineFileJpg} fontSize="5xl" />
                  <Text fontSize="xs" fontWeight={600}>
                    image.xls
                  </Text>
                </VStack>
              </WrapItem>
              <WrapItem>
                <VStack
                  bgColor="brand.100"
                  color="brand.600"
                  _hover={{
                    bgColor: "brand.600",
                    cursor: "pointer",
                    color: "white",
                  }}
                  minW="115px"
                  rounded={4}
                  py={4}
                  px={2}
                >
                  <Icon as={AiOutlineFileWord} fontSize="5xl" />
                  <Text fontSize="xs" fontWeight={600}>
                    text.docx
                  </Text>
                </VStack>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
        <Box
          boxShadow="base"
          bgColor="white"
          rounded={4}
          flex={1}
          py={8}
          px={10}
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Indicator
              bgColor="gray.500"
              position="top-end"
              offset={[-3, 0.5]}
              fontWeight={600}
              color="white"
              fontSize="xs"
              label="10"
              size={6}
            >
              <Text fontSize="xl" fontWeight={600}>
                Comments
              </Text>
            </Indicator>
            <InputGroup maxW="250px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input placeholder="Search commments" />
            </InputGroup>
          </Flex>
          <HStack>
            <InputGroup>
              <Input placeholder="Add a comment..." />
              <InputRightElement width="auto">
                <Button size="sm" mr={1}>
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Box>
      </Flex>
    </Page>
  )
}
