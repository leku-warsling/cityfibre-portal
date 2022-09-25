import pathEq from "ramda/es/pathEq"
import valueType from "ramda/es/type"
import store from "store"
import { redirect } from "./url.util"

export type ResponseType<D> = Response & {
  data: D | null
}

export type CreateClient = {
  responseHandler?: <T = any>(response: Response) => Promise<ResponseType<T>>
  requestHandler?: (config: Request) => Request
  errorHandler?: (err: ResponseError) => any
  baseURL: string
  timeout?: number
  headers?: HeadersInit
}

type RequestOpts = RequestInit & {
  params?: Record<string, any>
}

class ResponseError extends Error {
  response: Response

  constructor(msg: string, res: Response) {
    super(msg)
    this.name = "ResponseError"
    this.response = res
  }
}

const isUnauthorized = pathEq(["response", "status"], 401)

const defaulResponseTypeHandler = async <D = any>(
  res: Response
): Promise<ResponseType<D>> => {
  const isJSON = res.headers.get("Content-Type")?.includes("application/json")
  const data = isJSON ? await res.clone().json() : null

  if (!res.ok) {
    const msg = await res.text()
    return Promise.reject(new ResponseError(msg, res))
  }

  return {
    ...res,
    data,
  }
}

const defaultRequestHandler = (req: Request): Request => {
  const token = store.get("access_token")

  if (token) {
    req.headers.set("Authorization", "Bearer " + token)
  }

  return req
}

const defaultErrorHandler = async (err: ResponseError) => {
  if (err.response) {
    console.error(`
      message: ${err.message}
      status: ${err.response.status}
      url: ${err.response.url}
    `)
  }

  if (isUnauthorized(err)) {
    return redirect("/auth")
  }

  return Promise.reject(err)
}

export const createClient = ({
  responseHandler = defaulResponseTypeHandler,
  requestHandler = defaultRequestHandler,
  errorHandler = defaultErrorHandler,
  timeout = 3000,
  baseURL = "",
  headers = {},
}: CreateClient) => {
  const request = <R = any>(
    endpoint: string,
    opts: RequestOpts = {}
  ): Promise<ResponseType<R>> => {
    const { params = {}, ...options } = opts

    const controller = new AbortController()
    options.signal = controller.signal

    const url = new URL(`${baseURL}${endpoint}`)

    for (const key in params) {
      url.searchParams.append(key, params[key])
    }

    if (options.body && valueType(options.body) === "Object") {
      options.body = JSON.stringify(options.body)
    }

    options.headers = {
      ...headers,
      ...options.headers,
    }

    const req = requestHandler(new Request(url, options))

    const promise = fetch(req)
    setTimeout(() => controller.abort(), timeout)
    return promise.then(responseHandler).catch(errorHandler)
  }

  return {
    get: <R = any>(endpoint: string, config: RequestOpts) => {
      return request<R>(endpoint, config)
    },
    post: <R = any>(endpoint: string, body?: any, opts?: RequestOpts) => {
      return request<R>(endpoint, {
        ...opts,
        method: "POST",
        body,
      })
    },
    put: <R = any>(endpoint: string, body?: any, opts?: RequestOpts) => {
      return request<R>(endpoint, {
        ...opts,
        method: "PUT",
        body,
      })
    },
    patch: <R = any>(endpoint: string, body?: any, opts?: RequestOpts) => {
      return request<R>(endpoint, {
        ...opts,
        method: "PATCH",
        body,
      })
    },
    delete: <R = any>(endpoint: string, body?: any, opts?: RequestOpts) => {
      return request<R>(endpoint, {
        ...opts,
        method: "DELETE",
        body,
      })
    },
  }
}
