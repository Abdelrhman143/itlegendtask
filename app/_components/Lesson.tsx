"use client";

import { FileText, LockKeyhole } from "lucide-react";
import React from "react";

type Lessons = {
  title: string;
  questions: number;
  duration?: number;
  locked: boolean;
  kind?: "pdf" | "quiz";
  url?: string;
};

export default function Lesson({
  lesson,
  onOpen,
}: {
  lesson: Lessons;
  onOpen?: (lesson: Lessons) => void;
}) {
  function handleClick() {
    if (lesson.locked) return;
    onOpen?.(lesson);
  }

  return (
    <>
      {lesson.locked ? (
        <div className="flex justify-between items-center  py-4">
          <div className="flex gap-3">
            <FileText className="text-gray-500 w-4" />
            <h4 className="text-gray-600 w-40">{lesson.title}</h4>
          </div>
          <div className="flex flex-col items-center gap-0.5  mr-2 ">
            {lesson.questions && lesson.questions > 0 ? (
              <span className="bg-green-300/25 p-1 text-sm">
                {lesson.questions} QUESTIONS
              </span>
            ) : (
              ""
            )}
            {lesson.duration && lesson.duration > 0 ? (
              <span className="bg-red-300/25 p-1 text-sm">10 MINUTES</span>
            ) : (
              ""
            )}
          </div>
          {lesson.locked ? <LockKeyhole className="text-gray-500 w-4" /> : ""}
        </div>
      ) : (
        <div
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClick();
          }}
          className="flex justify-between items-center py-4 cursor-pointer"
        >
          <div className="flex gap-3">
            <FileText className="text-gray-500 w-4" />
            <h4 className="text-gray-600 w-40">{lesson.title}</h4>
          </div>
          <div className="flex flex-col items-center gap-0.5  mr-2">
            {lesson.questions && lesson.questions > 0 ? (
              <span className="bg-green-300/25 p-1 text-sm">
                {lesson.questions} QUESTIONS
              </span>
            ) : (
              ""
            )}
            {lesson.duration && lesson.duration > 0 ? (
              <span className="bg-red-300/25 p-1 text-sm">10 MINUTES</span>
            ) : (
              ""
            )}
          </div>
          {lesson.locked ? <LockKeyhole className="text-gray-500 w-4" /> : ""}
        </div>
      )}
    </>
  );
}
