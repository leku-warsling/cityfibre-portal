import loadable from "@loadable/component"

export const NotAuthorizedPage = loadable(() => import("./not-authorized.page"))
export const NotFoundPage = loadable(() => import("./not-found.page"))
export const ServerErrorPage = loadable(() => import("./server-error.page"))
