export enum StatusMap {
  COMPLETED = "Concluído",
  RELEASING = "Assistindo",
  PENDING = "Pendente",
}

export const statusParamMap: Record<string, keyof typeof StatusMap> = {
  concluidos: "COMPLETED",
  assistindo: "RELEASING",
  pendente: "PENDING",
};

export const statusMap: Record<keyof typeof StatusMap, string> = {
  COMPLETED: "Concluído",
  RELEASING: "Assistindo",
  PENDING: "Pendente",
};
