import loadable from "@loadable/component"

export const ProductsPage = loadable(() => import("./products.page"))
export const OrdersPage = loadable(() => import("./orders.page"))
export * from "./ethernet"
export * from "./fttp"
// export * from "./order-alt.page"
export * from "./order.page"
