
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { CourseList } from "@/components/CourseList";
import { CourseDetail } from "@/components/CourseDetail";
import { Quiz } from "@/components/Quiz";
import { Profile } from "@/components/Profile";
import { Discussions } from "@/components/Discussions";
import { Achievements } from "@/components/Achievements";

type Page = 'dashboard' | 'courses' | 'course-detail' | 'quiz' | 'profile' | 'discussions' | 'achievements';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-detail');
  };

  const handleStartQuiz = (quizId: string) => {
    setCurrentPage('quiz');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} onCourseSelect={handleCourseSelect} />;
      case 'courses':
        return <CourseList onCourseSelect={handleCourseSelect} />;
      case 'course-detail':
        return <CourseDetail courseId={selectedCourseId} onStartQuiz={handleStartQuiz} onNavigate={setCurrentPage} />;
      case 'quiz':
        return <Quiz onComplete={() => setCurrentPage('dashboard')} />;
      case 'profile':
        return <Profile />;
      case 'discussions':
        return <Discussions />;
      case 'achievements':
        return <Achievements />;
      default:
        return <Dashboard onNavigate={setCurrentPage} onCourseSelect={handleCourseSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="flex-1 flex flex-col">
          <Header 
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            currentPage={currentPage}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="animate-fade-in">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
