import { orderSchema, orderMetaSchema } from "../entities"
import { useQuery } from "react-query"
import map from "ramda/es/map"
import { api } from "../api"

const options = {
  keepPreviousData: true,
  staleTime: Infinity,
}

export const useOrders = (params: any = {}) => {
  return useQuery(
    ["orders", params],
    async (context) => {
      const [, params] = context.queryKey
      const res = await api.get("/orders", { params })

      return {
        totals: orderMetaSchema.parse(res.data.meta),
        items: map(orderSchema.parse, res.data.data),
      }
    },
    options
  )
}
