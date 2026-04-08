export function AuthFooter() {
  return (
    <div className="relative z-10 w-full flex justify-between items-center px-8 py-6 border-t border-[#434654]/20">
      <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
        © {new Date().getFullYear()} Ani/Social. O Santuário Digital.
      </span>
      <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
        Todos os direitos reservados.
      </span>
    </div>
  );
}
