import loadable from "@loadable/component"

export const RolesPage = loadable(() => import("./roles.page"))
export const UpsertRolePage = loadable(() => import("./upsert-role.page"))
export const AccountSettingsPage = loadable(
  () => import("./account-settings.page")
)
export const UserManagementPage = loadable(
  () => import("./user-management.page")
)
