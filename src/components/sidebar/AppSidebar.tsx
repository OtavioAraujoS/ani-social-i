"use client";

import {
  Sidebar,
  SidebarSeparator,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarContent } from "./SidebarContent";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="app-sidebar border-r-0">
      <SidebarHeader />

      <SidebarSeparator className="app-sidebar__sep mx-0 opacity-30" />

      <SidebarContent />

      <SidebarSeparator className="app-sidebar__sep mx-0 opacity-30" />

      <SidebarFooter />

      <SidebarRail />
    </Sidebar>
  );
}
