export function Badge({ status }: { status: string }) {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-[#6A3AB2] text-white";
      case "RELEASING":
        return "bg-[#1853DB] text-white";
      case "PENDING":
      default:
        return "bg-[#B79E88] text-white";
    }
  };

  const getBadgeLabel = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "Concluído";
      case "RELEASING":
        return "Em Exibição";
      case "PENDING":
        return "Planejado";
      default:
        return "Não Listado";
    }
  };

  return (
    <div className="absolute top-3 left-3">
      <span
        className={`px-3 py-1 text-[0.625rem] font-bold rounded-full tracking-wider ${getBadgeStyle(
          status,
        )}`}
      >
        {getBadgeLabel(status)}
      </span>
    </div>
  );
}
