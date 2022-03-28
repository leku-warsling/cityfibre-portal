export type ResourceType = {
  id: number
  supplier_id: number
  name: string
  cost: number
  isp_agnostic_trigger: number
}

export type ResourceSlot = {
  id: number
  resource_type_id: number
  from_date: Date
  start_at: number
  end_at: number
  quantity: number
  is_consumable: boolean
  isp_id: number
}