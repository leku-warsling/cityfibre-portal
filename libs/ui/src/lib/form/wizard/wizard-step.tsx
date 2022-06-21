import { FC } from "react"
import Form, { FormProps } from "../form"
import { FieldValues } from "react-hook-form"
import { Step, StepProps } from "chakra-ui-steps"

export type WizardStepProps = StepProps & FormProps<FieldValues>

const WizardStep: FC<WizardStepProps> = ({
  label,
  icon,
  isCompletedStep,
  description,
  children,
  ...props
}) => (
  <Step
    label={label}
    description={description}
    isCompletedStep={isCompletedStep}
    icon={icon}
  >
    <Form {...props}>{children}</Form>
  </Step>
)

export default WizardStep
