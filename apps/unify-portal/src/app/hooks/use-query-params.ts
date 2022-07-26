import { debounce } from "lodash-es"
import { dissoc, has, mergeLeft, when } from "ramda"
import { renameKeys } from "ramda-adjunct"
import { ChangeEvent, useMemo, useState } from "react"

export type UseQueryParamsProps = {
  _page: number
  _limit: number
  _sort?: string
  _order?: "asc" | "desc"
  q?: string
}

export const useQueryParams = <T extends UseQueryParamsProps>(props: T) => {
  const [params, setParams] = useState<T>(props)

  const removeParam = (key: keyof T) => {
    if (key in params) setParams(dissoc(key, params) as T)
  }

  const setParam = (key: string, value: any) =>
    setParams((props) => ({
      ...props,
      [key]: value,
    }))

  const searchHandler = useMemo(() => {
    return debounce((evt: ChangeEvent<HTMLInputElement>, field) => {
      const { value } = evt.target
      if (!value?.trim() || value.length < 3) {
        removeParam(field)
        return
      }
      setParam(field, value)
    }, 300)
  }, [])

  const renameParam = (newField: string, currentField: string) => {
    setParams(
      when<any, any>(
        has(currentField),
        renameKeys({ [currentField]: newField })
      )
    )
  }

  const mergeParams = (props: Partial<T>) =>
    setParams(mergeLeft(props, params) as T)

  return {
    searchHandler,
    mergeParams,
    renameParam,
    removeParam,
    setParam,
    params,
  }
}
