import { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { migration } from "../api"
import { MigrationErrorInput, MigrationError } from "../entities/MigrationErrors"

const useMigrationErrors = <TSelect extends (data: AxiosResponse<MigrationError[]>) => any>(
  params: MigrationErrorInput, 
  select: TSelect
) => {
  return useQuery<AxiosResponse<MigrationError[]>, Error, ReturnType<TSelect>>({
    queryKey: ["migrations", params], 
    queryFn: migration.fetchAll,
    keepPreviousData: true,
    staleTime: Infinity,
    select,
  })
}

export default useMigrationErrors
