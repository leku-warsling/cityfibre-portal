import { flow } from "fp-ts/lib/function"
import { isNaN, isNil } from "lodash-es"
import {
  anyPass,
  both,
  either,
  equals,
  filter,
  find,
  has,
  is,
  pathEq,
  test,
  toLower,
  where,
} from "ramda"
import { isFalsy, isNotNaN } from "ramda-adjunct"
import { useCallback, useEffect, useRef } from "react"
import { select, selectAll } from "../util/dom"

const isDevelopment = process.env["NODE_ENV"] === "development"
const TABBABLE_NODES = /input|select|textarea|button|object/
export const FOCUS_SELECTOR =
  "a, input, select, textarea, button, object, [tabindex]"

const getTabIndex = (element: HTMLElement) => {
  const tabIndex = element.getAttribute("tabindex")
  return isNil(tabIndex) ? NaN : parseInt(tabIndex, 10)
}

const isTabbableNode = where({
  nodeName: flow(toLower, test(TABBABLE_NODES)),
  disabled: isFalsy,
})

const isHidden = pathEq(["styles", "display"], "none")
const hasTabIndex = flow(getTabIndex, isNotNaN)
const isAnchor = both(is(HTMLAnchorElement), either(has("href"), hasTabIndex))

const isVisible = (element: HTMLElement) => {
  let node = element
  while (node) {
    if (node === document.body) break
    if (isHidden(node)) return false
    node = node.parentNode as HTMLElement
  }
  return true
}

const isFocusable = both(
  anyPass([isTabbableNode, isAnchor, hasTabIndex]),
  isVisible
)

const isTabbable = (element: HTMLElement) => {
  const tabIndex = getTabIndex(element)
  return isNaN(tabIndex) || (tabIndex >= 0 && isFocusable(element))
}

const findTabbable = find(isTabbable)
const findFocusable = find(isFocusable)
const selectAllFocusable = selectAll(FOCUS_SELECTOR)

const getFocusElement = (node: HTMLElement) => {
  let focusElement = select("[data-autofocus]", node)

  if (!focusElement) {
    const children = selectAllFocusable(node)
    focusElement = findTabbable(children) || findFocusable(children) || null
  }

  if (!focusElement && isFocusable(node)) focusElement = node

  return focusElement
}

const getTabbableDescendants = flow(selectAllFocusable, filter(isTabbable))
const isActiveElement = equals(document.activeElement)

const scopeTab = (node: HTMLElement, event: KeyboardEvent) => {
  const tabbable = getTabbableDescendants(node)
  if (!tabbable.length) {
    event.preventDefault()
    return
  }
  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1]
  const isLeavingFinalNode =
    isActiveElement(finalTabbable) || isActiveElement(node)

  if (!isLeavingFinalNode) return

  event.preventDefault()

  const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0]

  if (target) target.focus()
}

const processNode = (node: HTMLElement) => {
  let focusElement = getFocusElement(node)

  if (focusElement) {
    focusElement.focus()
  } else if (isDevelopment) {
    // eslint-disable-next-line no-console
    console.warn("Failed to find focusable element within provided node", node)
  }
}

const useFocusTrap = (isActive = true) => {
  const ref = useRef<HTMLElement | null>()

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!isActive) return

      if (!node) {
        ref.current = null
        return
      }

      // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
      setTimeout(() => {
        if (node.ownerDocument) {
          processNode(node)
        } else if (isDevelopment) {
          // eslint-disable-next-line no-console
          console.warn("Ref node is not part of the dom", node)
        }
      })

      ref.current = node
    },
    [isActive]
  )

  useEffect(() => {
    if (!isActive) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive])

  return setRef
}

export default useFocusTrap
