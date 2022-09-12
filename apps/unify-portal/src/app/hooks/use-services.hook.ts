import { serviceSchema, serviceTotalsSchema } from "../entities"
import { useQuery } from "react-query"
import { map } from "ramda"
import { api } from "../api"

const options = {
  keepPreviousData: true,
  staleTime: Infinity,
}

export const useServices = (params: any = {}) => {
  return useQuery(
    ["services", params],
    async (context) => {
      const [, params] = context.queryKey
      const res = await api.get("/services", { params })
      const { data, meta } = res.data
      const totals = serviceTotalsSchema.parse(meta.totals)

      return {
        totals,
        items: map(serviceSchema.parse, data),
      }
    },
    options
  )
}
