const redirect = (path: string, origin?: string) => {
  window.location.href = `${origin ?? window.location.origin}${path}`
  return null
}

export { redirect }
