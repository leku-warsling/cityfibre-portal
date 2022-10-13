import { IncidentsPage, CreateIncidentPage, IncidentPage } from "./incidents"
import { ServicePage, ServicesPage } from "./services"
import { NetworksPage } from "./networks"
import { HelpPage } from "./help"

const routes = [
  {
    path: "incidents",
    children: [
      { index: true, element: <IncidentsPage /> },
      { path: "create", element: <CreateIncidentPage /> },
      { path: ":id", element: <IncidentPage /> },
    ],
  },
  { path: "help", element: <HelpPage /> },
  { path: "networks", element: <NetworksPage /> },
  {
    path: "services",
    children: [
      { index: true, element: <ServicesPage /> },
      { path: ":id", element: <ServicePage /> },
    ],
  },
]

export default routes
