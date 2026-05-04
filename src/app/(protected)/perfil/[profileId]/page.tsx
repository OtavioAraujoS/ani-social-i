import { PageError } from "@/components/PageError";
import { PerfilPageHandler } from "@/components/pefil/PerfilPageHandler";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";

export default async function PerfilPage({
  params,
}: {
  params: { profileId: string };
}) {
  const { profileId } = await params;

  const getCollectionsResult = async () => {
    try {
      const response = await apiClient.profile.getProfileByUserId(profileId);
      return { data: response.data, isError: false as const };
    } catch (error) {
      const apiError = getApiError(error);
      if (apiError.status === 401) {
        await handleUnauthorizedServer();
      }
      return { error: apiError, isError: true as const };
    }
  };

  const result = await getCollectionsResult();
  if (result.isError) {
    return (
      <PageError
        error={result.error}
        message={
          result.error.message ||
          "Um erro ocorreu ao buscar os dados das coleções. Tente novamente mais tarde."
        }
      />
    );
  }
  return <PerfilPageHandler profileInfos={result.data} />;
}
