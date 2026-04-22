import { DashboardPageHandler } from "@/components/dashboard/DashboardPageHandler";
import { apiClient, getApiError } from "@/services/apiClient";
import { PageError } from "@/components/PageError";
import { handleUnauthorizedServer } from "@/services/authUtils";

export default async function DashboardPage() {
  const getDashboardResult = async () => {
    try {
      const response = await apiClient.dashboard.getDashboard();
      return { data: response.data, isError: false as const };
    } catch (error) {
      const apiError = getApiError(error);

      if (apiError.status === 401) {
        await handleUnauthorizedServer();
      }

      return {
        error: apiError,
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
          "Um erro ocorreu ao buscar os dados do dashboard. Tente novamente mais tarde."
        }
      />
    );
  }
  return <DashboardPageHandler dashboardData={result.data} />;
}
