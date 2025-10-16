import React from "react";
import StatsColumn from "./StatsColumn";

export default function CourseStats() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10">Course Materials</h2>
      <div className="bg-white rounded-sm p-8 shadow-xl border-2 border-gray-100 flex gap-30">
        <div className=" basis-full lg:basis-1/2">
          <StatsColumn />
        </div>
        <div className="basis-full hidden lg:block lg:basis-1/2">
          <StatsColumn />
        </div>
      </div>
    </div>
  );
}
