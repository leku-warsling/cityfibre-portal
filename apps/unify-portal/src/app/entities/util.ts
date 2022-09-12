import { util } from "@ui"
import { z } from "zod"

export const addressSchema = z.object({
  building: z.string().optional().nullable(),
  postcode: z.string(),
  street: z.string(),
  uprn: z.number(),
  city: z.string(),
})

export const customerSchema = z.object({
  unify_customer_id: z.number(),
  floor: z.number().optional(),
  rack: z.string().optional(),
  room: z.number().optional(),
  unify_user_id: z.number(),
  address: addressSchema,
  name: z.string(),
})

export const appointmentSchema = z
  .object({
    status: z.enum(["Pending", "Confirmed"] as const),
    start: z.string().transform(util.date.toDate),
    end: z.string().transform(util.date.toDate),
    reservation_key: z.string(),
  })
  .optional()

export const productSchema = z.object({
  type: z.enum(["Ethernet", "FTTP"] as const),
  authentication_agent: z.string(),
  remote_agent_id: z.string(),
  term: z.number().optional(),
  customer_vlan: z.number(),
  line_profile: z.string(),
  service_vlan: z.number(),
  product_code: z.string(),
  description: z.string(),
  enni: z.string(),
  name: z.string(),
})
