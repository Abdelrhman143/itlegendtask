import React from "react";
import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  const value: number = 63;
  return (
    <div className="relative">
      <Progress value={value} className="mt-15 mb-15 -z-1 " />
      <span
        style={{
          left: `${value}%`,
          transform: "translateX(-50%)",
          top: "-3rem",
        }}
        className={`p-1 rounded-full border-2 text-[#485293] border-[#C8C8C8] text-center absolute -z-1 `}
      >
        you
      </span>
      <span
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        className={`text-center absolute  top-3 text-[#485293] -z-1`}
      >
        {value}%
      </span>
    </div>
  );
}
