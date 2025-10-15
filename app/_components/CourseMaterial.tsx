import React from "react";
import ProgressBar from "./ProgressBar";

export default function CourseMaterial() {
  return (
    <aside className="flex-1">
      <h2 className="text-2xl font-semibold">Topics for This Course</h2>
      <ProgressBar />
    </aside>
  );
}
