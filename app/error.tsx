"use client"; // Error components must be Client Components

import { RotateCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col flex-center gap-2 h-[50vh]">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="button flex-center gap-2 px-4 py-2"
      >
        <RotateCw /> Try again
      </button>
    </div>
  );
}
