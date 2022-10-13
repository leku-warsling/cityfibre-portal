import { FTTPIcon, EthernetIcon } from "../../../../assets"
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { TabPanels, TabPanel, TabList, Tab, Tabs } from "@chakra-ui/tabs"
import {
  HStack,
  Text,
  Divider,
  Box,
  WrapItem,
  Wrap,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/layout"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion"
import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Card, CardBody } from "../../../components/card"

const DataTag: FC<{ label: string }> = ({ label, children }) => (
  <Box>
    <Text
      textTransform="uppercase"
      letterSpacing="wider"
      fontWeight={600}
      color="gray.600"
      fontSize="10px"
    >
      {label}
    </Text>
    <Text fontWeight={600}>{children}</Text>
  </Box>
)

const OrderProducts = () => {
  return (
    <Box>
      <Button variant="link" as={Link} to="/orders/products" size="sm" mb={6}>
        View all products
      </Button>
      <VStack width="100%" spacing={6}>
        <Card flex={1}>
          <CardBody gap={4} align="center">
            <FTTPIcon fontSize="80px" color="primary.500" />
            <Text fontSize="lg" fontWeight={700}>
              FTTP Services
            </Text>
            <UnorderedList fontSize="sm" listStylePos="inside">
              <ListItem>1000Mb/s symmetric bandwidth</ListItem>
              <ListItem>Unlimited</ListItem>
              <ListItem>Able to support multiple line profiles</ListItem>
            </UnorderedList>
            <Button rightIcon={<ArrowForwardIcon />} w="full">
              Check Availability
            </Button>
          </CardBody>
        </Card>
        <Card flex={1}>
          <CardBody gap={4} align="center">
            <EthernetIcon fontSize="48px" color="primary.500" mt={3} />
            <Text fontSize="lg" fontWeight={700}>
              Ethernet Services
            </Text>
            <UnorderedList fontSize="sm" listStylePos="inside">
              <ListItem>1000Mb/s symmetric bandwidth</ListItem>
              <ListItem>Unlimited</ListItem>
              <ListItem>Able to support multiple line profiles</ListItem>
            </UnorderedList>
            <Button rightIcon={<ArrowForwardIcon />} w="full">
              Check Availability
            </Button>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  )
}

const LatestIssues = () => {
  return (
    <Box>
      <HStack justify="space-between" width="100%" mb={4}>
        <Button variant="link" as={Link} to="/incidents" size="sm">
          View all issues
        </Button>
        <Button size="sm" variant="link" as={Link} to="/incidents/create">
          Raise an Incident{" "}
          <Box
            bgColor="primary.500"
            textAlign="center"
            rounded="full"
            color="white"
            width="22px"
            height="22px"
            ml={1}
          >
            <Icon as={AddIcon} fontSize="10px" />
          </Box>
        </Button>
      </HStack>
      <HStack
        divider={<Divider orientation="vertical" height="30px" />}
        justifyContent="center"
        boxShadow="base"
        bgColor="white"
        spacing={3}
        width="100%"
        rounded={4}
        mb={12}
        p={4}
      >
        <Box>
          <Text fontWeight={800}>169</Text>
          <Text fontSize="xs" color="gray.600">
            Total Incidents
          </Text>
        </Box>
        <Box>
          <Text fontWeight={800}>58</Text>
          <Text fontSize="xs" color="gray.600">
            Total Services
          </Text>
        </Box>
        <Box>
          <Text fontWeight={800}>32</Text>
          <Text fontSize="xs" color="gray.600">
            Ongoing Incidents
          </Text>
        </Box>
      </HStack>
      <Accordion bgColor="white" rounded={4} boxShadow="base">
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  INC0091712
                </Button>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Service Reference">S1234567</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Raised">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Last Updated">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Raised By">
                  isabelle.mccabe@cityfibre.com
                </DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

const Invoices = () => {
  return (
    <Box>
      <Button variant="link" as={Link} to="/invoices" size="sm" mb={4}>
        View all invoices
      </Button>
      <Box
        textAlign="center"
        boxShadow="base"
        bgColor="white"
        width="100%"
        rounded={4}
        mb={12}
        p={4}
      >
        <Text fontWeight={800}>£3,634,217.33</Text>
        <Text fontSize="xs" color="gray.600">
          Customer Balance
        </Text>
      </Box>
      <Accordion bgColor="white" rounded={4} boxShadow="base">
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box
                flex={1}
                textAlign="left"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="link" as={Link} to="/invoices/EIL0026014">
                  EIL0026014
                </Button>
                <Text fontSize="sm" fontWeight={600}>
                  £400.00
                </Text>
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Date">24/04/2022</DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Date Due">24/04/2022</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

const DashboardTouch = () => {
  return (
    <Tabs size="sm" py={6}>
      <TabList px={2}>
        <Tab fontWeight={600} px={3}>
          Lastest Issues
        </Tab>
        <Tab fontWeight={600} px={3}>
          Order Products
        </Tab>
        <Tab fontWeight={600} px={3}>
          Invoices
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel px={2} pt={8}>
          <LatestIssues />
        </TabPanel>
        <TabPanel px={2} pt={6}>
          <OrderProducts />
        </TabPanel>
        <TabPanel px={2} pt={8}>
          <Invoices />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default DashboardTouch
