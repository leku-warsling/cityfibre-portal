import loadable from "@loadable/component"

import { OrderEthernetPage } from "./ethernet"
import { OrderFTTPPage } from "./fttp"
import { OrderPage } from "./order.page"

const ProductsPage = loadable(() => import("./products.page"))
const OrdersPage = loadable(() => import("./orders.page"))

const routes = [
  {
    path: "orders",
    children: [
      { index: true, element: <OrdersPage /> },
      { path: "ethernet", element: <OrderEthernetPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "fttp", element: <OrderFTTPPage /> },
      { path: ":id", element: <OrderPage /> },
    ],
  },
]

export default routes
