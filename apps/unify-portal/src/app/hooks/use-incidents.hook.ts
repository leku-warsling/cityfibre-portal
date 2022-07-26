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
      const { records, closed, resolved, results } = totalsSchema.parse({
        results: res.headers["x-total-count"],
        ...meta.totals,
      })

      return {
        totals: {
          pages: Math.ceil(results / params._limit),
          open: records - (closed + resolved),
          resolved,
          results,
          records,
          closed,
        },
        items: map(incidentSchema.parse, data),
      }
    },
    options
  )
}
