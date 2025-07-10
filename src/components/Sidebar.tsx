
import { Home, BookOpen, MessageSquare, Award, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Page = 'dashboard' | 'courses' | 'course-detail' | 'quiz' | 'profile' | 'discussions' | 'achievements';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { id: 'dashboard' as Page, label: 'Dashboard', icon: Home },
  { id: 'courses' as Page, label: 'Courses', icon: BookOpen },
  { id: 'discussions' as Page, label: 'Discussions', icon: MessageSquare },
  { id: 'achievements' as Page, label: 'Achievements', icon: Award },
  { id: 'profile' as Page, label: 'Profile', icon: User },
];

export const Sidebar = ({ currentPage, onNavigate, isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo and close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">SkillBridge</span>
            </div>
            <button 
              onClick={onToggle}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onToggle();
                  }}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">JS</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">John Student</p>
                <p className="text-xs text-gray-500">Level 5 Learner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
