import { flow } from "fp-ts/lib/function"
import { debounce } from "lodash-es"
import { dissoc, mergeLeft, when } from "ramda"
import { renameKeys } from "ramda-adjunct"
import { ChangeEvent, useMemo, useState } from "react"

export type UseQueryParamsProps = {
  _page: number
  _limit: number
  _sort?: string
  _order?: "asc" | "desc"
  q?: string
}

const has =
  (k: string) =>
  <T extends object>(obj: T) =>
    k in obj

export const useQueryParams = <T extends UseQueryParamsProps>(
  props: T,
  parse: (data: unknown) => T
) => {
  const [params, setParams] = useState<T>(props)

  const removeParam = (key: string) => {
    setParams(flow(when(has(key), dissoc(key)), parse))
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
      flow(
        when(has(currentField), renameKeys({ [currentField]: newField })),
        parse
      )
    )
  }

  const mergeParams = (props: Partial<T>) =>
    setParams(flow(mergeLeft(props), parse))

  return {
    searchHandler,
    mergeParams,
    renameParam,
    removeParam,
    setParam,
    params,
  }
}
