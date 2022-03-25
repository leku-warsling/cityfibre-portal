import { flow } from "fp-ts/lib/function"
import sortBy from "ramda/es/sortBy"
import prop from "ramda/es/prop"

const remToPx = (rem: string) => `${parseFloat(rem) * 16}px`
const withPixelRef = (rem: string) => `${rem} (${remToPx(rem)})`
const toKeyValueCollection = <T extends Record<string, any>>(obj: T) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }))
}

const sortByValue = sortBy(flow(prop<"value", string>("value"), parseFloat))

export {
  remToPx,
  withPixelRef,
  toKeyValueCollection,
  sortByValue,
}