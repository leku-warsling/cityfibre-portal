import { Navigate } from "react-router-dom";
import { useLocation } from "react-use";
import { useAuth } from "../../providers/auth.provider";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const location = useLocation()
  
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth