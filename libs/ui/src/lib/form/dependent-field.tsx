import { useFormContext } from "react-hook-form"
import { ReactElement } from "react"
import { isFunction } from "ramda-adjunct"

export type DependentFieldProps = {
  match: Record<string | number, (value: any) => JSX.Element>
  fallback?: null | ReactElement
  fieldName: string
}

export const DependentField = ({
  fieldName,
  fallback = null,
  match,
}: DependentFieldProps): JSX.Element | null => {
  const { watch } = useFormContext()
  const value = watch(fieldName)
  const render = match?.[value]
  return isFunction(render) ? render(value) : fallback
}
