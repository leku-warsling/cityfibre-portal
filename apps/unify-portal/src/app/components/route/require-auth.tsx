import { useAuth } from "../../providers/auth.provider"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-use"

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const auth = useAuth()

  if (!auth.user) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
