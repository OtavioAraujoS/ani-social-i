"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authService, getApiError } from "@/services/apiClient";
import { RegisterFormFields } from "./RegisterFormFields";
import { AuthFooter } from "./AuthFooter";
import { useRouter } from "next/navigation";
import Link from "next/link";

const registerSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    username: z
      .string()
      .min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
      .regex(/^[a-zA-Z0-9_]+$/, "Apenas letras e números são permitidos"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterSchema = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [authError, setAuthError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    setAuthError(null);
    try {
      await authService.register({
        name: data.name,
        userName: data.username,
        password: data.password,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: unknown) {
      const apiError = getApiError(err);
      setAuthError(apiError.message);
    }
  };
  return (
    <section className="flex-1 w-full md:w-1/2 lg:w-2/5 flex flex-col bg-[#0c0e0f] relative md:min-h-screen overflow-y-auto">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(32,81,206,0.1)_0%,rgba(32,81,206,0.05)_100%)] pointer-events-none"></div>

      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-16 lg:px-24">
        <div className="w-full max-w-sm relative z-10">
          <header className="mb-8">
            <div className="inline-block px-3 py-1 mb-4 bg-[#59e054]/10 border-l-2 border-[#59e054]">
              <span className="text-[10px] tracking-[0.2em] uppercase font-black text-[#59e054]">
                PROTOCOLO DE CRIAÇÃO
              </span>
            </div>
            <h2 className="font-black text-5xl tracking-tighter text-[#f8f9fa] mb-2">
              Registrar
            </h2>
            <p className="text-[#c4c5d6] font-medium">
              Crie sua identidade digital no Ani/Social.
            </p>
          </header>

          {success ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#59e054]/20 border border-[#59e054]/40 flex items-center justify-center">
                <span className="text-[#59e054] text-2xl">✓</span>
              </div>
              <p className="text-[#f8f9fa] font-bold text-lg">
                Conta criada com sucesso!
              </p>
              <p className="text-[#747685] text-sm">
                Redirecionando para o login...
              </p>
            </div>
          ) : (
            <RegisterFormFields
              authError={authError}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
            />
          )}

          <footer className="mt-8 text-center">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#747685]">
              Já tem uma conta?{" "}
              <Link
                className="text-[#59e054] font-black hover:underline"
                href="/login"
              >
                Fazer login
              </Link>
            </p>
          </footer>
        </div>
      </div>

      <AuthFooter />
    </section>
  );
}
