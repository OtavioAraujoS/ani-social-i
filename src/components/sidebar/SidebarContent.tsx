import {
  SidebarContent as SidebarContentUI,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mainNav } from "./SidebarColumns";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SidebarContent() {
  const pathname = usePathname();
  return (
    <SidebarContentUI className="px-2 pt-2 group-data-[collapsible=icon]:px-0">
      <SidebarGroup className="group-data-[collapsible=icon]:p-0">
        <SidebarMenu>
          {mainNav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  size="lg"
                  className={cn(
                    "app-sidebar__nav-item group/item group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:mx-auto",
                    isActive && "app-sidebar__nav-item--active",
                  )}
                >
                  <Link href={item.href} prefetch={false}>
                    <item.icon
                      className={cn(
                        "shrink-0 transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover/item:text-foreground",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium tracking-wide transition-colors group-data-[collapsible=icon]:hidden",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover/item:text-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContentUI>
  );
}
