import { map } from "ramda"
import { useQuery } from "react-query"
import { api } from "../api"
import { incidentSchema, incidentMetaSchema } from "../entities"

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
      const totals = incidentMetaSchema.parse(res.data.meta)

      return {
        totals: {
          open: totals.records - (totals.closed + totals.resolved),
          ...totals,
        },
        items: map(incidentSchema.parse, res.data.data),
      }
    },
    options
  )
}
