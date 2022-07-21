import axios, { AxiosError, AxiosRequestConfig } from "axios"
import identity from "ramda/es/identity"
import pathEq from "ramda/es/pathEq"
import set from "lodash-es/set"
import { util } from "@ui"
import store from "store"

const { NX_API_URI, NX_BASE_REQUEST_TIMEOUT = 15000 } = process.env

export const api = axios.create({
  timeout: Number(NX_BASE_REQUEST_TIMEOUT),
  baseURL: NX_API_URI,
})

const setAuth = (req: AxiosRequestConfig, token: string) => {
  return set(req, "headers.Authorization", `Bearer ${token}`)
}

const isUnauthorized = pathEq(["response", "status"], 401)

const requestHandler = async (config: AxiosRequestConfig) => {
  const token = store.get("access_token")
  return token ? setAuth(config, token) : config
}

const errorResponseHandler = (err: AxiosError) => {
  if (err.response) {
    console.error(`
      message: ${err.response.data.message}
      status: ${err.response.status}
      method: ${err.config.method}
      url: ${err.config.url}
    `)
  }

  if (isUnauthorized(err)) {
    return util.url.redirect("/auth")
  }

  return Promise.reject(err)
}

api.interceptors.request.use(requestHandler)
api.interceptors.response.use(identity, errorResponseHandler)

export type AuthCredentials = {
  username: string
  password: string
}

export const auth = (data: AuthCredentials) => api.post("/auth/login", data)
