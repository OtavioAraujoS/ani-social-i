import { PageError } from "@/components/PageError";
import { TopicPageHandler } from "@/components/topics/TopicPageHandler";
import { IAnime } from "@/interfaces/IAnime";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";

export const metadata = {
  title: "Tópicos - AniSocial",
  description: "Participe das discussões sobre seus animes favoritos.",
};

export default async function TopicsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const searchtitle =
    typeof params?.search === "string" ? params.search : undefined;
  const limit = 10;
  const statusMap: Record<string, "LATEST" | "POPULAR" | "NO_COMMENTS"> = {
    recentes: "LATEST",
    popular: "POPULAR",
    "sem-resposta": "NO_COMMENTS",
    LATEST: "LATEST",
    POPULAR: "POPULAR",
    NO_COMMENTS: "NO_COMMENTS",
  };
  const status =
    typeof params?.orderBy === "string" ? statusMap[params.orderBy] : undefined;

  const getTopicsResult = async () => {
    try {
      const response = await apiClient.topics.getTopicsTopics({
        page,
        limit,
        title: searchtitle,
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

  const getAnimeResult = async () => {
    try {
      const response = await apiClient.animes.getAnimesAnimes();
      return { data: response.data.data || [], isError: false as const };
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

  const [topicListResult, animeListResult] = await Promise.all([
    getTopicsResult(),
    getAnimeResult(),
  ]);

  if (topicListResult.isError || animeListResult.isError) {
    const error =
      (topicListResult.isError ? topicListResult.error : null) ||
      (animeListResult.isError ? animeListResult.error : null);

    return (
      <PageError
        error={error!}
        message={
          error?.message ||
          "Um erro ocorreu ao buscar os dados. Tente novamente mais tarde."
        }
      />
    );
  }

  const { data: topics, total: totalTopics } = topicListResult.data;
  const animes = animeListResult.data as IAnime[];
  return (
    <TopicPageHandler
      topics={topics}
      totalTopics={totalTopics}
      currentPage={page}
      limit={limit}
      animes={animes}
    />
  );
}
