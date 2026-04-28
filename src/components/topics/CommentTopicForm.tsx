"use client";

import { useAuth } from "@/providers/AuthProvider";
import { apiClient, getApiError } from "@/services/apiClient";
import { handleUnauthorizedServer } from "@/services/authUtils";
import { LoadingAndRefresh } from "@/utils/LoadingAndRefresh";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CommentTopicForm({ topicId }: { topicId: string }) {
  const [comment, setComment] = useState("");
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmitComment = async () => {
    try {
      const response = await apiClient.social.postSocialComments({
        content: comment,
        topicId,
      });

      if (response.data.success) {
        setComment("");
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
    }
  };
  return (
    <div className="glass-panel p-6 rounded-2xl mb-6 border border-white/300 dark:border-gray-700">
      <div className="flex gap-4">
        <Image
          src={user?.avatar || "/userAvatar.png"}
          alt="User"
          className="size-10 rounded-full border border-white/10"
          width={40}
          height={40}
          unoptimized
        />
        <div className="flex-1 space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-gray-200 dark:bg-white/5 border-none focus:ring-1 focus:ring-primary rounded-xl text-sm min-h-[100px] placeholder:text-slate-600 p-4 transition-all resize-none border border-black dark:border-white/300"
            placeholder="Join the discussion... Add your insight to the timeline."
          />
          <div className="flex justify-end">
            <button
              onClick={handleSubmitComment}
              disabled={!comment.trim()}
              className="cursor-pointer bg-blue-700 hover:bg-blue-600 disabled:opacity-50 px-8 py-2 md:py-3 rounded-xl text-[10px] text-white font-bold uppercase tracking-widest transition-all"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
