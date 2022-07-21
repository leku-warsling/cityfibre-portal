import { map } from "ramda"
import { useQuery } from "react-query"
import { api } from "../api"
import { incidentSchema } from "../entities"

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
      console.log("headers:", res.headers)
      return {
        total: Number(res.headers["x-total-count"]),
        items: map(incidentSchema.parse, res.data),
      }
    },
    options
  )
}
