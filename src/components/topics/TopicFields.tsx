import { UseFormReturn, Controller } from "react-hook-form";
import { CreateTopic } from "./TopicSchema";
import { PlusSquare, Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { IAnime } from "@/interfaces/IAnime";
import { DialogButtons } from "../DialogButtons";

interface TopicFieldsProps {
  form: UseFormReturn<CreateTopic>;
  isLoading?: boolean;
  isEditing?: boolean;
  removeTopic: () => void;
  animes: IAnime[];
}

export const TopicFields = ({
  form,
  isEditing,
  isLoading,
  removeTopic,
  animes,
}: TopicFieldsProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = form;
  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">
          Título
        </label>
        <input
          {...register("title")}
          className="w-full bg-surface-container-lowest/20 border dark:border-white/15 border-black/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-slate-600 rounded-xl px-5 py-3 text-md transition-all outline-hidden"
          placeholder="Digite um título para o tópico"
          type="text"
        />
        {errors.title && (
          <span className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">
            Anime
          </Label>
          <Controller
            name="animeId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full bg-surface-container-lowest/20 border dark:border-white/15 border-black/10 focus:ring-2 focus:ring-primary/20 text-on-surface rounded-xl px-6 py-7 h-auto transition-all outline-none">
                  <SelectValue placeholder="Selecione um anime" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-black/10 dark:border-white/15 bg-surface-container-lowest max-h-60">
                  <SelectGroup>
                    {animes.map((anime) => (
                      <SelectItem
                        key={anime.id}
                        value={anime.id}
                        className="cursor-pointer border-b border-gray-400 dark:border-gray-600"
                      >
                        {anime.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.animeId && (
            <span className="text-red-500 dark:text-red-400 text-sm mt-1">
              {errors.animeId.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">
          Descrição
        </label>
        <textarea
          {...register("description")}
          className="w-full bg-surface-container-lowest/20 border dark:border-white/15 border-black/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-slate-600 rounded-xl px-6 py-4 text-base transition-all resize-none outline-hidden"
          placeholder="Descrição do tópico"
          rows={6}
        />
        {errors.description && (
          <span className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <DialogButtons
        isEditing={isEditing}
        isLoading={isLoading}
        functionButton={removeTopic}
        deleteButtonTitle="Remover Tópico"
        deleteButtonIcon={<Trash size={16} />}
        saveButtonTitle="Salvar Tópico"
        saveButtonIcon={<PlusSquare size={16} />}
      />
    </div>
  );
};
