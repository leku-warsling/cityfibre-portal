import curry from "ramda/es/curry"

const select = curry(<T extends HTMLElement>(q: string, el: T) => {
  return el.querySelector(q)
})

const selectAll = curry(<T extends HTMLElement>(q: string, el: T) => {
  return Array.from<T>(el.querySelectorAll(q))
})

export { select, selectAll }
