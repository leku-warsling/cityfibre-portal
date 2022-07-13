import {
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react"
import { BiBell, BiInfoCircle, BiLockAlt, BiUser } from "react-icons/bi"
import { Page } from "@ui"
import { ProfileForm } from "./forms/profile.form"
import { ChangePasswordForm } from "./forms/change-password.form"

export const AccountSettingsPage = () => {
  return (
    <Page>
      <Page.Header pb={4} mb={8}>
        Account Settings
      </Page.Header>
      <Tabs
        orientation="vertical"
        variant="solid-rounded"
        colorScheme="brand"
        width="100%"
      >
        <TabList minWidth="320px">
          <Tab rounded={4} justifyContent="flex-start">
            <Icon as={BiUser} mr={2} /> Profile
          </Tab>
          <Tab rounded={4} justifyContent="flex-start">
            <Icon as={BiLockAlt} mr={2} /> Change Password
          </Tab>
          <Tab rounded={4} justifyContent="flex-start">
            <Icon as={BiInfoCircle} mr={2} />
            Information
          </Tab>
          <Tab rounded={4} justifyContent="flex-start">
            <Icon as={BiBell} mr={2} />
            Notifications
          </Tab>
        </TabList>

        <TabPanels borderRadius={4} boxShadow="base" bgColor="white" ml={8}>
          <TabPanel px={14} pt={14} pb={8}>
            <ProfileForm onSubmit={console.log} />
          </TabPanel>
          <TabPanel px={14} pt={14} pb={8}>
            <ChangePasswordForm onSubmit={console.log} />
          </TabPanel>
          <TabPanel px={14} pt={14} pb={8}>
            <p>Todo</p>
          </TabPanel>
          <TabPanel px={14} pt={14} pb={8}>
            <Text fontSize="lg" fontWeight={600} mb={6}>
              Activity
            </Text>
            <VStack spacing={4} mb={6}>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
            </VStack>
            <Text fontSize="lg" fontWeight={600} mb={6}>
              Application
            </Text>
            <VStack spacing={4} mb={6}>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel>Enable email alerts?</FormLabel>
                <Switch />
              </FormControl>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Page>
  )
}
