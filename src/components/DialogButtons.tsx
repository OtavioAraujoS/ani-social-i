import { Loader } from "lucide-react";

export function DialogButtons({
  isEditing,
  isLoading,
  functionButton,
  deleteButtonTitle,
  deleteButtonIcon,
  saveButtonTitle,
  saveButtonIcon,
}: {
  isEditing?: boolean;
  isLoading?: boolean;
  functionButton?: () => void;
  deleteButtonTitle: string;
  deleteButtonIcon: React.ReactNode;
  saveButtonTitle: string;
  saveButtonIcon: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap gap-5 justify-end mt-5">
      {isEditing && (
        <button
          type="button"
          disabled={isLoading}
          onClick={functionButton}
          className="cursor-pointer bg-red-700 dark:bg-red-800 text-white px-8 py-3 rounded-lg font-bold text-[0.6rem] lg:text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-600 dark:hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed w-full lg:w-fit"
        >
          {isLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {deleteButtonTitle}
              {deleteButtonIcon}
            </>
          )}
        </button>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer bg-primary dark:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold text-[0.6rem] lg:text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed w-full lg:w-fit"
      >
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {saveButtonTitle}
            {saveButtonIcon}
          </>
        )}
      </button>
    </div>
  );
}
