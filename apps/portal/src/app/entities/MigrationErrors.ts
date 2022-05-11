export type MigrationErrorInput = {}

export type MigrationError = {
  id: number
  topic_name: string
  json_body: string
  error_exception: string
  error_timestamp: string
  is_checked: boolean
  is_resolved: boolean
}

export type MigrationErrorResponse = {
  data: MigrationError[]
  from: number
  last_page: number
  per_page: number
  to: number
  total: number
  current_page: number
}
