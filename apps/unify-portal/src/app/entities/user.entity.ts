import { date } from "@ui/lib/util"
import { z } from "zod"

export const USER_STATUSES = ["Active", "Awaiting Activation"] as const

export const USER_ROLES = [
  "1st Support Agent",
  "2nd Support Agent",
  "Administrators",
  "Billing Team",
  "Default User",
  "Finance",
  "First Line Ops",
  "First Line Support",
  "First Line Triage",
  "Incident Management",
  "Giganet Roles",
  "Operations Manager",
  "Order Management",
  "Provisioning",
  "Service Desk",
  "Service Executive",
  "Service Management",
  "VOIP Custom Access",
] as const

export const userSchema = z.object({
  email_verified_at: z.string().transform(date.toDate),
  updated_at: z.string().transform(date.toDate),
  created_at: z.string().transform(date.toDate),
  // roles: z.enum(USER_ROLES).array(),
  roles: z.enum(USER_ROLES),
  status: z.enum(USER_STATUSES),
  email: z.string().email(),
  avatar: z.string().url(),
  name: z.string(),
  id: z.number(),
})

export const userMetaSchema = z.object({
  awaiting_activation: z.number(),
  active: z.number(),
  records: z.number(),
  pages: z.number(),
  count: z.number(),
})

export type User = z.infer<typeof userSchema>
