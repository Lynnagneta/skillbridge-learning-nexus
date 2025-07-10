
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Award, TrendingUp, Play, Users } from "lucide-react";

type Page = 'dashboard' | 'courses' | 'course-detail' | 'quiz' | 'profile' | 'discussions' | 'achievements';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  onCourseSelect: (courseId: string) => void;
}

const recentCourses = [
  {
    id: "1",
    title: "Advanced React Development",
    progress: 68,
    nextLesson: "React Hooks Deep Dive",
    instructor: "Sarah Wilson",
    thumbnail: "🚀"
  },
  {
    id: "2", 
    title: "Data Science Fundamentals",
    progress: 34,
    nextLesson: "Statistical Analysis",
    instructor: "Dr. Michael Chen",
    thumbnail: "📊"
  },
  {
    id: "3",
    title: "UX Design Principles",
    progress: 89,
    nextLesson: "User Testing Methods",
    instructor: "Emma Rodriguez",
    thumbnail: "🎨"
  }
];

export const Dashboard = ({ onNavigate, onCourseSelect }: DashboardProps) => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John! 🎉</h2>
        <p className="text-blue-100 mb-4">You're making great progress. Keep up the excellent work!</p>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm text-blue-100">Courses Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">124</div>
            <div className="text-sm text-blue-100">Hours Learned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm text-blue-100">Certificates</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24h</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Badges earned</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Average completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-3xl">{course.thumbnail}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs text-gray-500">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                  <Button 
                    onClick={() => onCourseSelect(course.id)}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Continue
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => onNavigate('courses')} 
                className="w-full justify-start" 
                variant="outline"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </Button>
              <Button 
                onClick={() => onNavigate('discussions')} 
                className="w-full justify-start" 
                variant="outline"
              >
                <Users className="w-4 h-4 mr-2" />
                Join Discussion
              </Button>
              <Button 
                onClick={() => onNavigate('achievements')} 
                className="w-full justify-start" 
                variant="outline"
              >
                <Award className="w-4 h-4 mr-2" />
                View Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Learning Streak */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Streak 🔥</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
                <p className="text-sm text-gray-600">Days in a row!</p>
                <p className="text-xs text-gray-500 mt-2">Keep it up! You're on fire!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
