"use client";

import { useEffect } from "react";
import { PageError } from "@/components/PageError";
import { toast } from "sonner";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    toast.error("Error: " + error.message);
  }, [error]);

  return (
    <PageError
      error={error}
      reset={reset}
      title="SYSTEM_DISRUPTION"
      message="The sanctuary has encountered an unexpected fracture in its digital structure. Our architects have been notified."
    />
  );
}
