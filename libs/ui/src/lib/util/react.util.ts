import { LegacyRef, MutableRefObject, RefCallback } from "react"
import is from "ramda/es/is"
import { isNotNilOrEmpty } from "ramda-adjunct"

function mergeRefs<T = any>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T>>
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (is(Function, ref)) return ref(value)
      if (isNotNilOrEmpty(ref)) {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    })
  }
}

export { mergeRefs }
