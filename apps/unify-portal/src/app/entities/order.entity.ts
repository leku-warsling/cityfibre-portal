import { util } from "@ui"
import { z } from "zod"
import { appointmentSchema, customerSchema, productSchema } from "./util"

export const ORDER_STATUSES = [
  "Acknowledged",
  "Committed",
  "Cancelled",
  "Completed",
  "Pending",
  "Placed",
] as const

const siteSchema = z.object({
  telephone: z.string(),
  email: z.string().email(),
  name: z.string(),
})

const wayleaveSchema = z
  .object({
    telephone: z.string(),
    email: z.string().email(),
    name: z.string(),
  })
  .optional()

const siteInfoSchema = z
  .object({
    additional_information: z.string().optional().nullable(),
    access_retrictions: z.string().optional().nullable(),
    has_asbestos_register: z.boolean().default(false),
    has_landord_contact: z.boolean().default(false),
    induction_required: z.boolean().default(false),
    is_listed_building: z.boolean().default(false),
    has_route_approver: z.boolean().default(false),
    has_floor_plans: z.boolean().default(false),
    ppe_required: z.boolean().default(false),
    has_parking: z.boolean().default(false),
    hazards: z.string().optional().nullable(),
  })
  .optional()

export const orderSchema = z.object({
  updated_at: z.string().transform(util.date.toDate),
  created_at: z.string().transform(util.date.toDate),
  site_information: siteInfoSchema,
  appointment: appointmentSchema,
  status: z.enum(ORDER_STATUSES),
  service_reference: z.string(),
  seller_reference: z.string(),
  buyer_reference: z.string(),
  wayleave: wayleaveSchema,
  customer: customerSchema,
  service: productSchema,
  site: siteSchema,
  id: z.number(),
})

export const orderTotalsSchema = z.object({
  acknowledged: z.number(),
  committed: z.number(),
  cancelled: z.number(),
  completed: z.number(),
  records: z.number(),
  results: z.number(),
  pending: z.number(),
  placed: z.number(),
  pages: z.number(),
})

export type Order = z.infer<typeof orderSchema>
