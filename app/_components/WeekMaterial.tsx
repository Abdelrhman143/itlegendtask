"use client";

import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";
import { MinusIcon, PlusIcon } from "lucide-react";
import QuizViewer from "./QuizViewer";

type props = { title: string };
type Lessons = {
  title: string;
  questions: number;
  duration?: number;
  locked: boolean;
  kind?: "pdf" | "quiz";
  url?: string;
};

export default function WeekMaterial({ title }: props) {
  const lessons: Lessons[] = [
    {
      title: "introduction",
      questions: 0,
      duration: 0,
      locked: true,
    },
    {
      title: "Course Overview",
      questions: 0,
      duration: 0,
      kind: "pdf",
      url: "/React.pdf",
      locked: false,
    },
    {
      title: "Course Excercise / Reference Files",
      questions: 2,
      duration: 10,
      locked: true,
    },
    {
      title: "code Editor installation (Optional)",
      questions: 0,
      duration: 0,
      locked: true,
    },
    {
      title: "Embedding PHP in HTML",
      questions: 0,
      duration: 0,
      locked: false,
      kind: "quiz",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Lessons | null>(null);

  useEffect(() => {
    if (selected?.kind === "quiz") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    // if no quiz is open, nothing to cleanup
    return;
  }, [selected]);

  function openLesson(lesson: Lessons) {
    if (lesson.locked) return;

    // if it's a PDF, trigger download and don't open viewer
    if (lesson.kind === "pdf" && lesson.url) {
      const a = document.createElement("a");
      a.href = lesson.url;
      // try to encourage download; browsers may still open inline depending on headers
      a.setAttribute("download", "");
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    setSelected(lesson);
  }

  return (
    <div className="border-gray-100 border-2 px-4 py-8 mt-10 max-w-[425px] mx-auto">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-2">{title}</h3>
        <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <PlusIcon /> : <MinusIcon />}
        </span>
      </div>
      <div className={`${isOpen ? "hidden" : "block"}`}>
        <p className="text-gray-400">
          Advanced story telling techniques for writers personas Characters &
          plats
        </p>
        <div className="mt-5 pb-5 divide-y">
          {lessons.map((lesson) => (
            <Lesson key={lesson.title} lesson={lesson} onOpen={openLesson} />
          ))}
        </div>
        {/* inline viewer area — same max width as container */}
        {selected && (
          <div className="mt-4 border p-4 max-w-[425px] mx-auto bg-white">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">{selected.title}</h4>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-blue-600"
              >
                Close
              </button>
            </div>

            {selected.kind === "pdf" && selected.url && (
              <div className="w-full">
                <iframe
                  src={selected.url}
                  title={selected.title}
                  className="w-full h-full"
                  style={{ height: 360, border: "none" }}
                />
              </div>
            )}

            {selected.kind === "quiz" && (
              <div
                className="fixed inset-0 z-300 bg-white overflow-auto p-6"
                role="dialog"
                aria-modal="true"
              >
                <div className="max-w-[1100px] mx-auto w-full min-h-screen flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{selected.title}</h2>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-sm  border px-3 py-1 rounded"
                    >
                      Close
                    </button>
                  </div>

                  <div className="flex-1">
                    <QuizViewer
                      title={selected.title}
                      onClose={() => setSelected(null)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
