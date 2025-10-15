import CourseMaterial from "./_components/CourseMaterial";
import Header from "./_components/Header";
import MainContent from "./_components/MainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="container flex gap-20 p-5">
          {/* left side */}
          <MainContent />
          {/* righ side */}
          <CourseMaterial />
        </div>
      </div>
    </div>
  );
}
