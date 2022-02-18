const remToPx = (rem: string) => `${parseFloat(rem) * 16}px`
const withPixelRef = (rem: string) => `${rem} (${remToPx(rem)})`
const toKeyValueCollection = (obj: object) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }))
}

export {
  remToPx,
  withPixelRef,
  toKeyValueCollection,
}