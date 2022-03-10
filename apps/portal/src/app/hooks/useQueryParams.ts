import qs from "query-string"
import { useEffect, useState } from "react";

const useQueryParams = (initialState: Record<string, any>) => {
  const [params, setParams] = useState(initialState);
  
  useEffect(() => {
    const search = qs.stringify(params)
    const url = decodeURIComponent(`${location.pathname}?${qs.stringify(params)}`)
    history.replaceState(null, "", url)
  }, [params])

  return [params, setParams]
}

export default useQueryParams