import { PlusSquare } from "lucide-react";
import { motion } from "motion/react";
import { Label } from "../ui/label";
import { DialogButtons } from "../DialogButtons";
import { UpdateUser } from "./ProfileSchema";
import { UseFormReturn } from "react-hook-form";

interface ProfileFieldsProps {
  form: UseFormReturn<UpdateUser>;
  isLoading: boolean;
}

export function ProfileFields({ form, isLoading }: ProfileFieldsProps) {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-6">
          <div>
            <Label className="sanctuary-label block mb-2 dark:text-slate-200">
              Nome
            </Label>
            <input
              {...register("name")}
              type="text"
              placeholder="e.g. Neon Genesis Evangelion"
              className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 placeholder:text-indigo-900/30 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
            {errors.name && (
              <span className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <Label className="sanctuary-label block mb-2 dark:text-slate-200">
              Username
            </Label>
            <div className="relative">
              <input
                {...register("userName")}
                type="text"
                className="w-full bg-indigo-900/5 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-indigo-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
            {errors.userName && (
              <span className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.userName.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-end mt-5">
          <DialogButtons
            isLoading={isLoading}
            saveButtonTitle="Salvar"
            saveButtonIcon={<PlusSquare size={16} />}
          />
        </div>
      </div>
    </motion.div>
  );
}
