import { DashboardPageHandler } from "@/components/dashboard/DashboardPageHandler";
import { apiClient } from "@/services/apiClient";

export default async function DashboardPage() {
  let dashboardData = null;

  try {
    const response = await apiClient.dashboard.getDashboard();
    dashboardData = response.data;
  } catch (error) {
    console.error("Failed to fetch dashboard data server-side:", error);
  }
  return <DashboardPageHandler dashboardData={dashboardData} />;
}
