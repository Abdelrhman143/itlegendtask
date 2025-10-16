import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GraduationCap } from "lucide-react";

export default function LeadBoard() {
  return (
    <Dialog>
      <DialogTrigger>
        <GraduationCap />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1 className="font-light">Course Name Shown Here</h1>
            <h2 className="mt-2 font-semibold">Leaderboard</h2>
          </DialogTitle>
          <div className="bg-[#F5F9FA] flex gap-2 items-center p-2 rounded-sm my-5">
            <p className="text-gray-500">
              عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة..
              كمّل عايز أشوف اسمك في الليدر بورد هنا
            </p>
            <span>👏</span>
          </div>
        </DialogHeader>
        <div className="p-4 bg-[#F5F9FA] rounded-sm">
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
          <div className="bg-white p-2 rounded-sm mb-4">
            Abdelrahman Tharwat
          </div>
        </div>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
