import { ChevronDown, PlusSquare, Star, Trash } from "lucide-react";
import { motion } from "motion/react";
import { Controller, type UseFormReturn } from "react-hook-form";
import { Label } from "../ui/label";
import { type CreateAnime } from "./CollectionSchema";
import { DialogButtons } from "../DialogButtons";

interface CollectionFieldsProps {
  form: UseFormReturn<CreateAnime>;
  isLoading?: boolean;
  isEditing?: boolean;
  removeAnime: () => void;
}

export function CollectionFields({
  form,
  isLoading = false,
  isEditing = false,
  removeAnime,
}: CollectionFieldsProps) {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex flex-col gap-5">
        <div>
          <Label className="sanctuary-label block mb-2 dark:text-slate-200">
            Title
          </Label>
          <input
            {...register("title")}
            type="text"
            placeholder="e.g. Neon Genesis Evangelion"
            className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 placeholder:text-indigo-900/30 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          />
          {errors.title && (
            <span className="text-red-500 dark:text-red-400 text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="sanctuary-label block mb-2 dark:text-slate-200">
              Episodes
            </Label>
            <div className="relative">
              <input
                {...register("episodes", { valueAsNumber: true })}
                type="number"
                className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
            {errors.episodes && (
              <span className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.episodes.message}
              </span>
            )}
          </div>
          <div>
            <Label className="sanctuary-label block mb-2 dark:text-slate-200">
              Status
            </Label>
            <div className="relative">
              <select
                {...register("status")}
                className="w-full appearance-none bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              >
                <option value="COMPLETED">Completo</option>
                <option value="RELEASING">Em Lançamento</option>
                <option value="PENDING">Planejado</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-900/40 dark:text-slate-400 pointer-events-none"
              />
            </div>
            {errors.status && (
              <span className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.status.message}
              </span>
            )}
          </div>
        </div>

        <div className="my-2">
          <label className="sanctuary-label block mb-2 dark:text-slate-200">
            Star Rating
          </label>
          <Controller
            name="stars"
            control={form.control}
            defaultValue={5}
            render={({ field: { value, onChange } }) => (
              <div className="flex gap-1 bg-gold/5 dark:bg-slate-800/50 w-fit p-2 rounded-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => onChange(star)} // O Controller cuida do setValue internamente
                    className={`transition-all duration-300 ${
                      star <= value ? "text-gold" : "text-gold/20"
                    }`}
                  >
                    <Star
                      size={24}
                      fill={star <= value ? "currentColor" : "none"}
                      className="cursor-pointer text-amber-500"
                    />
                  </button>
                ))}
              </div>
            )}
          />
        </div>

        <div>
          <Label className="sanctuary-label block mb-2 dark:text-slate-200">
            Review
          </Label>
          <textarea
            {...register("review")}
            placeholder="Um breve resumo da sua opinião sobre o anime..."
            rows={3}
            className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 placeholder:text-indigo-900/30 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
          />
          {errors.review && (
            <span className="text-red-500 dark:text-red-400 text-sm mt-1">
              {errors.review.message}
            </span>
          )}
        </div>

        <div>
          <Label className="sanctuary-label block mb-2 dark:text-slate-200">
            Descrição Completa
          </Label>
          <textarea
            {...register("description")}
            placeholder="Deep dive into the plot and themes..."
            rows={5}
            className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 placeholder:text-indigo-900/30 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
          />
          {errors.description && (
            <span className="text-red-500 dark:text-red-400 text-sm mt-1">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-5 justify-end mt-5">
          <DialogButtons
            isEditing={isEditing}
            isLoading={isLoading}
            functionButton={removeAnime}
            deleteButtonTitle="Remover Anime"
            deleteButtonIcon={<Trash size={16} />}
            saveButtonTitle="Salvar Anime"
            saveButtonIcon={<PlusSquare size={16} />}
          />
        </div>
      </div>
    </motion.div>
  );
}
