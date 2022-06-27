import { useState } from "react"
import { dec, inc } from "ramda"

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(inc)
  const decrement = () => setCount(dec)
  const reset = () => setCount(initialValue)

  return {
    increment,
    decrement,
    setCount,
    count,
    reset,
  }
}
