"use client";

import { IComment } from "@/interfaces/IComment";
import { useAuth } from "@/providers/AuthProvider";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import dayjs from "dayjs";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
interface CommentSectionProps {
  comments: IComment[];
  topicId: string;
}

export const CommentSection = ({ comments, topicId }: CommentSectionProps) => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmitComment = async (commentId: string) => {
    setLoading(true);
    try {
      const response = await apiClient.social.deleteSocialComments({
        commentId,
        topicId,
      });

      if (response.data.success) {
        toast.success("Comentário deletado com sucesso");
        LoadingAndRefresh(router);
      }
    } catch (error) {
      const apiError = getApiError(error);

      if (apiError.status === 401) {
        await handleUnauthorizedServer();
      }
      return {
        error: apiError,
        isError: true as const,
      };
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment) => (
        <div
          className="flex gap-6 group border rounded-xl p-4 border-white/300 dark:border-gray-700"
          key={comment.id}
        >
          <Image
            src={comment.createdByUserId?.avatarUrl || "/notFoundPicture.png"}
            alt={comment.createdByUserId?.userName || ""}
            className={`w-12 h-12 rounded-full border border-white/5`}
            width={40}
            height={40}
            unoptimized
          />
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-[0.9rem] font-black tracking-tight">
                  {comment.createdByUserId?.userName}
                </span>
                <span
                  suppressHydrationWarning
                  className="text-[0.7rem] uppercase tracking-widest text-slate-500"
                >
                  {comment.createdAt
                    ? dayjs(comment.createdAt).format("DD/MM/YYYY HH:mm")
                    : new Date().toISOString()}
                </span>
              </div>
              {user?.role === "ADMIN" && (
                <button
                  disabled={loading}
                  onClick={() => handleSubmitComment(comment.id)}
                  className="cursor-pointer hover:text-red-500 dark:hover:text-red-500 transition-colors"
                >
                  <Trash size={16} />
                </button>
              )}
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl font-light">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
