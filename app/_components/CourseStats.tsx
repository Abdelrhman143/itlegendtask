import React from "react";
import StatsColumn from "./StatsColumn";

export default function CourseStats() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10">Course Materials</h2>
      <div className="bg-white rounded-sm p-8 shadow-xl border-2 border-gray-100 flex gap-40">
        <StatsColumn />
        <StatsColumn />
      </div>
    </div>
  );
}
