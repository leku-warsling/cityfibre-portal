import { date } from "@ui/lib/util"
import { z } from "zod"

const userSchema = z.object({
  email_verified_at: z.string(),
  created_at: z.string().transform(date.toDate),
  updated_at: z.string().transform(date.toDate),
  password: z.string(),
  avatar: z.string(),
  email: z.string(),
  name: z.string(),
  id: z.number(),
})

const commentSchema = z.object({
  updated_at: z.string().transform(date.toDate),
  created_at: z.string().transform(date.toDate),
  content: z.string(),
  author: userSchema,
  id: z.number(),
})

const addressSchema = z.object({
  postcode: z.string(),
  street: z.string(),
  county: z.string(),
  name: z.string(),
  city: z.string(),
})

export const incidentSchema = z.object({
  updated_at: z.string().transform(date.toDate),
  created_at: z.string().transform(date.toDate),
  comments: z.array(commentSchema),
  customer_reference: z.string(),
  service_reference: z.string(),
  description: z.string(),
  address: addressSchema,
  priority: z.string(),
  status: z.string(),
  email: z.string(),
  user: userSchema,
  ref: z.string(),
  id: z.number(),
})

export const incidentMetaSchema = z.object({
  in_progress: z.number(),
  submitted: z.number(),
  cancelled: z.number(),
  resolved: z.number(),
  records: z.number(),
  on_hold: z.number(),
  closed: z.number(),
  pages: z.number(),
  count: z.number(),
  new: z.number(),
})

export type Incident = z.infer<typeof incidentSchema>
