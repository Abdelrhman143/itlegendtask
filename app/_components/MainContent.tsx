import React from "react";
import VideoSection from "./VideoSection";
import SocialMedia from "./SocialMedia";
import CourseStats from "./CourseStats";
import CommentsSection from "./CommentsSection";

export default function MainContent() {
  return (
    <div className="basis-3/5">
      <VideoSection />
      <SocialMedia />
      <CourseStats />
      <CommentsSection />
    </div>
  );
}
