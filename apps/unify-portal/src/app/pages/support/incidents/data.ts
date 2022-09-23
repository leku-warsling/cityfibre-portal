import repeat from "ramda/es/repeat"

export const INCIDENT_DATA = repeat(
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "New",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
  100
)
