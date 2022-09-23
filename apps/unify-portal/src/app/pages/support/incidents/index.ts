import loadable from "@loadable/component"

export const CreateIncidentPage = loadable(
  () => import("./create-incident.page")
)
export const IncidentsPage = loadable(() => import("./incidents.page"))
export const IncidentPage = loadable(() => import("./incident.page"))
