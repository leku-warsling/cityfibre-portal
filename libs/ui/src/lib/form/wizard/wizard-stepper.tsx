import { Steps, StepsProps, Step } from "chakra-ui-steps"
import { useWizard } from "./wizard.provider"
import { Box, BoxProps } from "@chakra-ui/react"
import { FC } from "react"

export type WizardStepperProps = BoxProps &
  Omit<StepsProps, "activeStep" | "onClickStep" | "isCompleted">

const WizardStepper: FC<WizardStepperProps> = ({
  labelOrientation,
  orientation,
  colorScheme,
  responsive,
  checkIcon,
  size,
  ...props
}) => {
  const { steps, activeIndex, isCompleted } = useWizard()

  return (
    <Box {...props}>
      <Steps
        labelOrientation={labelOrientation}
        orientation={orientation}
        colorScheme={colorScheme}
        activeStep={activeIndex}
        responsive={responsive}
        checkIcon={checkIcon}
        size={size}
      >
        {steps.map((stepProps, index) => (
          <Step
            {...stepProps}
            key={`${stepProps.label}-${index}`}
            isCompletedStep={isCompleted}
          />
        ))}
      </Steps>
    </Box>
  )
}

export default WizardStepper
