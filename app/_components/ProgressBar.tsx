import React from "react";
import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  const value: number = 63;
  return (
    <div className="relative">
      <Progress value={value} className="mt-15 mb-10" />
      <span
        className={`p-1 rounded-full border-2 border-[#C8C8C8] text-center absolute left-[${
          value - 3
        }%] -top-12`}
      >
        you
      </span>
    </div>
  );
}
