import { map } from "ramda"
import { useQuery } from "react-query"
import { api } from "../api"
import { incidentSchema, totalsSchema } from "../entities"

const options = {
  keepPreviousData: true,
  staleTime: Infinity,
}

export const useIncidents = (params: any = {}) => {
  return useQuery(
    ["incidents", params],
    async (context) => {
      const [, params] = context.queryKey
      const res = await api.get("/incidents", { params })
      const { data, meta } = res.data
      const totals = totalsSchema.parse(meta.totals)

      return {
        totals: {
          open: totals.records - (totals.closed + totals.resolved),
          ...totals,
        },
        items: map(incidentSchema.parse, data),
      }
    },
    options
  )
}
