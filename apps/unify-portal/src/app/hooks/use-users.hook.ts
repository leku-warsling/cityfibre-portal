import { userSchema, userMetaSchema } from "@unify/entities"
import { useQuery } from "react-query"
import { api } from "../api"
import { map } from "ramda"

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
