import { util } from "@ui"
import { z } from "zod"

const userSchema = z.object({
  email_verified_at: z.string(),
  created_at: z.string().transform(util.date.toDate),
  updated_at: z.string().transform(util.date.toDate),
  password: z.string(),
  avatar: z.string(),
  email: z.string(),
  name: z.string(),
  id: z.number(),
})

const commentSchema = z.object({
  updated_at: z.string().transform(util.date.toDate),
  created_at: z.string().transform(util.date.toDate),
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
  comments: z.array(commentSchema),
  customer_reference: z.string(),
  service_reference: z.string(),
  description: z.string(),
  address: addressSchema,
  updated_at: z.string().transform(util.date.toDate),
  created_at: z.string().transform(util.date.toDate),
  priority: z.string(),
  email: z.string(),
  status: z.string(),
  ref: z.string(),
  user: userSchema,
  id: z.number(),
})

export const incidentMetaSchema = z.object({
  records: z.number(),
  pages: z.number(),
  on_hold: z.number(),
  submitted: z.number(),
  closed: z.number(),
  new: z.number(),
  resolved: z.number(),
  cancelled: z.number(),
  in_progress: z.number(),
  count: z.number(),
})

export type Incident = z.infer<typeof incidentSchema>
