// @ts-nocheck
import { StateMachineProvider, createStore } from "little-state-machine"
import { Outlet } from "react-router-dom"
import { Page } from "@ui"

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
