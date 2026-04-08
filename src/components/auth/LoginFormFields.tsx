import type {
  UseFormRegister,
  FieldErrors,
  SubmitHandler,
} from "react-hook-form";

type LoginFields = { username: string; password: string };

export function LoginFormFields({
  authError,
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
}: {
  authError: string | null;
  handleSubmit: (
    onSubmit: SubmitHandler<LoginFields>,
  ) => (e: React.BaseSyntheticEvent) => void;
  onSubmit: SubmitHandler<LoginFields>;
  register: UseFormRegister<LoginFields>;
  errors: FieldErrors<LoginFields>;
  isSubmitting: boolean;
}) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 relative pb-4">
        <label
          className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
          htmlFor="username"
        >
          Nome de usuário
        </label>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#2051ce] text-[#f8f9fa] placeholder:text-[#747685]/50 py-4 px-0 border-b border-[#434654] focus:border-[#2051ce] transition-all duration-300 outline-none"
            id="username"
            placeholder="Enter system alias"
            type="text"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
              {errors.username.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2 relative pb-4">
        <div className="flex justify-between items-center">
          <label
            className="text-[10px] tracking-widest uppercase font-bold text-[#747685]"
            htmlFor="password"
          >
            Senha
          </label>
        </div>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#2051ce] text-[#f8f9fa] placeholder:text-[#747685]/50 py-4 px-0 border-b border-[#434654] focus:border-[#2051ce] transition-all duration-300 outline-none"
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {authError && (
        <div className="text-red-500 text-xs px-2 py-1 bg-red-500/10 border border-red-500/40 rounded-sm">
          {authError}
        </div>
      )}

      <div className="pt-4">
        <button
          disabled={isSubmitting}
          className="w-full bg-[#2051ce] text-[#ffffff] font-black text-sm uppercase tracking-widest py-5 rounded-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-[#416be8] active:scale-95 transition-all duration-200 disabled:opacity-50"
          type="submit"
        >
          {isSubmitting ? "Authenticating..." : "Sign In"}
        </button>
      </div>

      <div className="relative py-4">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#434654]/30"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-[#0c0e0f] px-4 text-[#747685] tracking-widest uppercase">
            Não tem uma conta?
          </span>
        </div>
      </div>
    </form>
  );
}
