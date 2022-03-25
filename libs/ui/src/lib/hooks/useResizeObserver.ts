import { is } from "ramda";
import { RefObject, useState, useCallback, useLayoutEffect } from "react"

export type ResizeObserverEntry = {
  target: HTMLElement
  contentRect: DOMRectReadOnly
}

const useObserver = (
  ref: RefObject<HTMLElement>,
  callback?: (entry: DOMRectReadOnly) => void
) => {
  const [contentRect, setContentRect] = useState<DOMRectReadOnly>(null!)
  
  const resizeHandler = useCallback(
    (entries: globalThis.ResizeObserverEntry[]) => {
      if (!is(Array, entries)) return;
      
      setContentRect(entries[0].contentRect)

      if (callback) callback(entries[0].contentRect)
    },
    [callback]
  )

  useLayoutEffect(() => {
    if (!ref.current) return

    let observer = new ResizeObserver(resizeHandler)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      observer = null!
    }
  }, [ref]);

  return contentRect
};

export default useObserver