import { useEffect, useRef, useState } from "react"
import { propEq } from "ramda"
import { isFunction } from "ramda-adjunct"

export type UncontrolledMode = "initial" | "controlled" | "uncontrolled"

export interface UncontrolledOptions<T> {
  value?: T | null
  defaultValue?: T | null
  finalValue: T | null
  onChange(value?: T | null): void
  onValueUpdate?(value?: T | null): void
  rule: (value?: T | null) => boolean
}

const isUncontrolled = propEq("current", "uncontrolled")
const isControlled = propEq("current", "controlled")

export function useUncontrolled<T>({
  onValueUpdate,
  defaultValue,
  finalValue,
  onChange,
  value,
  rule,
}: UncontrolledOptions<T>) {
  const shouldBeControlled = rule(value)
  const modeRef = useRef<UncontrolledMode>("initial")
  const initialValue = rule(defaultValue) ? defaultValue : finalValue
  const [uncontrolledValue, setUncontrolledValue] = useState(initialValue)
  let effectiveValue = shouldBeControlled ? value : uncontrolledValue

  if (!shouldBeControlled && isControlled(modeRef)) {
    effectiveValue = finalValue
  }

  modeRef.current = shouldBeControlled ? "controlled" : "uncontrolled"

  const handleChange = (nextValue: T | null) => {
    isFunction(onChange) && onChange(nextValue)
    isUncontrolled(modeRef) && setUncontrolledValue(nextValue)
  }

  useEffect(() => {
    isUncontrolled(modeRef) && setUncontrolledValue(effectiveValue)
    isFunction(onValueUpdate) && onValueUpdate(effectiveValue)
  }, [modeRef.current, effectiveValue])

  return [effectiveValue, handleChange, modeRef.current] as const
}
