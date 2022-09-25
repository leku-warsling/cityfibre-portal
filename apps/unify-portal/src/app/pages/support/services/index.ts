import loadable from "@loadable/component"

export const ServicesPage = loadable(() => import("./services.page"))
export const ServicePage = loadable(() => import("./service.page"))

// export * from "./service-alt.page"
