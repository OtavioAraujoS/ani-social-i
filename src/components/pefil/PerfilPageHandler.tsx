"use client";
import { UserProfileResponse } from "@/services/api";
import { MessageSquare, TrendingUp } from "lucide-react";
import { AnimeCard } from "./AnimeCardProfile";
import { ProfileTopicsSection } from "./ProfileTopicsSection";
import { ProfileHeader } from "./ProfileHeader";
import dayjs from "dayjs";
import { StatusMap, statusMap } from "@/utils/StatusMap";

export function PerfilPageHandler({
  profileInfos,
}: {
  profileInfos: UserProfileResponse;
}) {
  console.log(profileInfos);
  return (
    <div className="min-h-screen bg-surface/50 flex font-sans selection:bg-blue-primary/30">
      <main className="flex-1 pl-10 pr-4 lg:pl-20 lg:pr-8 pb-12 relative">
        <div className="mt-20 lg:px-20 relative z-10">
          <ProfileHeader profileInfos={profileInfos.userInfos} />

          <div className="mt-24 flex flex-col gap-12">
            <div className="flex flex-col gap-12">
              <section>
                <div className="flex items-center mb-8">
                  <h2 className="text-3xl font-black italic">
                    Animes{" "}
                    <span className="text-blue-primary">Cadastrados</span>
                  </h2>
                </div>
                <div className="flex flex-wrap gap-6">
                  {profileInfos.anime.map((anime, index) => (
                    <AnimeCard
                      key={anime.id}
                      title={anime.title}
                      status={statusMap[anime.status as keyof typeof StatusMap]}
                      index={(index + 1).toString()}
                      image={anime.cover ?? "/notFoundPicture.png"}
                    />
                  ))}
                </div>
              </section>

              <ProfileTopicsSection topicsInfos={profileInfos.topics} />

              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black italic">
                    Comentários{" "}
                    <span className="text-blue-primary">Recentes</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {profileInfos.comments.map((comment, index) => {
                    const isInitialIndex = index === 0;
                    return (
                      <div
                        key={index}
                        className={`glass-panel p-6 ${isInitialIndex ? "kintsugi-gradient" : ""}`}
                      >
                        <div className="flex gap-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                              isInitialIndex
                                ? "bg-blue-primary/20 text-blue-primary"
                                : "bg-gold/10 text-gold"
                            }`}
                          >
                            {isInitialIndex ? (
                              <TrendingUp size={20} />
                            ) : (
                              <MessageSquare size={20} />
                            )}
                          </div>
                          <div>
                            <p className="text-[0.9rem] dark:text-slate-300 text-slate-800 leading-relaxed italic font-bold">
                              &quot;{comment.content}.&quot;
                            </p>
                            <p className="sanctuary-label mt-4 text-[9px] dark:text-slate-500 text-slate-900">
                              Em:{" "}
                              <span
                                className="dark:text-white text-slate-900 font-bold"
                                suppressHydrationWarning
                              >
                                {dayjs(comment.createdAt).format(
                                  "DD/MM/YYYY HH:mm",
                                )}
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
