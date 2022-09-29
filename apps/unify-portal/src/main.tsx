import { asyncWithLDProvider } from "launchdarkly-react-client-sdk"
import { StrictMode } from "react"
import { render } from "react-dom"
import App from "./app/app"
;(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "6335b0d9f2de6410b7e46ea8",
    // user: {
    //   key: "aa0ceb",
    //   name: "Grace Hopper",
    //   email: "gracehopper@example.com",
    // },
    options: {
      /* ... */
    },
  })

  render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>,
    document.getElementById("root")
  )
})()
