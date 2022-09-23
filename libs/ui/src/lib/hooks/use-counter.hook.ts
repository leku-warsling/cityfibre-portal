import dec from "ramda/es/dec"
import inc from "ramda/es/inc"
import { useState } from "react"

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
