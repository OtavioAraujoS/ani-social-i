import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="bg-transparent">
          <header className="flex flex-wrap justify-between items-center gap-2 px-4 py-3 border-b border-white/10 bg-surface-container-lowest/60 backdrop-blur-md sticky top-0 z-40">
            <SidebarTrigger className="cursor-pointer text-muted-foreground hover:text-foreground" />
            <span className="text-slate-900 dark:text-[#00F0FF] text-xs md:text-sm lg:text-md font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold dark:font-normal opacity-80 dark:opacity-70">
              Ani/Social
            </span>
            <ThemeSwitch />
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
