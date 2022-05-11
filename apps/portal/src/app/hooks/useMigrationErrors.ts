import { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { migration } from "../api"
import {
  MigrationErrorInput,
  MigrationError,
  MigrationErrorResponse,
} from "../entities/MigrationErrors"

const useMigrationErrors = <
  TSelect extends (data: AxiosResponse<MigrationErrorResponse>) => any
>(
  params: MigrationErrorInput,
  select: TSelect
) => {
  return useQuery<
    AxiosResponse<MigrationErrorResponse>,
    Error,
    ReturnType<TSelect>
  >({
    queryKey: ["migrations", params],
    queryFn: migration.fetchAll,
    keepPreviousData: true,
    staleTime: Infinity,
    select,
  })
}

export default useMigrationErrors
