
import { Bell, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Page = 'dashboard' | 'courses' | 'course-detail' | 'quiz' | 'profile' | 'discussions' | 'achievements';

interface HeaderProps {
  onToggleSidebar: () => void;
  currentPage: Page;
}

const pageTitle = {
  dashboard: 'Dashboard',
  courses: 'Courses',
  'course-detail': 'Course Details',
  quiz: 'Assessment',
  profile: 'Profile',
  discussions: 'Discussions',
  achievements: 'Achievements',
};

export const Header = ({ onToggleSidebar, currentPage }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {pageTitle[currentPage]}
            </h1>
            <p className="text-sm text-gray-500">Welcome back! Ready to learn something new?</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search courses, topics..."
                className="pl-10 w-80"
              />
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};
