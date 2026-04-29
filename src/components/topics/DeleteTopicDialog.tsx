"use client";

import { Trash } from "lucide-react";
import { StyledDialog } from "../StyledDialog";
import { useState } from "react";
import { apiClient, getApiError } from "@/services/apiClient";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import { useRouter } from "next/navigation";
import { AlertError, AlertSuccess } from "../Alert";

export function DeleteTopicDialog({ topicId }: { topicId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function deleteTopic() {
    setLoading(true);
    try {
      const response =
        await apiClient.social.deleteSocialTopicsByTopicId(topicId);

      if (response.data.success) {
        AlertSuccess({ message: "Tópico removido com sucesso!" });
        LoadingAndRefresh(router);
      }
    } catch (error) {
      const apiError = getApiError(error);
      AlertError(apiError);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyledDialog
      title="Ação de Administração"
      description="Remover"
      descriptionReason="Tópico"
      childrenButton={
        <button className="cursor-pointer transition-colors text-red-500 hover:text-red-600">
          <Trash className="w-5 h-5" />
        </button>
      }
    >
      <div className="flex items-center justify-center antialiased p-8 rounded-2xl w-full">
        <div className="max-w-sm w-full flex flex-col items-center">
          <div className="w-16 h-16 bg-[#13151f] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Trash className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-3 text-center tracking-tight">
            Remover Tópico
          </h1>
          <p className="text-gray-400 text-center mb-8 px-6 text-[15px] leading-relaxed">
            Você tem certeza de que deseja remover este tópico do santuário?
          </p>

          <button
            onClick={deleteTopic}
            disabled={loading}
            className="cursor-pointer w-full bg-[#4c57e5] hover:bg-[#3f48cc] disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition duration-200"
          >
            {loading ? "Removendo..." : "Remover"}
          </button>
        </div>
      </div>
    </StyledDialog>
  );
}
