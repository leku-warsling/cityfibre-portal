import { useAuth } from "../../providers/auth.provider"
import { Navigate, Outlet } from "react-router-dom"
import { useLocation } from "react-use"

const ProtectedRoute = () => {
  const location = useLocation()
  const auth = useAuth()

  if (!auth.user) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
