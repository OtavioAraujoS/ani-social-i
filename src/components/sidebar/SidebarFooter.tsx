import { SidebarFooter as SidebarFooterUI } from "@/components/ui/sidebar";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function SidebarFooter() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/home");
  };
  return (
    <SidebarFooterUI className="app-sidebar__footer px-4 pb-3 group-data-[collapsible=icon]:px-0">
      <SidebarSeparator className="mx-0 opacity-20 my-2" />

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Logout"
            onClick={handleLogout}
            className="gap-4 cursor-pointer app-sidebar__logout group/logout group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:mx-auto text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="shrink-0 group-hover/logout:text-red-400 transition-colors" />
            <span className="text-sm font-medium tracking-wide group-data-[collapsible=icon]:hidden">
              Logout
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooterUI>
  );
}
