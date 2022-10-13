import { AppState, Auth0Provider } from "@auth0/auth0-react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

const Auth0ProviderWithHistory: FC = ({ children }) => {
  const navigate = useNavigate()

  const { NX_AUTH0_DOMAIN, NX_AUTH0_CLIENT_ID, NX_AUTH0_AUDIENCE } = process.env

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  if (!(NX_AUTH0_DOMAIN && NX_AUTH0_CLIENT_ID && NX_AUTH0_AUDIENCE)) {
    console.error(
      "Auth0Provider: domain, clientId and audience must be specified"
    )
    return null
  }

  return (
    <Auth0Provider
      domain={NX_AUTH0_DOMAIN}
      clientId={NX_AUTH0_CLIENT_ID}
      audience={NX_AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
