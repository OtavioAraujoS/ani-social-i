import { SidebarHeader as SidebarHeaderUI } from "@/components/ui/sidebar";
import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";

export function SidebarHeader() {
  const { user } = useAuth();
  return (
    <SidebarHeaderUI className="app-sidebar__header px-4 py-5 group-data-[collapsible=icon]:px-0">
      <div className="flex items-center gap-3 min-w-0 group-data-[collapsible=icon]:justify-center">
        <div className="app-sidebar__logo shrink-0 overflow-hidden flex items-center justify-center size-20 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8 rounded-lg bg-primary/20 border border-primary/30 transition-all">
          <Image
            src={user?.avatar ?? "/userAvatar.jpg"}
            alt="Ani Social"
            width={80}
            height={80}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden transition-opacity duration-200">
          <span className="app-sidebar__brand text-sm font-bold tracking-widest uppercase text-foreground truncate">
            {user?.userName ?? "Sanctuary Member"}
          </span>
          <span className="app-sidebar__role text-[10px] tracking-widest uppercase text-primary/70">
            {user?.role === "ADMIN" ? "Admin" : "Membro do Clã"}
          </span>
        </div>
      </div>
    </SidebarHeaderUI>
  );
}
