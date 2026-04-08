import type {
  UseFormRegister,
  FieldErrors,
  SubmitHandler,
} from "react-hook-form";

type RegisterFields = {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export function RegisterFormFields({
  authError,
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
}: {
  authError: string | null;
  handleSubmit: (
    onSubmit: SubmitHandler<RegisterFields>,
  ) => (e: React.BaseSyntheticEvent) => void;
  onSubmit: SubmitHandler<RegisterFields>;
  register: UseFormRegister<RegisterFields>;
  errors: FieldErrors<RegisterFields>;
  isSubmitting: boolean;
}) {
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 relative pb-4">
        <label
          className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
          htmlFor="name"
        >
          Nome Completo
        </label>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#59e054] text-[#f8f9fa] placeholder:text-[#747685]/50 py-2.5 px-0 border-b border-[#434654] focus:border-[#4ab946] transition-all duration-300 outline-none"
            id="name"
            placeholder="Digite seu nome completo"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
              {errors.name.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2 relative pb-4">
        <label
          className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
          htmlFor="username"
        >
          Nome de Usuário
        </label>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#59e054] text-[#f8f9fa] placeholder:text-[#747685]/50 py-2.5 px-0 border-b border-[#434654] focus:border-[#4ab946] transition-all duration-300 outline-none"
            id="username"
            placeholder="@seu_usuario"
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
        <label
          className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
          htmlFor="password"
        >
          Senha
        </label>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#59e054] text-[#f8f9fa] placeholder:text-[#747685]/50 py-2.5 px-0 border-b border-[#434654] focus:border-[#4ab946] transition-all duration-300 outline-none"
            id="password"
            placeholder="Crie uma senha forte"
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

      <div className="space-y-2 relative pb-4">
        <label
          className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
          htmlFor="confirmPassword"
        >
          Confirmar Senha
        </label>
        <div className="relative group">
          <input
            className="w-full bg-[#333536]/10 border-0 focus:ring-2 focus:ring-[#59e054] text-[#f8f9fa] placeholder:text-[#747685]/50 py-4 px-0 border-b border-[#434654] focus:border-[#4ab946] transition-all duration-300 outline-none"
            id="confirmPassword"
            placeholder="Repita sua senha"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
              {errors.confirmPassword.message}
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
          className="cursor-pointer w-full bg-[#4ab946] text-[#ffffff] font-black text-sm uppercase tracking-widest py-5 rounded-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-[#57da52a9] active:scale-95 transition-all duration-200 disabled:opacity-50"
          type="submit"
        >
          {isSubmitting ? "Criando conta..." : "Criar Conta"}
        </button>
      </div>
    </form>
  );
}
