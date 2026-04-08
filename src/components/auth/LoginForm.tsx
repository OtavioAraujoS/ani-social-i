"use client";

import { useState } from "react";
import { useAuthStore } from "@/stores/authStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authService, getApiError } from "@/services/apiClient";
import { LoginFormFields } from "./LoginFormFields";
import { useRouter } from "next/navigation";
import Link from "next/link";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [authError, setAuthError] = useState<string | null>(null);
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setAuthError(null);
    try {
      const { token } = await authService.login({
        userName: data.username,
        password: data.password,
      });
      login(token);
      router.replace("/dashboard");
    } catch (err: unknown) {
      const apiError = getApiError(err);
      setAuthError(apiError.message);
    }
  };

  return (
    <section className="h-full w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center bg-[#0c0e0f] p-6 md:p-16 lg:p-24 relative min-h-[60vh] md:min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(32,81,206,0.1)_0%,rgba(32,81,206,0.05)_100%)] pointer-events-none"></div>
      <div className="w-full max-w-sm relative z-10">
        <header className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 bg-[#2051ce]/10 border-l-2 border-[#2051ce]">
            <span className="text-[10px] tracking-[0.2em] uppercase font-black text-[#2051ce]">
              PROTOCOLO DE SEGURANÇA
            </span>
          </div>
          <h2 className="font-black text-5xl tracking-tighter text-[#f8f9fa] mb-2">
            Login
          </h2>
          <p className="text-[#c4c5d6] font-medium">
            Por favor, insira suas credenciais para fazer login.
          </p>
        </header>

        <LoginFormFields
          authError={authError}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />

        <footer className="mt-12 text-center">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#747685]">
            Registre-se{" "}
            <Link
              className="text-[#416be8] font-black hover:underline"
              href="/register"
            >
              clicando aqui
            </Link>
          </p>
        </footer>
      </div>

      <div className="relative mt-12 md:absolute md:bottom-0 w-full flex justify-between md:flex-row flex-col gap-4 items-center px-12 py-8 pointer-events-none text-center md:text-left">
        <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
          © {new Date().getFullYear()} Ani/Social. O Santuário Digital.
        </span>
        <div className="flex space-x-6 pointer-events-auto">
          <a className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
            Todos os direitos reservados.
          </a>
        </div>
      </div>
    </section>
  );
}
