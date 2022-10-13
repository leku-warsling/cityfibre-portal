import loadable from "@loadable/component"

const RolesPage = loadable(() => import("./roles.page"))
const UpsertRolePage = loadable(() => import("./upsert-role.page"))
const AccountSettingsPage = loadable(() => import("./account-settings.page"))
const UserManagementPage = loadable(() => import("./user-management.page"))

const routes = [
  {
    path: "roles",
    children: [
      { index: true, element: <RolesPage /> },
      { path: "create", element: <UpsertRolePage /> },
      { path: ":id", element: <UpsertRolePage /> },
    ],
  },
  {
    path: "users",
    element: <UserManagementPage />,
  },
  {
    path: "account/settings",
    element: <AccountSettingsPage />,
  },
]

export default routes
