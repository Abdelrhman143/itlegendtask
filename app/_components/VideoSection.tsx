"use client";

import { PlayCircleIcon } from "lucide-react";
import React, { useRef, useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handlePlay() {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className="relative ">
      {!isPlaying && (
        <div
          className="absolute lg:rounded-sm bg-black/25 z-200 w-full h-full cursor-pointer flex items-center justify-center"
          onClick={handlePlay}
        >
          <PlayCircleIcon className="absolute text-white  w-15 h-15" />
        </div>
      )}
      <video
        ref={videoRef}
        controls={isPlaying}
        autoPlay={isPlaying}
        preload="true"
        className="rounded-sm"
      >
        <source
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
