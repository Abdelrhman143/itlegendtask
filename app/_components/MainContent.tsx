import React from "react";
import VideoSection from "./VideoSection";
import SocialMedia from "./SocialMedia";
import CourseStats from "./CourseStats";
import CommentsSection from "./CommentsSection";
import MobileIcons from "./MobileIcons";

export default function MainContent() {
  return (
    <div className="basis-3/5">
      <div className="top-0 z-10 hidden lg:block">
        <VideoSection />
      </div>
      <div className="hidden lg:block">
        <SocialMedia />
      </div>
      <div className="lg:hidden">
        <MobileIcons />
      </div>
      <CourseStats />
      <div className="hidden lg:block">
        <CommentsSection />
      </div>
    </div>
  );
}
