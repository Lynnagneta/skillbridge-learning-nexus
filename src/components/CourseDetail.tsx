
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, Users, Star, CheckCircle, Lock, BookOpen, MessageSquare } from "lucide-react";

type Page = 'dashboard' | 'courses' | 'course-detail' | 'quiz' | 'profile' | 'discussions' | 'achievements';

interface CourseDetailProps {
  courseId: string | null;
  onStartQuiz: (quizId: string) => void;
  onNavigate: (page: Page) => void;
}

const courseData = {
  "1": {
    title: "Advanced React Development",
    description: "Master React hooks, context, and performance optimization techniques. This comprehensive course will take you from intermediate to advanced React developer.",
    instructor: "Sarah Wilson",
    duration: "12 weeks",
    students: 2840,
    rating: 4.8,
    level: "Advanced",
    progress: 68,
    thumbnail: "🚀",
    category: "Web Development",
    modules: [
      {
        id: 1,
        title: "React Hooks Deep Dive",
        lessons: [
          { id: 1, title: "useState and useEffect", duration: "15 min", completed: true },
          { id: 2, title: "Custom Hooks", duration: "20 min", completed: true },
          { id: 3, title: "useContext and useReducer", duration: "25 min", completed: false }
        ]
      },
      {
        id: 2,
        title: "Performance Optimization",
        lessons: [
          { id: 4, title: "React.memo and useMemo", duration: "18 min", completed: false },
          { id: 5, title: "Code Splitting", duration: "22 min", completed: false },
          { id: 6, title: "Bundle Analysis", duration: "15 min", completed: false }
        ]
      },
      {
        id: 3,
        title: "Advanced Patterns",
        lessons: [
          { id: 7, title: "Render Props", duration: "20 min", completed: false },
          { id: 8, title: "Higher Order Components", duration: "25 min", completed: false },
          { id: 9, title: "Compound Components", duration: "30 min", completed: false }
        ]
      }
    ]
  }
};

export const CourseDetail = ({ courseId, onStartQuiz, onNavigate }: CourseDetailProps) => {
  const course = courseId ? courseData[courseId as keyof typeof courseData] : courseData["1"];
  
  if (!course) return <div>Course not found</div>;

  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((total, module) => 
    total + module.lessons.filter(lesson => lesson.completed).length, 0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-5xl mb-4">{course.thumbnail}</div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-blue-100 mb-4">{course.description}</p>
            
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span>Course Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3 bg-blue-700" />
            </div>
          </div>
          
          <div className="ml-6">
            <Badge className="mb-4 bg-white text-blue-600">{course.level}</Badge>
            <div className="space-y-2">
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <Play className="w-4 h-4 mr-2" />
                Continue Learning
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => onNavigate('discussions')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Join Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <Tabs defaultValue="curriculum" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <p className="text-gray-600">
                {completedLessons} of {totalLessons} lessons completed
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">{module.title}</h3>
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-400" />
                          )}
                          <span className={lesson.completed ? "text-gray-800" : "text-gray-500"}>
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                          <Button size="sm" variant={lesson.completed ? "default" : "outline"}>
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-yellow-800">Ready for Assessment?</h4>
                    <p className="text-sm text-yellow-700">Test your knowledge with our interactive quiz</p>
                  </div>
                  <Button 
                    onClick={() => onStartQuiz("react-hooks-quiz")}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Take Quiz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What you'll learn</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    Master React Hooks including useState, useEffect, and custom hooks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    Optimize React applications for better performance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    Implement advanced React patterns and best practices
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    Build scalable and maintainable React applications
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Prerequisites</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Solid understanding of JavaScript ES6+</li>
                  <li>• Basic React knowledge (components, props, state)</li>
                  <li>• Familiarity with modern development tools</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Student Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      U{review}
                    </div>
                    <div>
                      <div className="font-medium">User {review}</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Excellent course! The instructor explains complex concepts clearly and the hands-on exercises really help solidify the learning.
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructor">
          <Card>
            <CardHeader>
              <CardTitle>About the Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  SW
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor}</h3>
                  <p className="text-gray-600 mb-3">Senior Frontend Developer & Educator</p>
                  <p className="text-gray-700">
                    Sarah is a passionate educator with over 8 years of experience in React development. 
                    She has worked with companies like Facebook and Airbnb, and has taught thousands of 
                    students worldwide.
                  </p>
                  <div className="mt-4 flex items-center space-x-6">
                    <div>
                      <div className="font-semibold">12,000+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="font-semibold">15</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                    <div>
                      <div className="font-semibold">4.8</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
