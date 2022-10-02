import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Button, IconButton } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar"
import { Icon } from "@chakra-ui/icon"
import { Page } from "@ui/lib"
import {
  AiOutlineFileExcel,
  AiOutlineFileJpg,
  AiOutlineFilePdf,
  AiOutlineFileWord,
} from "react-icons/ai"
import { BiSortUp } from "react-icons/bi"
import { FiPaperclip } from "react-icons/fi"
import { Link, useParams } from "react-router-dom"
import { usePage } from "../../../hooks/use-page.hook"

const PAGE_ACTIONS = [
  <Button to="/incidents" variant="link" as={Link}>
    View all incidents
  </Button>,
]

const IncidentPage = () => {
  usePage({ title: "Support" })
  const { id } = useParams()

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={PAGE_ACTIONS}>
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
            <Text
              fontSize="xl"
              fontWeight={800}
              letterSpacing="wide"
              textTransform="uppercase"
              mb={4}
            >
              Attachments
            </Text>
            <Wrap spacing={4}>
              <WrapItem>
                <VStack
                  bgColor="primary.500"
                  color="black"
                  _hover={{
                    bgColor: "black",
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
                  bgColor="primary.500"
                  color="black"
                  _hover={{
                    bgColor: "black",
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
                  bgColor="primary.500"
                  color="black"
                  _hover={{
                    bgColor: "black",
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
                  bgColor="primary.500"
                  color="black"
                  _hover={{
                    bgColor: "black",
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
              <WrapItem>
                <VStack
                  bgColor="primary.500"
                  color="black"
                  _hover={{
                    bgColor: "black",
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
          pt={6}
          pb={8}
          px={10}
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Text
              fontSize="xl"
              fontWeight={800}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              10 Comments
            </Text>
            <Button
              leftIcon={<BiSortUp />}
              variant="ghost"
              colorScheme="gray"
              fontSize="xl"
              fontWeight={800}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Sort By
            </Button>
          </Flex>
          <HStack spacing={3} mb={6}>
            <Avatar name="Luke Rawlings" size="sm" />
            <InputGroup>
              <Input placeholder="Add a comment..." />
              <InputRightElement width="auto">
                <Button size="sm" mr={1}>
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
            <IconButton
              colorScheme="gray"
              aria-label="add attachment"
              icon={<FiPaperclip />}
            />
          </HStack>
          <Divider borderColor="gray.300" mb={4} />
          <VStack
            divider={<Divider borderColor="gray.300" />}
            align="flex-start"
            spacing={4}
            w="100%"
            maxH="525px"
            overflowY="auto"
          >
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
            <Flex gap={4}>
              <Avatar name="Luke Rawlings" />
              <VStack align="flex-start" flexGrow={1} spacing={1}>
                <Text fontWeight={600} fontSize="sm">
                  Luke Rawlings -{" "}
                  <Text as="span" color="gray.600">
                    12/07/2022
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  erat euismod nisl vulputate tempor. Vivamus pharetra laoreet
                  bibendum. Etiam consectetur metus ipsum, ac interdum ipsum
                  tincidunt sit amet.
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Page>
  )
}

export default IncidentPage
