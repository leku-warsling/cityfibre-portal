import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Outlet } from "react-router-dom"
import { Spinner } from "@chakra-ui/react"

const ProtectedRoute = withAuthenticationRequired(Outlet, {
  onRedirecting: () => <Spinner />,
})

export default ProtectedRoute
