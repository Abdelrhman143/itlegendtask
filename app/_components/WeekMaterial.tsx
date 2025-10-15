import React from "react";
import Lesson from "./Lesson";

type props = { title: string };
type Lessons = {
  title: string;
  questions: number;
  duration?: number;
  locked: boolean;
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
      locked: true,
    },
  ];

  return (
    <div className="border-gray-100 border-2 px-4 py-8 mt-10 max-w-[425px] mx-auto">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">
        Advanced story telling techniques for writers personas Characters &
        plats
      </p>
      <div className="mt-5 pb-5">
        {lessons.map((lesson) => (
          <Lesson key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
