import { Heading, Text, VStack } from "@chakra-ui/layout"
import { Page } from "@ui/lib/layout"
import { useEffect, useState } from "react"
import { usePage } from "../../hooks/use-page.hook"
import { BankDetailsForm } from "./forms/bank-details.form"

const BankDetailsPage = () => {
  usePage({ title: "Billing" })
  const [, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <VStack
        align="flex-start"
        bgColor="white"
        boxShadow="base"
        spacing={3}
        rounded={4}
        px={12}
        py={9}
      >
        <Heading fontSize="2xl">Bank Details</Heading>
        <Text pb={12}>Your reference is 000001-1592472426.</Text>
        <BankDetailsForm onSubmit={console.log} />
      </VStack>
    </Page>
  )
}

export default BankDetailsPage
