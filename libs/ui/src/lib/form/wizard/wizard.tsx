import { cloneElement, FC, ReactElement, ReactNode } from "react"
import { chakra } from "@chakra-ui/react"
import { Steps, useSteps } from "chakra-ui-steps"
import WizardStep, { WizardStepProps } from "./wizard-step"

export type WizardProps = {
  activeIndex?: number
  title: string
  onStep?: () => void
  onComplete?: (data: any) => void
  onCancel?: () => void
  redirectTo?: string
  cache?: boolean
  showNavigation?: boolean
  summary?: ReactNode
  formData?: Record<string, unknown>
  children: ReactElement<WizardStepProps>[]
}

export type WizardComponent = FC<WizardProps> & {
  Step: typeof WizardStep
}

const Wizard: WizardComponent = ({ children, ...props }) => {
  const { activeStep, nextStep } = useSteps({
    initialStep: 0,
  })

  // const controls = () => {}

  return (
    <chakra.div>
      <Steps activeStep={activeStep}>
        {children.map((child, i) =>
          cloneElement(child, {
            ...child.props,
            key: i,
          })
        )}
      </Steps>
    </chakra.div>
  )
}

Wizard.Step = WizardStep

export default Wizard
