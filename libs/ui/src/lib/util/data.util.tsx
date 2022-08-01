import { random } from "lodash-es"

export const randomChar = () => {
  const chars = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

export const createSequence = (s: string) => {
  return s.split("").reduce((str, char) => {
    switch (char) {
      case "#":
        return str + random(9)
      case "?":
        return str + randomChar()
      default:
        return str + char
    }
  }, "")
}
