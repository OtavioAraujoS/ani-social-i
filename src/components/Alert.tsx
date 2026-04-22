import { toast } from "sonner";

export function AlertError({ message }: { message: string }) {
  return toast.error(message, {
    style: {
      background: "#7f1d1d",
      color: "#fee2e2",
      border: "1px solid #ef4444",
    },
  });
}

export function AlertSuccess({ message }: { message: string }) {
  return toast.success(message, {
    style: {
      background: "#166534",
      color: "#d1fae5",
      border: "1px solid #22c55e",
    },
  });
}

export function AlertInfo({ message }: { message: string }) {
  return toast(message, {
    style: {
      background: "#1e3a8a",
      color: "#dbeafe",
      border: "1px solid #3b82f6",
    },
  });
}

export function AlertWarning({ message }: { message: string }) {
  return toast(message, {
    style: {
      background: "#78350f",
      color: "#fef3c7",
      border: "1px solid #f97316",
    },
  });
}
