import { userSchema, userMetaSchema } from "@partner-portal/entities"
import { useQuery } from "react-query"
import map from "ramda/es/map"
import { api } from "../api"

const options = {
  keepPreviousData: true,
  staleTime: Infinity,
}

export const useUsers = (params: any = {}) => {
  return useQuery(
    ["users", params],
    async (context) => {
      const [, params] = context.queryKey
      const res = await api.get("/users", { params })

      return {
        totals: userMetaSchema.parse(res.data.meta),
        items: map(userSchema.parse, res.data.data),
      }
    },
    options
  )
}
