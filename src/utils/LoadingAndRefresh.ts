import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function LoadingAndRefresh(router: AppRouterInstance) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  router.refresh();
}
