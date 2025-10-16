"use client";

import React, { useState } from "react";

export default function QuizViewer({
  title,
  onClose,
}: {
  title: string;
  onClose?: () => void;
}) {
  // sample questions — extend or load from JSON/API later
  const sampleQuestions: Record<
    string,
    { q: string; options: string[]; correct: number }[]
  > = {
    "Embedding PHP in HTML": [
      {
        q: "Which tag starts a PHP block?",
        options: ["<script>", "<?php", "<php>"],
        correct: 1,
      },
      {
        q: "How do you echo 'Hello' in PHP?",
        options: ["print('Hello')", "echo 'Hello';", "console.log('Hello')"],
        correct: 1,
      },
    ],
  };

  const questions = sampleQuestions[title] ?? [];
  const [answers, setAnswers] = useState<Record<number, number>>({});

  function submitQuiz() {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    alert(`Score: ${score} / ${questions.length}`);
  }

  if (questions.length === 0) {
    return <div className="text-gray-600">No quiz data for {title}.</div>;
  }

  return (
    <div>
      {questions.map((qq, i) => (
        <div key={i} className="mb-3">
          <div className="font-medium">
            {i + 1}. {qq.q}
          </div>
          <div className="mt-2 space-y-1">
            {qq.options.map((opt, oi) => (
              <label key={oi} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${i}`}
                  checked={answers[i] === oi}
                  onChange={() => setAnswers((s) => ({ ...s, [i]: oi }))}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <button
          onClick={submitQuiz}
          className="bg-[#6ABD8A] text-white px-3 py-1 rounded"
        >
          Submit
        </button>
        <button onClick={onClose} className="border px-3 py-1 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
