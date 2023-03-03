import { NotAuthorizedPage, NotFoundPage, ServerErrorPage } from "@ui/lib/pages"
import { DashboardPage } from "./pages/dashboard"
import MainLayout from "./layouts/main.layout"
import orderRoutes from "./pages/ordering"
import userRoutes from "./pages/user"
import supportRoutes from "./pages/support"
import billingRoutes from "./pages/billing"
import authRoutes from "./pages/auth"
import { AccessControlPage, LiveWorksPage } from "./pages/contact"
import { SafetyReportPage } from "./pages/safety"
import { useRoutes } from "react-router-dom"

const Router = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        ...supportRoutes,
        ...orderRoutes,
        ...userRoutes,
        ...billingRoutes,
      ],
    },
    ...authRoutes,
    { path: "/access-control", element: <AccessControlPage /> },
    { path: "/live-works", element: <LiveWorksPage /> },
    { path: "/safety-report", element: <SafetyReportPage /> },
    { path: "/unauthorized", element: <NotAuthorizedPage /> },
    { path: "/server-error", element: <ServerErrorPage /> },
    { path: "*", element: <NotFoundPage /> },
  ])
  return element
}

export default Router
