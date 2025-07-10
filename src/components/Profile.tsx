
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Clock, TrendingUp, Edit, Settings, Calendar, Target } from "lucide-react";

export const Profile = () => {
  const achievements = [
    { id: 1, title: "React Master", description: "Completed Advanced React course", icon: "🚀", earned: true },
    { id: 2, title: "Data Scientist", description: "Finished Data Science Fundamentals", icon: "📊", earned: true },
    { id: 3, title: "Design Guru", description: "Mastered UX Design Principles", icon: "🎨", earned: true },
    { id: 4, title: "Code Reviewer", description: "Helped 10 fellow students", icon: "👥", earned: true },
    { id: 5, title: "Speed Learner", description: "Completed course in record time", icon: "⚡", earned: false },
    { id: 6, title: "Perfectionist", description: "Scored 100% on 5 quizzes", icon: "💯", earned: false }
  ];

  const courses = [
    { name: "Advanced React Development", progress: 68, status: "In Progress" },
    { name: "Data Science Fundamentals", progress: 34, status: "In Progress" }, 
    { name: "UX Design Principles", progress: 100, status: "Completed" },
    { name: "Mobile App Development", progress: 0, status: "Not Started" }
  ];

  const stats = [
    { label: "Courses Completed", value: "15", icon: BookOpen, color: "text-blue-600" },
    { label: "Study Hours", value: "124", icon: Clock, color: "text-green-600" },
    { label: "Achievements", value: "8", icon: Award, color: "text-yellow-600" },
    { label: "Current Streak", value: "12", icon: TrendingUp, color: "text-purple-600" }
  ];

  const learningGoals = [
    { goal: "Complete React course by month end", progress: 68, dueDate: "Dec 31" },
    { goal: "Earn Data Science certification", progress: 34, dueDate: "Jan 15" },
    { goal: "Start Mobile Development track", progress: 0, dueDate: "Feb 1" }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                JS
              </div>
              <div>
                <h1 className="text-2xl font-bold">John Student</h1>
                <p className="text-blue-100">Frontend Developer & Lifelong Learner</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className="bg-white text-blue-600">Level 5</Badge>
                  <span className="text-sm">Member since Jan 2024</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">78%</div>
                <p className="text-sm text-gray-600">Average Course Completion</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>This Month's Progress</span>
                  <span>32 hours</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">4.8</div>
                  <div className="text-xs text-gray-600">Avg Quiz Score</div>
                </div>
                <div>
                  <div className="text-xl font-bold">12</div>
                  <div className="text-xs text-gray-600">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-medium">Completed React Hooks lesson</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-medium">Earned "Code Reviewer" badge</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                  📝
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted assignment</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{course.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Badge variant={course.status === 'Completed' ? 'default' : 'outline'}>
                        {course.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border text-center ${
                      achievement.earned 
                        ? 'bg-yellow-50 border-yellow-200' 
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                    {achievement.earned && (
                      <Badge className="mt-2 bg-yellow-600">Earned</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningGoals.map((goal, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{goal.goal}</h3>
                    <Badge variant="outline">Due {goal.dueDate}</Badge>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                <Target className="w-4 h-4 mr-2" />
                Add New Goal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
