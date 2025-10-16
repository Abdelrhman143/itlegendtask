import { GraduationCap, Logs, MessagesSquare } from "lucide-react";
import Link from "next/link";
import React from "react";
import QuestionPopup from "./QuestionPopup";
import LeadBoard from "./LeadBoard";

// className="fill-gray-400"

export default function MobileIcons() {
  return (
    <div className="flex gap-4 mt-10 mb-15">
      <div className="w-10 h-10 border-2 rounded-full p-2">
        <Link href="#curriculm">
          <Logs />
        </Link>
      </div>
      <div className="w-10 h-10 border-2 rounded-full flex self-center p-2">
        <QuestionPopup />
      </div>
      <Link href="#comments">
        <div className="w-10 h-10 border-2 rounded-full flex self-center p-2">
          <MessagesSquare />
        </div>
      </Link>
      <div className="w-10 h-10 border-2 rounded-full flex self-center p-2">
        <LeadBoard />
      </div>
    </div>
  );
}
