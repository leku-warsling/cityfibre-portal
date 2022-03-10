export type MigrationErrorInput = {

}

export type MigrationError = {
  id: number
  topic_name: string,
  json_body: string,
  error_exception: string
  error_timestamp: string
  is_checked: boolean
  is_resolved: boolean 
}