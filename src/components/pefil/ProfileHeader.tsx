import { rankTitles } from "@/app/(protected)/dashboard/rankTitles";
import { IProfileUserInfos } from "@/interfaces/IProfile";
import { Library } from "lucide-react";
import Image from "next/image";

export function ProfileHeader({
  profileInfos,
}: {
  profileInfos: IProfileUserInfos;
}) {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      <div className="flex flex-wrap items-center gap-12">
        <div className="relative">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/10 glass-panel p-1 relative z-10">
            <Image
              src={profileInfos?.avatarUrl || "/notFoundPicture.png"}
              className="w-full h-full object-cover rounded-xl"
              alt="Profile"
              width={500}
              height={500}
              priority
              unoptimized
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 glass-panel flex items-center justify-center text-blue-primary z-20">
            <Library size={20} />
          </div>
        </div>

        <div>
          <p className="sanctuary-label text-blue-primary mb-2 flex items-center gap-2">
            <span className="w-2 h-px bg-blue-primary" />{" "}
            {rankTitles[profileInfos?.rank as keyof typeof rankTitles]}
          </p>
          <div className="massive-display uppercase flex flex-col -ml-2">
            <span className="text-slate-600 dark:text-white text-[3rem] lg:text-[4.2rem]">
              {profileInfos?.username}
            </span>
            <span className="text-blue-primary -mt text-[2rem] lg:text-[4rem]">
              {profileInfos?.name}
            </span>
          </div>
        </div>
      </div>

      <button className="w-fit max-h-32 self-center cursor-pointer text-white bg-blue-primary hover:bg-blue-accent dark:bg-blue-accent dark:hover:bg-blue-primary px-8 py-3 glass-panel transition-all font-bold tracking-widest text-[10px] inner-glow">
        EDITAR PERFIL
      </button>
    </div>
  );
}
