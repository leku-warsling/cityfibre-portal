import { lazy } from "@loadable/component"

export const IncidentPage = lazy(() => import("./incident.page"))
export const RaiseIncidentPage = lazy(() => import("./raise-incident.page"))
export const ServiceDetailsForm = lazy(
  () => import("./forms/service-details.form")
)
