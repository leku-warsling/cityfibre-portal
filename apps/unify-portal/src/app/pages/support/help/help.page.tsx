import { useEffect, useMemo, useState } from "react"
import { AddIcon, SearchIcon } from "@chakra-ui/icons"
import {
  Badge,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { prop, repeat } from "ramda"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { BiCommentDetail, BiCommentError, BiInfoCircle } from "react-icons/bi"

export const HelpPage = () => {
  const [isLoading, setLoading] = useState(true)

  const data = useMemo(
    () =>
      repeat(
        {
          ref: "S123456",
          status: "New",
          raised_by: "Sammy Walford",
          line_profile: "N/A",
          created_at: new Date(),
          updated_at: new Date(),
        },
        100
      ),
    []
  )

  const columns = useMemo(
    () =>
      [
        {
          Header: "Reference",
          accessor: "ref",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => (
            <Button
              size="sm"
              as={Link}
              variant="link"
              to={`/complaints/${value}`}
            >
              {value}
            </Button>
          ),
        },
        {
          Header: "Status",
          accessor: "status",
          disableSortBy: true,
          disableFilters: true,
          Cell: ({ value }: any) => (
            <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
              {value}
            </Badge>
          ),
        },
        {
          Header: "Created",
          accessor: "created_at",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Last Updated",
          accessor: "updated_at",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Raised By",
          accessor: "raised_by",
          disableFilters: true,
          disableSortBy: true,
        },
      ] as const,
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2}>
        Help & Support
      </Page.Header>
      <Flex gap={8} width="100%" mb={8}>
        <VStack
          bgColor="brand.500"
          align="flex-start"
          boxShadow="lg"
          color="white"
          rounded={4}
          spacing={4}
          py={8}
          px={8}
        >
          <Icon as={BiCommentDetail} fontSize="36px" />
          <Text
            fontSize="2xl"
            fontWeight={800}
            lineHeight={1.2}
            maxWidth="300px"
          >
            Please share your feedback
          </Text>
          <Text fontWeight={600} maxWidth="300px">
            Have you received some excellent customer service? If so, we'd love
            to hear from you.
          </Text>
          <Spacer />
          <Button bgColor="brand.700" size="lg" isFullWidth>
            Continue
          </Button>
        </VStack>
        <VStack
          bgColor="brand.500"
          align="flex-start"
          boxShadow="base"
          color="white"
          rounded={4}
          spacing={4}
          py={8}
          px={8}
        >
          <Icon as={BiInfoCircle} fontSize="36px" />
          <Text
            fontSize="2xl"
            fontWeight={800}
            lineHeight={1.2}
            maxWidth="300px"
          >
            Make a request for information
          </Text>
          <Text fontWeight={600} maxWidth="300px">
            If you are unable to find what you need from our FAQ's, then please
            get in touch below.
          </Text>
          <Spacer />
          <Button bgColor="brand.700" size="lg" isFullWidth>
            Continue
          </Button>
        </VStack>
        <VStack
          bgColor="brand.500"
          align="flex-start"
          boxShadow="base"
          color="white"
          rounded={4}
          spacing={4}
          py={8}
          px={8}
        >
          <Icon as={BiCommentError} fontSize="36px" />
          <Text
            fontSize="2xl"
            fontWeight={800}
            lineHeight={1.2}
            maxWidth="300px"
          >
            Raise a complaint with our service desk
          </Text>
          <Text fontWeight={600} maxWidth="300px">
            If you are unhappy with our service, you can raise a complaint and
            our team will contact you.
          </Text>
          <Spacer />
          <Button bgColor="brand.700" size="lg" isFullWidth>
            Continue
          </Button>
        </VStack>
      </Flex>
      <Flex justify="space-between" mb={6} alignItems="center">
        <Text fontSize="xl" fontWeight={600}>
          Your Open Items
        </Text>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search incidents" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
      </Flex>
      <Table
        isLoading={isLoading}
        columns={columns}
        boxShadow="base"
        overflowY="auto"
        bgColor="white"
        data={data}
        isPaginated
        rounded={5}
        maxH="80vh"
        size="md"
      />
    </Page>
  )
}
