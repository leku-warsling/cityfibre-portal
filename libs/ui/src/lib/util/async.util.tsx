export function later<T>(delay: number, value: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, delay, value))
}
