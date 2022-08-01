import { AddIcon } from "@chakra-ui/icons"
import {
  Button,
  HStack,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Icon,
  WrapItem,
  Wrap,
  Avatar,
  Spacer,
  Badge,
  Select,
  Heading,
} from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"
import { USER_ROLES } from "../data"

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

const UsersTouchPage = () => {
  return (
    <Box py={6} px={2}>
      <Heading fontSize="lg" mb={4}>
        Users
      </Heading>
      <HStack justify="space-between" width="100%" mb={4}>
        <Button variant="link" as={Link} to="/roles" size="sm">
          User Roles
        </Button>
        <Button size="sm" variant="link" as={Link} to="/incidents/create">
          Add User{" "}
          <Box
            bgColor="brand.500"
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
        spacing={6}
        width="100%"
        rounded={4}
        mb={6}
        p={4}
      >
        <Box flex={1}>
          <Text fontWeight={800}>169</Text>
          <Text fontSize="xs" color="gray.600">
            Total Users
          </Text>
        </Box>
        <Box flex={1}>
          <Text fontWeight={800}>58</Text>
          <Text fontSize="xs" color="gray.600">
            Require Activation
          </Text>
        </Box>
      </HStack>
      <Select mb={6}>
        <option value="">All Users</option>
        {USER_ROLES.map((role) => (
          <option value={role}>{role}</option>
        ))}
      </Select>
      <Accordion bgColor="white" rounded={4} boxShadow="base">
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Box flex={1} textAlign="left" display="flex" alignItems="center">
                <Avatar name="Luke Rawlings" size="xs" mr={2} />
                <Button variant="link" as={Link} to="/incidents/INC0091712">
                  Luke Rawlings
                </Button>
                <Spacer />
                <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={4}>
            <Wrap spacing={4}>
              <WrapItem>
                <DataTag label="Roles">
                  <Badge>Admin</Badge>
                </DataTag>
              </WrapItem>
              <WrapItem>
                <DataTag label="Email">isabelle.mccabe@cityfibre.com</DataTag>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default UsersTouchPage
