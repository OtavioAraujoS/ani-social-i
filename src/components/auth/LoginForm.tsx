"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Api } from "@/services/api";

const loginSchema = z.object({
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [authError, setAuthError] = useState<string | null>(null);
  const { login } = useAuth();

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
      const apiClient = new Api({
        baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
      });

      const response = await apiClient.api.postApiAuthLogin({
        userName: data.username,
        password: data.password,
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const responseData = response.data as unknown as Record<string, unknown>;
      const token = responseData?.token as string | undefined;

      if (!token) {
        throw new Error("Token não retornado pela API");
      }

      login({ name: data.username, email: "otavio@gemini.ai" }, token);
    } catch (err: unknown) {
      console.error(err);
      setAuthError("Falha na autenticação. Verifique suas credenciais.");
    }
  };

  return (
    <section className="h-full w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center bg-[#0c0e0f] p-6 md:p-16 lg:p-24 relative min-h-[60vh] md:min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(32,81,206,0.1)_0%,rgba(32,81,206,0.05)_100%)] pointer-events-none"></div>
      <div className="w-full max-w-sm relative z-10">
        <header className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 bg-[#2051ce]/10 border-l-2 border-[#2051ce]">
            <span className="text-[10px] tracking-[0.2em] uppercase font-black text-[#2051ce]">
              Security Protocol
            </span>
          </div>
          <h2 className="font-black text-5xl tracking-tighter text-[#f8f9fa] mb-2">
            Authenticate
          </h2>
          <p className="text-[#c4c5d6] font-medium">
            Please verify your digital signature.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {authError && (
            <div className="text-red-500 text-xs px-2 py-1 bg-red-500/10 border border-red-500/40 rounded-sm">
              {authError}
            </div>
          )}
          <div className="space-y-2 relative pb-4">
            <label
              className="text-[10px] tracking-widest uppercase font-bold text-[#747685] block"
              htmlFor="username"
            >
              Username
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
                Password
              </label>
              <a
                className="text-[10px] tracking-widest uppercase font-bold text-[#2051ce] hover:text-[#416be8] transition-colors"
                href="#"
              >
                Reset?
              </a>
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
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-[#434654]/30"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#0c0e0f] px-4 text-[#747685] tracking-widest uppercase">
                External Sync
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex items-center justify-center space-x-2 py-4 border border-[#434654]/30 hover:bg-[#1d2021] transition-colors group"
              type="button"
            >
              <span className="text-[10px] tracking-tighter font-black text-[#f8f9fa] group-hover:text-[#2051ce] transition-colors">
                G-IDENTITY
              </span>
            </button>
            <button
              className="flex items-center justify-center space-x-2 py-4 border border-[#434654]/30 hover:bg-[#1d2021] transition-colors group"
              type="button"
            >
              <span className="text-[10px] tracking-tighter font-black text-[#f8f9fa] group-hover:text-[#2051ce] transition-colors">
                X-GATEWAY
              </span>
            </button>
          </div>
        </form>

        <footer className="mt-12 text-center">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#747685]">
            No access key?{" "}
            <a className="text-[#416be8] font-black hover:underline" href="#">
              Request Entry
            </a>
          </p>
        </footer>
      </div>

      {/* Footer Meta */}
      <div className="relative mt-12 md:absolute md:bottom-0 w-full flex justify-between md:flex-row flex-col gap-4 items-center px-12 py-8 pointer-events-none text-center md:text-left">
        <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
          © 2024 Ani/Social. O Santuário Digital.
        </span>
        <div className="flex space-x-6 pointer-events-auto">
          <a
            className="text-[10px] tracking-widest uppercase font-medium text-slate-500 hover:text-slate-50 transition-colors"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-[10px] tracking-widest uppercase font-medium text-slate-500 hover:text-slate-50 transition-colors"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-[10px] tracking-widest uppercase font-medium text-slate-500 hover:text-slate-50 transition-colors"
            href="#"
          >
            Support
          </a>
        </div>
      </div>
    </section>
  );
}
