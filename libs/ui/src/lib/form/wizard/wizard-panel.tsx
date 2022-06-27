import {
  StackProps,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  VStack,
  Box,
  Divider,
} from "@chakra-ui/react"
import { useWizard, WizardContextState } from "./wizard.provider"
import { FC, ReactNode } from "react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

type WizardState = Omit<WizardContextState, "Page">

export type WizardPanelOwnProps = {
  renderComplete?: (props: WizardState) => ReactNode
  renderHeader?: (props: WizardState) => ReactNode
  renderFooter?: (props: WizardState) => ReactNode
  renderErrors?: (props: WizardState) => ReactNode
}

export type WizardPanelProps = StackProps & WizardPanelOwnProps

const defaultHeader = (ws: WizardState) => (
  <VStack as="header" width="100%" align="start" justify="start" mb={8}>
    <Heading size="md" color="brand.500">
      Step {ws.pageNumber} of {ws.pageCount}
    </Heading>
    <Heading size="xl">{ws.title}</Heading>
  </VStack>
)

const defaultFooter = (ws: WizardState) => (
  <>
    <Divider />
    <HStack w="100%">
      <Box flexGrow={1}>
        {!ws.isFirstStep && (
          <Button variant="ghost" onClick={ws.onCancel ?? ws.onReset}>
            Cancel
          </Button>
        )}
      </Box>
      <ButtonGroup spacing={6}>
        {!ws.isFirstStep && (
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="outline"
            onClick={ws.onBack}
            px={10}
          >
            Back
          </Button>
        )}
        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={ws.onNext}
          variant="primary"
          px={10}
        >
          Next
        </Button>
      </ButtonGroup>
    </HStack>
  </>
)

const WizardPanel: FC<WizardPanelProps> = ({
  renderHeader = defaultHeader,
  renderFooter = defaultFooter,
  renderComplete,
  children,
  ...props
}) => {
  const { Page, ...rest } = useWizard()
  return (
    <VStack {...props}>
      {renderHeader(rest)}
      <Box flexGrow={1} width="100%">
        <Page />
      </Box>
      {!rest.isCompleted && renderFooter(rest)}
    </VStack>
  )
}

WizardPanel.defaultProps = {
  spacing: 6,
}

export default WizardPanel
