import { date } from "@ui/lib/util"
import { z } from "zod"
import {
  addressSchema,
  appointmentSchema,
  customerSchema,
  productSchema,
} from "./util"

export const SERVICE_STATUSES = [
  "Cancellation Requested",
  "Progressing",
  "Completed",
  "In Delay",
  "Records",
  "Results",
  "Ceased",
  "Pages",
] as const

export const serviceSchema = z.object({
  updated_at: z.string().transform(date.toDate),
  created_at: z.string().transform(date.toDate),
  status: z.enum(SERVICE_STATUSES),
  appointment: appointmentSchema,
  customer_reference: z.string(),
  service_reference: z.string(),
  seller_reference: z.string(),
  customer: customerSchema,
  product: productSchema,
  site: addressSchema,
  id: z.number(),
  contract: z
    .object({
      start: z.string().transform(date.toDate),
      end: z.string().transform(date.toDate),
    })
    .optional(),
})

export const serviceMetaSchema = z.object({
  cancellation_requested: z.number(),
  progressing: z.number(),
  completed: z.number(),
  in_delay: z.number(),
  records: z.number(),
  ceased: z.number(),
  pages: z.number(),
  count: z.number(),
})

export type Service = z.infer<typeof serviceSchema>
