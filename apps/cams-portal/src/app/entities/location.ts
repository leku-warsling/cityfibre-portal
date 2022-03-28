export type Region = {
  id: number
  name: string
}

export type City = {
  id: number
  name: string
  code: string
  region_id: number
}