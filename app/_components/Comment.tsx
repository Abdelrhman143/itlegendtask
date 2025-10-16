import Image from "next/image";
import React from "react";
import userImg from "@/public/user.png";

export default function Comment() {
  return (
    <div className="flex gap-5 mt-5 pb-5">
      {/* image */}
      <div className="w-20 h-20">
        <Image src={userImg} alt="use Image"></Image>
      </div>
      <div>
        {/* name */}
        <div className="mb-3">
          <h3 className="text-[#6C6C6C] font-semibold">Abdelrahman Tharwat</h3>
          <div className="mt-1 text-[#6C6C6C]">Oct 10, 2025</div>
        </div>
        {/* content */}
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consectetur officia, adipisci omnis tempore autem.
        </p>
      </div>
    </div>
  );
}
