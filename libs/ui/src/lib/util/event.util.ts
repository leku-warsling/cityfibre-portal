import curry from "ramda/es/curry"

type Element =
  | HTMLElement
  | HTMLInputElement
  | HTMLButtonElement
  | HTMLAnchorElement

const triggerEvent = curry((eventName: string, el: Element) => {
  const event = new Event(eventName, { bubbles: true })
  el.dispatchEvent(event)
})

export { triggerEvent }
