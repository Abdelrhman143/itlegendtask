"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleQuestionMark } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export default function QuestionPopup() {
  const [question, setQuestion] = useState("");

  function handleQuestion(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(e.target.value);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <CircleQuestionMark />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ask Your Question</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="question" className="sr-only">
              Link
            </label>
            <textarea
              id="question"
              name="question"
              maxLength={300}
              placeholder="Write A Question"
              className="rounded-sm p-6 shadow-xl border-2 border-gray-100 w-full mt-10 h-50"
              value={question}
              onChange={handleQuestion}
            ></textarea>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-[#6ABD8A] hover:bg-green-600 cursor-pointer px-10 py-6"
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
