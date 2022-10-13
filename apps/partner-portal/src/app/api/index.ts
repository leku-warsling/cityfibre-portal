import { http } from "@ui/lib/util"

const { NX_API_URI, NX_BASE_REQUEST_TIMEOUT = 15000 } = process.env

export const api = http.createClient({
  timeout: Number(NX_BASE_REQUEST_TIMEOUT),
  baseURL: String(NX_API_URI),
  headers: {
    "Content-Type": "application/json",
  },
})

export type AuthCredentials = {
  username: string
  password: string
}

export const auth = (data: AuthCredentials) => api.post("/auth/login", data)
