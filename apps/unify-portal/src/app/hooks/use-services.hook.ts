import { serviceSchema, serviceMetaSchema } from "../entities"
import { useQuery } from "react-query"
import map from "ramda/es/map"
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
      return {
        totals: serviceMetaSchema.parse(res.data.meta),
        items: map(serviceSchema.parse, res.data.data),
      }
    },
    options
  )
}
