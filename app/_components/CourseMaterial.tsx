import React from "react";
import ProgressBar from "./ProgressBar";
import WeekMaterial from "./WeekMaterial";

export default function CourseMaterial() {
  return (
    <aside className="flex-1" id="curriculm">
      <h2 className="text-2xl font-semibold">Topics for This Course</h2>
      <ProgressBar />
      <WeekMaterial title={"Week 1-4"} />
      <WeekMaterial title={"Week 5-8"} />
      <WeekMaterial title={"Week 9-12"} />
    </aside>
  );
}
