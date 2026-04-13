import { DashboardPageHandler } from "@/components/dashboard/DashboardPageHandler";
import { apiClient } from "@/services/apiClient";
import { PageError } from "@/components/PageError";

export default async function DashboardPage() {
  const getDashboardResult = async () => {
    try {
      const response = await apiClient.dashboard.getDashboard();
      return { data: response.data, isError: false as const };
    } catch (error) {
      console.error("Failed to fetch dashboard data server-side:", error);
      return {
        error: error instanceof Error ? error : new Error("Unknown error"),
        isError: true as const,
      };
    }
  };

  const result = await getDashboardResult();

  if (result.isError) {
    return (
      <PageError
        error={result.error}
        message={
          result.error.message ||
          "INDIGO_KINTSUGI_CONNECTION_TIMEOUT: The sanctuary archives are currently unreachable."
        }
      />
    );
  }
  return <DashboardPageHandler dashboardData={result.data} />;
}
