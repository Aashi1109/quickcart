import { cn } from "@/lib/utils";
import React from "react";

const Badge = ({ text, classes }: { text: string; classes?: string }) => {
  return (
    <div
      className={cn(
        "px-2 py-1 text-red-400 flex-center bg-white rounded-full text-xs",
        classes
      )}
    >
      <p>{text}</p>
    </div>
  );
};

export default Badge;
