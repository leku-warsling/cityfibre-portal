import { FieldValues, FormProvider, FormState, useForm } from "react-hook-form"
import { inc, map, mergeAll, mergeRight, pick, propOr } from "ramda"
import { useCounter } from "../../hooks/use-counter.hook"
import { yupResolver } from "@hookform/resolvers/yup"
import { StepProps } from "chakra-ui-steps"
import { isFunction, isPromise } from "ramda-adjunct"
import { flow } from "fp-ts/lib/function"
import {
  createContext,
  ComponentType,
  useContext,
  ReactNode,
  useState,
  useMemo,
  FC,
} from "react"

export type WizardPage = {
  defaultValues?: Record<string, unknown>
  Page: () => JSX.Element
  isCompleted?: boolean
  isFinalStep?: boolean
  description?: string
  icon?: ComponentType
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
  onCancel?: () => void
  initialStep?: number
  redirectTo?: string
  pages: WizardPage[]
  formData?: object
}

export type WizardContextState = {
  setStep: (step: number) => void
  state: FormState<FieldValues>
  Page: () => JSX.Element
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
  pageNumber: number
  pageCount: number
  title: string
}

const getStepProps = pick(["label", "description", "icon"])

const getDefaultValues = flow(
  map<WizardPage, object[]>(propOr({}, "defaultValues")),
  mergeAll
)

const WizardContext = createContext<WizardContextState>(null!)

export default WizardContext

const WizardProvider: FC<WizardContextProps> = ({
  initialStep = 0,
  formData = {},
  onComplete,
  children,
  onCancel,
  onStep,
  pages,
}) => {
  const steps = useMemo(() => pages.map(getStepProps), [pages])
  const { count, ...counter } = useCounter(initialStep)
  const pageNumber = inc(count)
  const isFirstStep = pageNumber === 1
  const isLastPage = pageNumber === pages.length
  const {
    isFinalStep = isLastPage,
    description,
    isCompleted,
    schema,
    Page,
    label,
  } = pages[count]
  // add isLoading
  const [payload, setPayload] = useState<object | null>(null)

  const form = useForm({
    defaultValues: mergeRight(getDefaultValues(pages), formData),
    resolver: schema ? yupResolver(schema) : undefined,
    mode: "onChange",
  })

  const onNext = form.handleSubmit((data) => {
    if (!isLastPage) counter.increment()
    if (!isFinalStep) {
      isFunction(onStep) && onStep(data)
      return
    }
    const res = isFunction(onComplete) && onComplete(data)
    if (isPromise(res)) res.then(setPayload)
  })

  const onBack = () => counter.decrement()

  const setStep = (n: number) => {
    form.handleSubmit((values) => {
      counter.setCount(n)
    })
  }

  const onReset = () => {
    counter.reset()
    form.reset()
  }

  const context = {
    pageCount: pages.length,
    state: form.formState,
    activeIndex: count,
    title: label,
    isCompleted,
    description,
    isFirstStep,
    isFinalStep,
    pageNumber,
    onCancel,
    onReset,
    setStep,
    onBack,
    onNext,
    payload,
    steps,
    Page,
  }

  return (
    <WizardContext.Provider value={context}>
      <FormProvider {...form}>{children}</FormProvider>
    </WizardContext.Provider>
  )
}

const useWizard = () => useContext(WizardContext)

export { useWizard, WizardProvider }
