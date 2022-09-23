import { useWizard, WizardContextState } from "./wizard.provider"
import { FC, ReactNode } from "react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Title } from "../../data-display/title"
import { StackProps, Divider, HStack, VStack, Box } from "@chakra-ui/layout"
import { ButtonGroup, Button } from "@chakra-ui/button"

type WizardState = Omit<WizardContextState, "Step">

export type WizardPanelOwnProps = {
  renderComplete?: (props: WizardState) => ReactNode
  renderHeader?: (props: WizardState) => ReactNode
  renderFooter?: (props: WizardState) => ReactNode
  renderErrors?: (props: WizardState) => ReactNode
}

export type WizardPanelProps = StackProps & WizardPanelOwnProps

const defaultHeader = (ws: WizardState) => (
  <Title
    strapline={`Step ${ws.stepNumber} of ${ws.stepCount}`}
    justify="start"
    align="start"
    spacing={{ base: 2, lg: 4 }}
    as="header"
    mb={{ base: 4, lg: 8 }}
  >
    {ws.title}
  </Title>
)

const defaultFooter = (ws: WizardState) => (
  <>
    <Divider />
    <HStack w="100%">
      <Box flexGrow={1}>
        {!ws.isFirstStep && (
          <Button
            onClick={ws.onCancel ?? ws.onReset}
            variant="ghost"
            size={ws.size}
          >
            Cancel
          </Button>
        )}
      </Box>
      <ButtonGroup spacing={{ base: 4, lg: 6 }}>
        {!ws.isFirstStep && (
          <Button
            leftIcon={<ArrowBackIcon />}
            px={{ base: 4, lg: 10 }}
            onClick={ws.onBack}
            variant="outline"
            size={ws.size}
          >
            Back
          </Button>
        )}
        <Button
          rightIcon={<ArrowForwardIcon />}
          px={{ base: 4, lg: 10 }}
          onClick={ws.onNext}
          colorScheme="primary"
          variant="primary"
          size={ws.size}
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
  const { Step, ...rest } = useWizard()
  return (
    <VStack {...props} align="start">
      {rest.title && renderHeader(rest)}
      <Box flexGrow={1} width="100%" px="1px" mx="-1px" overflowY="auto">
        <Step />
      </Box>
      {!rest.isCompleted && renderFooter(rest)}
    </VStack>
  )
}

WizardPanel.defaultProps = {
  spacing: { base: 6, lg: 8 },
}

export default WizardPanel
