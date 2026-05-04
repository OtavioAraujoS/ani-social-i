import { CollectionPageHandler } from "@/components/Collection/CollectionPageHandler";
import { PageError } from "@/components/PageError";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";

export const metadata = {
  title: "Coleções - AniSocial",
  description: "Gerencie suas coleções de animes.",
};

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const title = typeof params?.title === "string" ? params.title : undefined;
  const limit = 10;
  const statusMap: Record<string, "COMPLETED" | "RELEASING" | "PENDING"> = {
    concluidos: "COMPLETED",
    assistindo: "RELEASING",
    pendente: "PENDING",
  };
  const status =
    typeof params?.status === "string" ? statusMap[params.status] : undefined;

  const getCollectionsResult = async () => {
    try {
      const response = await apiClient.animes.getAnimesAnimes({
        page,
        limit,
        title,
        status,
      });
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
  return (
    <CollectionPageHandler
      collectionsData={result.data}
      currentPage={page}
      limit={limit}
    />
  );
}
