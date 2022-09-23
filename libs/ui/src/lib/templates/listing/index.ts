import loadable from "@loadable/component"

export const ListingDesktopTemplate = loadable(
  () => import("./listing-desktop.template")
)
export const ListingTouchTemplate = loadable(
  () => import("./listing-touch.template")
)
