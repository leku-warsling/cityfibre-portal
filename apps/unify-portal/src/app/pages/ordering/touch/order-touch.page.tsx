import { Link } from "react-router-dom"
import {
  Button,
  HStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Heading,
  SimpleGrid,
  ButtonGroup,
} from "@chakra-ui/react"

const OrderTouchPage = () => {
  return (
    <Box py={6} px={2}>
      <HStack justify="space-between" width="100%" mb={4}>
        <Heading fontSize="lg">Order ID: S751922</Heading>
        <Button size="sm" as={Link} to="/services">
          My Services
        </Button>
      </HStack>
      <Accordion bgColor="white" rounded={4} boxShadow="base">
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Your Order
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Your Site
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Appointment
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Network
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                History
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Activities
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default OrderTouchPage
