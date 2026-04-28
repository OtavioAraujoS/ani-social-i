"use client";

import { IComment } from "@/interfaces/IComment";
import dayjs from "dayjs";
import Image from "next/image";

interface CommentSectionProps {
  comments: IComment[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <div className="space-y-12">
      {comments.map((comment) => (
        <div className="flex gap-6 group" key={comment.id}>
          <Image
            src={comment.createdByUserId?.avatarUrl || "/notFoundPicture.png"}
            alt={comment.createdByUserId?.userName || ""}
            className={`w-12 h-12 rounded-full border border-white/5`}
            width={40}
            height={40}
            unoptimized
          />
          <div className="flex-1 space-y-3">
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
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl font-light">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
