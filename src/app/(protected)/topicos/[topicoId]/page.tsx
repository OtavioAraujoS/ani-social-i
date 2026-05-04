import { PageError } from "@/components/PageError";
import { IndividualTopicPageHandler } from "@/components/topics/IndividualTopicPageHandler";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";

export const metadata = {
  title: "Tópico Individual",
  description: "Página do tópico individual",
};

export default async function IndividualTopicPage({
  params,
}: {
  params: Promise<{ topicoId: string }>;
}) {
  const { topicoId } = await params;

  const getTopicDetails = async () => {
    try {
      const response =
        await apiClient.topics.getTopicsTopicsByTopicId(topicoId);
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

  const getComments = async () => {
    try {
      const response =
        await apiClient.comments.getCommentsCommentsByTopicId(topicoId);
      return { data: response.data || [], isError: false as const };
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

  const [topicResult, commentsResult] = await Promise.all([
    getTopicDetails(),
    getComments(),
  ]);

  if (topicResult.isError || commentsResult.isError) {
    const error =
      (topicResult.isError ? topicResult.error : null) ||
      (commentsResult.isError ? commentsResult.error : null);

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
  return (
    <IndividualTopicPageHandler
      topic={topicResult.data}
      comments={commentsResult.data}
    />
  );
}
