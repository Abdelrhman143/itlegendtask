import React from "react";
import Comment from "./Comment";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function CommentsSection() {
  return (
    <div className="mt-15">
      <h2 className="text-3xl font-semibold mb-10">Comments</h2>
      <div className="divide-y divide-gray-200">
        <Comment />
        <Comment />
        <Comment />
      </div>
      <textarea
        id="w3review"
        name="w3review"
        maxLength={300}
        placeholder="Write A Comment"
        className="rounded-sm p-6 shadow-xl border-2 border-gray-100 w-full mt-10 h-50"
      ></textarea>
      <div className="mt-5">
        <Button className="bg-[#6ABD8A] hover:bg-green-600 cursor-pointer px-10 py-6">
          Submit Review <MoveRight />
        </Button>
      </div>
    </div>
  );
}
