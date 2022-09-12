import { orderSchema, orderTotalsSchema } from "../entities"
import { useQuery } from "react-query"
import { map } from "ramda"
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
      const { data, meta } = res.data
      const totals = orderTotalsSchema.parse(meta.totals)

      return {
        totals,
        items: map(orderSchema.parse, data),
      }
    },
    options
  )
}
