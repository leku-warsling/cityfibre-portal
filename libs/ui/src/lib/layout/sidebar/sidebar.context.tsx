   
import { createContext, useContext } from 'react';

export type SidebarContextValue = {
  isCollapsed: boolean
}

const SidebarContext = createContext<SidebarContextValue>(null!);

export const SidebarProvider = SidebarContext.Provider;

export function useSidebarContext() {
  return useContext(SidebarContext);
}
