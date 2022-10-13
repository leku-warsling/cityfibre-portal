import { NotAuthorizedPage, NotFoundPage, ServerErrorPage } from "@ui/lib/pages"
import { HelpPage } from "./pages/contact/help"
// import contactRoutes from "./pages/contact/routes"
import MainLayout from "./layouts/main.layout"
import ProtectedRoute from "./components/route/protected-route"
import { useRoutes } from "react-router-dom"

const Router = () => {
  const element = useRoutes([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HelpPage />,
            },
            // ...contactRoutes,
          ],
        },
      ],
    },

    { path: "/unauthorized", element: <NotAuthorizedPage /> },
    { path: "/server-error", element: <ServerErrorPage /> },
    { path: "*", element: <NotFoundPage /> },
  ])

  return element
}

export default Router
