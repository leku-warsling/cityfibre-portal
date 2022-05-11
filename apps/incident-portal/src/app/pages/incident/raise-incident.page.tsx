// @ts-nocheck
import { Page, Step, Steps } from "@ui"
import { __ } from "ramda"
import { StateMachineProvider, createStore } from "little-state-machine"
import { Outlet } from "react-router-dom"

const steps = [
  {
    label: "Service Details",
  },
  {
    label: "Incident Details",
  },
  {
    label: "Submit Incident",
  },
]

const SERVICE_REFS = {
  S12345: "active",
  S75659: "down",
  S143015: "power",
}

createStore({
  data: {},
})

const RaiseIncidentPage = () => {
  console.count()
  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={[6, 6, 8]}>Raise An Incident</Page.Header>
      <StateMachineProvider>
        <Outlet />
      </StateMachineProvider>
    </Page>
  )
}

export default RaiseIncidentPage
