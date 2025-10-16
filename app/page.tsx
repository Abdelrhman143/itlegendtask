import CommentsSection from "./_components/CommentsSection";
import CourseMaterial from "./_components/CourseMaterial";
import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import VideoSection from "./_components/VideoSection";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="sticky top-0 lg:hidden">
          <VideoSection />
        </div>
        <div className="container flex flex-col lg:flex-row gap-20 p-5">
          {/* left side */}
          <MainContent />
          {/* righ side */}
          <CourseMaterial />
          <div className="lg:hidden">
            <CommentsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
