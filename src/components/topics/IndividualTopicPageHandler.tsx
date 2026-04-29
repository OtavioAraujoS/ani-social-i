"use client";
import { IComment } from "@/interfaces/IComment";
import { ITopics } from "@/interfaces/ITopics";
import { motion } from "motion/react";
import { CommentSection } from "./CommentSection";
import { CommentsTopicHeader } from "./CommentsTopicHeader";
import { CommentTopicForm } from "./CommentTopicForm";

interface IndividualTopicPageHandlerProps {
  topic: ITopics;
  comments: IComment[];
}

export const IndividualTopicPageHandler = ({
  topic,
  comments,
}: IndividualTopicPageHandlerProps) => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 blur-[120px] rounded-full -ml-48 -mb-48" />
        <div className="kintsugi-grid absolute inset-0" />
      </div>

      <main className="xl:pl-64 pt-20 min-h-screen relative z-10">
        <div className="w-full px-4 md:px-12 py-12">
          <CommentsTopicHeader topic={topic} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8"
              >
                <div className="glass-panel p-6 rounded-3xl">
                  <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg font-light">
                    <blockquote className="border-l-4 border-primary pl-8 py-4 italic text-on-surface font-medium text-xl bg-primary/5 rounded-r-2xl">
                      &quot;{topic.description}&quot;
                    </blockquote>
                  </div>
                </div>

                <section id="discussion">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-black tracking-tighter uppercase">
                      Comentários{" "}
                      <span className="text-primary ml-2 font-mono">
                        ({topic.comments})
                      </span>
                    </h3>
                  </div>

                  <CommentTopicForm topicId={topic.id} />

                  <CommentSection comments={comments} topicId={topic.id} />
                </section>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
