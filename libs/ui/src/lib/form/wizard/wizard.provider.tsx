import { zodResolver } from "@hookform/resolvers/zod"
import { StepProps } from "chakra-ui-steps"
import { flow } from "fp-ts/lib/function"
import { isFunction, isPromise } from "ramda-adjunct"
import inc from "ramda/es/inc"
import map from "ramda/es/map"
import mergeAll from "ramda/es/mergeAll"
import mergeRight from "ramda/es/mergeRight"
import pick from "ramda/es/pick"
import propOr from "ramda/es/propOr"
import {
  ComponentType,
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
} from "react"
import { FieldValues, FormProvider, FormState, useForm } from "react-hook-form"
import { useCounter } from "../../hooks/use-counter.hook"

export type WizardStep = {
  defaultValues?: Record<string, unknown>
  Step: () => JSX.Element
  isCompleted?: boolean
  isFinalStep?: boolean
  description?: string
  icon?: ComponentType
  showTitle?: boolean
  label: string
  schema?: any
}

export type FormResponse = {
  errors?: object
  data?: object
  [key: string]: unknown
}

export type WizardContextProps = {
  onComplete?: (data: object) => void | Promise<FormResponse>
  onStep?: (data: object) => void | Promise<FormResponse>
  size?: "sm" | "md" | "lg"
  onCancel?: () => void
  initialStep?: number
  redirectTo?: string
  steps: WizardStep[]
  formData?: object
}

export type WizardContextState = {
  setStep: (step: number) => void
  state: FormState<FieldValues>
  size?: "sm" | "md" | "lg"
  Step: () => JSX.Element
  payload: object | null
  isCompleted?: boolean
  onCancel?: () => void
  isFirstStep: boolean
  isFinalStep: boolean
  description?: string
  onReset: () => void
  onBack?: () => void
  activeIndex: number
  onNext: () => void
  steps: StepProps[]
  stepNumber: number
  stepCount: number
  title?: string | null
}

const getStepProps = pick(["label", "description", "icon"])

const getDefaultValues = flow(
  map<WizardStep, object[]>(propOr({}, "defaultValues")),
  mergeAll
)

const WizardContext = createContext<WizardContextState>(null!)

export default WizardContext

const WizardProvider: FC<WizardContextProps> = ({
  initialStep = 0,
  formData = {},
  size = "md",
  onComplete,
  children,
  onCancel,
  onStep,
  ...props
}) => {
  const steps = useMemo(() => props.steps.map(getStepProps), [props.steps])
  const { count, ...counter } = useCounter(initialStep)
  const stepNumber = inc(count)
  const isFirstStep = stepNumber === 1
  const isLastStep = stepNumber === steps.length
  const {
    isFinalStep = isLastStep,
    showTitle = true,
    description,
    isCompleted,
    schema,
    Step,
    label,
  } = props.steps[count]
  // add isLoading
  const [payload, setPayload] = useState<object | null>(null)

  const form = useForm({
    defaultValues: mergeRight(getDefaultValues(props.steps), formData),
    resolver: schema ? zodResolver(schema) : undefined,
    reValidateMode: "onChange",
    shouldUnregister: true,
    mode: "onChange",
  })

  const onNext = form.handleSubmit(
    (data) => {
      console.log(data)
      if (!isLastStep) counter.increment()
      if (!isFinalStep) {
        isFunction(onStep) && onStep(data)
        return
      }

      const res = isFunction(onComplete) && onComplete(data)
      if (isPromise(res)) res.then(setPayload)
    },
    (errors) => {
      console.log(errors)
    }
  )

  const onBack = () => counter.decrement()

  const setStep = (n: number) => {
    form.handleSubmit((values) => {
      console.log(values)
      console.log(props.steps[count])
      counter.setCount(n)
    })
  }

  const onReset = () => {
    counter.reset()
    form.reset()
  }

  const context = {
    stepCount: steps.length,
    state: form.formState,
    activeIndex: count,
    title: showTitle ? label : null,
    isCompleted,
    description,
    isFirstStep,
    isFinalStep,
    stepNumber,
    onCancel,
    onReset,
    setStep,
    onBack,
    onNext,
    payload,
    steps,
    size,
    Step,
  }

  return (
    <WizardContext.Provider value={context}>
      <FormProvider {...form}>{children}</FormProvider>
    </WizardContext.Provider>
  )
}

const useWizard = () => useContext(WizardContext)

export { useWizard, WizardProvider }
